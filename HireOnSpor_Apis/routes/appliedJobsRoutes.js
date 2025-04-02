const express = require("express");
const { applyForJob, updateApplicationStatus, getApplicationsForEmployer, deleteApplication, getAppliedJobsForUser,getAllApplications } = require("../controllers/appliedJobsControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Jobseeker applies for a job
router.post("/", protect, applyForJob);

// Jobseeker updates application status & comments
router.put("/:id", protect, updateApplicationStatus);

// Employer views applications for a job
router.get("/employer/:job_id", protect, getApplicationsForEmployer);

// Jobseeker deletes an application
router.delete("/:id", protect, deleteApplication);

// Jobseeker views their applied jobs
router.get("/user", protect, getAppliedJobsForUser);

router.get("/applications",protect, getAllApplications);

module.exports = router;
