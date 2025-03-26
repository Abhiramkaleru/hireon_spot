const db = require("../config/db");

const InterestedJob = {
  // ✅ Add a job to interested list
  async add(user_id, job_id) {
    return db.query("INSERT INTO interested_jobs (user_id, job_id) VALUES (?, ?)", [user_id, job_id]);
  },

  // ✅ Check if job is already in the interested list
  async exists(user_id, job_id) {
    const [result] = await db.query("SELECT * FROM interested_jobs WHERE user_id = ? AND job_id = ?", [user_id, job_id]);
    return result.length > 0;
  },

  // ✅ Get all interested jobs for a user
  async getUserJobs(user_id) {
    return db.query(`
      SELECT jobs.* FROM jobs
      JOIN interested_jobs ON jobs.id = interested_jobs.job_id
      WHERE interested_jobs.user_id = ?
    `, [user_id]);
  },

  // ✅ Remove a job from the interested list
  async remove(user_id, job_id) {
    return db.query("DELETE FROM interested_jobs WHERE user_id = ? AND job_id = ?", [user_id, job_id]);
  }
};

module.exports = InterestedJob;
