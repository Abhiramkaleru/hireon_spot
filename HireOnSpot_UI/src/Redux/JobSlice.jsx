import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const API_URL = `${baseUrl}api/jobs`;
// const INTERESTED_API_URL = `${baseUrl}api/interested`;
const INTERESTED_API_URL = `localhost:5000/api/interested`;

// Helper function for authentication headers
const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

// 1️⃣ Fetch Employer Jobs
export const fetchJobs = createAsyncThunk(
  "jobs/fetchEmployerJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/`, getAuthHeaders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch jobs");
    }
  }
);

// 2️⃣ Post New Job
export const postJob = createAsyncThunk(
  "jobs/postJob",
  async (jobData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/`, jobData, getAuthHeaders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to post job");
    }
  }
);

// 3️⃣ Update Job
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, jobData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, jobData, getAuthHeaders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update job");
    }
  }
);

// 4️⃣ Delete Job
export const deleteJob = createAsyncThunk(
  "jobs/deleteJob",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
      return id; // Return deleted job ID to remove from state
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete job");
    }
  }
);

// Fetch Interested Jobs
export const fetchInterestedJobs = createAsyncThunk(
  "jobs/fetchInterestedJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(INTERESTED_API_URL, getAuthHeaders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch interested jobs");
    }
  }
);

// Add Interested Job
export const addInterestedJob = createAsyncThunk(
  "jobs/addInterestedJob",
  async (job, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        INTERESTED_API_URL,{ job_id: job.id }, getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to save job");
    }
  }
);

// Remove Interested Job
export const removeInterestedJob = createAsyncThunk(
  "jobs/removeInterestedJob",
  async (job_id, { rejectWithValue }) => {
    try {
      await axios.delete(`${INTERESTED_API_URL}/${job_id}`, getAuthHeaders());
      return job_id; // Fixed: Correctly returning `job_id`
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to remove job");
    }
  }
);


export const fetchInterestedCount = createAsyncThunk(
  "jobs/fetchInterestedCount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${INTERESTED_API_URL}/count`,getAuthHeaders());
      return data.interested_count;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch interested count"
      );
    }
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    interestedJobs: [],
    interestedCount: 0,
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      // Fetch Employer Jobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Post Job
      .addCase(postJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(postJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Job
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        );
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Job
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Interested Jobs
      .addCase(fetchInterestedJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInterestedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.interestedJobs = action.payload;
      })
      .addCase(fetchInterestedJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Interested Job
      .addCase(addInterestedJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInterestedJob.fulfilled, (state, action) => {
        state.loading = false;
        state.interestedJobs.push(action.payload);
      })
      .addCase(addInterestedJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove Interested Job
      .addCase(removeInterestedJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeInterestedJob.fulfilled, (state, action) => {
        state.loading = false;
        state.interestedJobs = state.interestedJobs.filter(
          (job) => job.id !== action.payload
        );
      })
      .addCase(removeInterestedJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchInterestedCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInterestedCount.fulfilled, (state, action) => {
        state.loading = false;
        state.interestedCount = action.payload;
      })
      .addCase(fetchInterestedCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default jobSlice.reducer;
