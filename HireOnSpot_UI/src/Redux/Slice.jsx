import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

// Base URL
const API_URL = `${baseUrl}api/admin/users`; // Adjust according to your backend

// 1️⃣ Fetch Employers
export const fetchEmployers = createAsyncThunk(
  "admin/fetchEmployers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch employers");
    }
  }
);

// 2️⃣ Add Employer
export const addEmployer = createAsyncThunk(
  "admin/addEmployer",
  async (employerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, employerData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to add employer");
    }
  }
);

// 3️⃣ Update Employer (Fixed)
export const updateEmployer = createAsyncThunk(
  "admin/updateEmployer",
  async ({ id, employerData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, employerData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update employer");
    }
  }
);

// 4️⃣ Delete Employer
export const deleteEmployer = createAsyncThunk(
  "admin/deleteEmployer",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return id; // Return deleted employer ID to remove from state
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete employer");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    employers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Employers
      .addCase(fetchEmployers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployers.fulfilled, (state, action) => {
        state.loading = false;
        state.employers = action.payload;
      })
      .addCase(fetchEmployers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Employer
      .addCase(addEmployer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployer.fulfilled, (state, action) => {
        state.loading = false;
        state.employers.push(action.payload);
      })
      .addCase(addEmployer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Employer
      .addCase(updateEmployer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployer.fulfilled, (state, action) => {
        state.loading = false;
        state.employers = state.employers.map(emp =>
          emp.id === action.payload._id ? action.payload : emp
        );
      })
      .addCase(updateEmployer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Employer
      .addCase(deleteEmployer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEmployer.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        
        state.employers = state.employers.filter(emp => emp._id !== action.payload);
      })
      .addCase(deleteEmployer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
