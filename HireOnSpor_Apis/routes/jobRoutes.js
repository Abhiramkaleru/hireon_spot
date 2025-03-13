const express = require('express');
const { createJob, getJobs, getJobById, updateJob, deleteJob } = require('../controllers/jobController');
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// POST: Create Job (Employer Only)
router.post('/', protect, createJob);

// GET: Get All Jobs
router.get('/', getJobs);

// GET: Get Single Job by ID
router.get('/:id', getJobById);

// PUT: Update Job (Employer Only)
router.put('/:id', protect, updateJob);

// DELETE: Delete Job (Employer Only)
router.delete('/:id', protect, deleteJob);

module.exports = router;
