const db = require("../config/db");

// Apply for a job
const applyJob = async (job_id, user_id, resume_url, cover_letter) => {
  return db.execute(
    "INSERT INTO applied_jobs (job_id, user_id, resume_url, cover_letter) VALUES (?, ?, ?, ?)",
    [job_id, user_id, resume_url, cover_letter]
  );
};

// Update application status & comments (only by the jobseeker)
const updateApplication = async (id, user_id, status, comments) => {
  return db.execute(
    "UPDATE applied_jobs SET status = ?, comments = ? WHERE id = ? AND user_id = ?",
    [status, comments, id, user_id]
  );
};

// Get all applications for a job (Employer view)
const getApplicationsByJob = async (job_id) => {
  return db.execute(
    `SELECT aj.id, aj.status, aj.comments, aj.apply_date, 
                u.id AS user_id, u.name AS applicant_name, u.email AS applicant_email 
         FROM applied_jobs aj
         JOIN users u ON aj.user_id = u.id
         WHERE aj.job_id = ?`,
    [job_id]
  );
};

// Delete an application (Jobseeker can delete their application)
const deleteApplication = async (id, user_id) => {
  return db.execute("DELETE FROM applied_jobs WHERE id = ? AND user_id = ?", [
    id,
    user_id,
  ]);
};



const getAppliedJobsByUser = async (user_id) => {
  return db.execute(
    `SELECT 
        aj.id, 
        aj.status, 
        aj.comments, 
        CAST(aj.apply_date AS CHAR) AS apply_date, 
        j.id AS job_id, 
        j.title AS job_title, 
        j.company_name AS company_name
     FROM applied_jobs aj
     JOIN jobs j ON aj.job_id = j.id
     WHERE aj.user_id = ?`,
    [user_id]
  );
};


const getAllApplications = async () => {
  return db.execute(
    `SELECT aj.id AS application_id, aj.status, aj.comments, aj.apply_date, 
                u.id AS user_id, u.name AS applicant_name, u.email AS applicant_email, 
                j.id AS job_id, j.title AS job_title
         FROM applied_jobs aj
         JOIN users u ON aj.user_id = u.id
         JOIN jobs j ON aj.job_id = j.id`
  );
};

module.exports = {
  applyJob,
  updateApplication,
  getApplicationsByJob,
  deleteApplication,
  getAppliedJobsByUser,
  getAllApplications,
};
