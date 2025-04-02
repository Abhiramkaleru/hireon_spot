import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slice.jsx";
import jobReducer from "./JobSlice.jsx"
import appliedJobsReducer from "./appliedJobsSlice.jsx"
const store = configureStore({
  reducer: {
    admin: adminReducer, // Assign the admin slice to manage employer-related actions
    jobs:jobReducer,
    appliedJobs: appliedJobsReducer,
  }
});

export default store;
