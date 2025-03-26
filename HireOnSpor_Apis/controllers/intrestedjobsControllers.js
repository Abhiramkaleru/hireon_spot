const InterestedJob = require("../models/intrestedjobsModel")

// ✅ Add a job to the interested list
exports.addInterestedJob = async (req, res) => {
  try {
    const { job_id } = req.body;
    const user_id = req.user.id;

    // Check if job is already saved
    if (await InterestedJob.exists(user_id, job_id)) {
      return res.status(400).json({ message: "Job already added to interested list" });
    }

    await InterestedJob.add(user_id, job_id);
    res.status(201).json({ message: "Job added to interested list" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Fetch user's interested jobs
exports.getInterestedJobs = async (req, res) => {
  try {
    const user_id = req.user.id;
    const [interestedJobs] = await InterestedJob.getUserJobs(user_id);
    res.status(200).json(interestedJobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Remove a job from the interested list
exports.removeInterestedJob = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;

    if (!(await InterestedJob.exists(user_id, id))) {
      return res.status(404).json({ message: "Job not found in interested list" });
    }

    await InterestedJob.remove(user_id, id);
    res.status(200).json({ message: "Job removed from interested list" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
