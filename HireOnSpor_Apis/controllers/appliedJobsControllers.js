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
        const user_id = req.user.id; // Get authenticated jobseeker ID

        // ✅ Ensure at least one field is provided
        if (status === undefined && comments === undefined) {
            return res.status(400).json({ message: "At least one field (status or comments) must be provided." });
        }

        // ✅ Fetch existing application to prevent overwriting with NULL
        const [existingApp] = await AppliedJobs.getApplicationById(id, user_id);
        if (existingApp.length === 0) {
            return res.status(404).json({ message: "Application not found or unauthorized" });
        }

        // ✅ Use existing values if fields are not provided
        const newStatus = status !== undefined ? status : existingApp[0].status;
        const newComments = comments !== undefined ? comments : existingApp[0].comments;

        // ✅ Update application
        const [result] = await AppliedJobs.updateApplication(id, user_id, newStatus, newComments);
        if (result.affectedRows === 0) {
            return res.status(403).json({ message: "Unauthorized update or no changes made." });
        }

        res.status(200).json({ message: "Application updated successfully" });
    } catch (error) {
        console.error("Update error:", error);
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

        const [appliedJobs] = await AppliedJobs.getAppliedJobsByUser(user_id); // Ensure correct destructuring

        if (!appliedJobs || appliedJobs.length === 0) {
            return res.status(200).json({ count: 0, applications: [] });
        }

        // Ensure all data is properly formatted
        const formattedJobs = appliedJobs.map(job => ({
            id: job.id,
            status: job.status ? job.status.toString() : "pending",
            comments: job.comments ? job.comments.toString() : null,
            apply_date: job.apply_date ? job.apply_date.toString() : null,
            job_id: job.job_id,
            job_title: job.job_title || "N/A",
            company_name: job.company_name || "N/A"
        }));

        res.status(200).json({ count: formattedJobs.length, applications: formattedJobs });
    } catch (error) {
        console.error("❌ Error fetching applied jobs:", error); // Enhanced logging
        res.status(500).json({ error: "Server error while fetching applied jobs" });
    }
};




const getAllApplications = async (req, res) => {
    try {
        const [applications] = await AppliedJobs.getAllApplications();
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        console.error("Error fetching job applications:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = { applyForJob, updateApplicationStatus, getApplicationsForEmployer, deleteApplication,getAppliedJobsForUser,getAllApplications };
