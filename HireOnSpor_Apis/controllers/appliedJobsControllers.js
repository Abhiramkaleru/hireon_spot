const AppliedJobs = require("../models/appliedJobsModel");

// Apply for a job
const applyForJob = async (req, res) => {
    try {
        const { job_id, resume_url, cover_letter } = req.body;
        const user_id = req.user.id; // Get logged-in user ID

        await AppliedJobs.applyJob(job_id, user_id, resume_url, cover_letter);
        res.status(201).json({ message: "Job applied successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error while applying for the job" });
    }
};

// Update application status & comments (Jobseeker)
const updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, comments } = req.body;
        const user_id = req.user.id;

        const [result] = await AppliedJobs.updateApplication(id, user_id, status, comments);
        if (result.affectedRows === 0) return res.status(403).json({ message: "Unauthorized update" });

        res.status(200).json({ message: "Application updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error while updating application" });
    }
};

// Get all applications for a job (Employer)
const getApplicationsForEmployer = async (req, res) => {
    try {
        const { job_id } = req.params;
        const [applications] = await AppliedJobs.getApplicationsByJob(job_id);

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: "Server error while fetching applications" });
    }
};

// Delete an application (Jobseeker)
const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const user_id = req.user.id;

        const [result] = await AppliedJobs.deleteApplication(id, user_id);
        if (result.affectedRows === 0) return res.status(403).json({ message: "Unauthorized deletion" });

        res.status(200).json({ message: "Application deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error while deleting application" });
    }
};


// Get all applied jobs for a jobseeker
const getAppliedJobsForUser = async (req, res) => {
    try {
        const user_id = req.user.id;

        const [appliedJobs] = await AppliedJobs.getAppliedJobsByUser(user_id);
        res.status(200).json({ count: appliedJobs.length, applications: appliedJobs });
    } catch (error) {
        res.status(500).json({ error: "Server error while fetching applied jobs" });
    }
};


module.exports = { applyForJob, updateApplicationStatus, getApplicationsForEmployer, deleteApplication,getAppliedJobsForUser };
