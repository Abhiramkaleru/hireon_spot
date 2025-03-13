import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Slice.jsx";
import jobReducer from "./JobSlice.jsx" // Import the admin slice

const store = configureStore({
  reducer: {
    admin: adminReducer, // Assign the admin slice to manage employer-related actions
    jobs:jobReducer,
  }
});

export default store;
