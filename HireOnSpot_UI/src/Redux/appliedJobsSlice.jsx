import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const API_URL = `${baseUrl}api/applyjobs`;

// 🔹 Get Authorization Headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

// ✅ Apply for a Job
export const applyForJob = createAsyncThunk("appliedJobs/apply", async ({ job_id, resume_url, cover_letter }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/`, { job_id, resume_url, cover_letter }, getAuthHeaders());
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Error applying for the job");
  }
});

// ✅ Fetch Jobseeker’s Applied Jobs
export const fetchAppliedJobsForUser = createAsyncThunk("appliedJobs/fetchUserJobs", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/user`, getAuthHeaders());
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Error fetching applied jobs");
  }
});

// ✅ Fetch Applications for a Job (Employer View)
export const fetchApplicationsForEmployer = createAsyncThunk("appliedJobs/fetchEmployerJobs", async (job_id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/employer/${job_id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Error fetching job applications");
  }
});

// ✅ Fetch All Applications (Admin View)
export const fetchAllApplications = createAsyncThunk("appliedJobs/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/applications`, getAuthHeaders());
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Error fetching all applications");
  }
});

// // ✅ Update Application Status & Comments
// export const updateApplicationStatus = createAsyncThunk("appliedJobs/updateStatus", async ({ id, status, comments }, { rejectWithValue }) => {
//   try {
//     await axios.put(`${API_URL}/${id}`, { status, comments }, getAuthHeaders());
//     return { id, status, comments };
//   } catch (error) {
//     return rejectWithValue(error.response?.data?.message || "Error updating application status");
//   }
// });
export const updateApplicationStatus = createAsyncThunk(
  "appliedJobs/updateStatus",
  async ({ id, status, comments }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { status, comments }, getAuthHeaders());
      return { id, status, comments }; // Pass only provided fields
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error updating application status");
    }
  }
);

// ✅ Delete Application
export const deleteApplication = createAsyncThunk("appliedJobs/delete", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Error deleting application");
  }
});

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState: {
    applications: [], // ✅ Single array for all applications
    isLoading: false,
    count: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyForJob.pending, (state) => { state.isLoading = true; })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications.push(action.payload);
      })
      .addCase(applyForJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAppliedJobsForUser.pending, (state) => { state.isLoading = true; })
      .addCase(fetchAppliedJobsForUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = action.payload.applications;
        state.count = action.payload.count;
      })
      .addCase(fetchAppliedJobsForUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchApplicationsForEmployer.pending, (state) => { state.isLoading = true; })
      .addCase(fetchApplicationsForEmployer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = action.payload;
      })
      .addCase(fetchApplicationsForEmployer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllApplications.pending, (state) => { state.isLoading = true; })
      .addCase(fetchAllApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = action.payload;
      })
      .addCase(fetchAllApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  
      .addCase(updateApplicationStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.applications.findIndex((app) => app.id === action.payload.id);

        if (index !== -1) {
          // Preserve existing values if status or comments are not provided
          state.applications[index].status = action.payload.status ?? state.applications[index].status;
          state.applications[index].comments = action.payload.comments ?? state.applications[index].comments;
        }
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteApplication.pending, (state) => { state.isLoading = true; })
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = state.applications.filter((app) => app.id !== action.payload);
      })
      .addCase(deleteApplication.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default appliedJobsSlice.reducer;
