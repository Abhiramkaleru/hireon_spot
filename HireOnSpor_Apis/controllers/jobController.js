const Job = require('../models/jobModel');

// Create Job
const createJob = async (req, res) => {
  try {
    const { title, description, salary, location, requirements, mode } = req.body;

    if (!title || !description || !salary || !location || !requirements) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const jobId = await Job.createJob(
      req.user.id,
      title,
      description,
      salary,
      location,
      requirements,
      mode
    );

    res.status(201).json({ message: 'Job posted successfully', jobId });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Get All Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Single Job By ID
const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.getJobById(id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update Job 
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, salary, location, requirements, mode } = req.body;

    const job = await Job.getJobById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.employer_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to update this job' });
    }

    await Job.updateJob(id, title, description, salary, location, requirements, mode);

    res.status(200).json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete Job 
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.getJobById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.employer_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to delete this job' });
    }

    await Job.deleteJob(id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob
};
