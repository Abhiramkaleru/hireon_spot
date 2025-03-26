const express = require("express");
const router = express.Router();
const { addInterestedJob, getInterestedJobs, removeInterestedJob,getInterestedCountByUser } = require("../controllers/intrestedjobsControllers");
const { protect } = require("../middleware/authMiddleware"); 

// Save a job to interested list
router.post("/", protect, addInterestedJob);

// Get interested jobs for a user
router.get("/", protect, getInterestedJobs);

// Remove a job from interested list
router.delete("/:id", protect, removeInterestedJob);

router.get("/count", protect, getInterestedCountByUser)

module.exports = router;
