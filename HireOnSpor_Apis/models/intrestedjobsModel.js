const db = require("../config/db");

const InterestedJob = {
  // ✅ Add a job to interested list
  //   async add(user_id, job_id) {
  //     return db.query("INSERT INTO interested_jobs (user_id, job_id) VALUES (?, ?)", [user_id, job_id]);
  //   },
  async add(user_id, job_id) {
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      // Insert the record into interested_jobs
      await connection.query(
        "INSERT INTO interested_jobs (user_id, job_id) VALUES (?, ?)",
        [user_id, job_id]
      );
      // Update the saved_count in the jobs table
      await connection.query(
        "UPDATE jobs SET saved_count = saved_count + 1 WHERE id = ?",
        [job_id]
      );
      await connection.commit();
      return { success: true };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  // ✅ Check if job is already in the interested list
  async exists(user_id, job_id) {
    const [result] = await db.query(
      "SELECT * FROM interested_jobs WHERE user_id = ? AND job_id = ?",
      [user_id, job_id]
    );
    return result.length > 0;
  },

  // ✅ Get all interested jobs for a user
  async getUserJobs(user_id) {
    return db.query(
      `
      SELECT jobs.* FROM jobs
      JOIN interested_jobs ON jobs.id = interested_jobs.job_id
      WHERE interested_jobs.user_id = ?
    `,
      [user_id]
    );
  },

  // ✅ Remove a job from the interested list
  //   async remove(user_id, job_id) {
  //     return db.query("DELETE FROM interested_jobs WHERE user_id = ? AND job_id = ?", [user_id, job_id]);
  //   }

  async remove(user_id, job_id) {
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      // Remove from interested_jobs table
      await connection.query(
        "DELETE FROM interested_jobs WHERE user_id = ? AND job_id = ?",
        [user_id, job_id]
      );
      // Update the saved_count in jobs table, ensuring it doesn't drop below zero
      await connection.query(
        "UPDATE jobs SET saved_count = CASE WHEN saved_count > 0 THEN saved_count - 1 ELSE 0 END WHERE id = ?",
        [job_id]
      );
      await connection.commit();
      return { success: true };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },
  
  async getInterestedCountByUser(user_id) {
    const [result] = await db.query(
      "SELECT COUNT(*) AS interested_count FROM interested_jobs WHERE user_id = ?",
      [user_id]
    );
    return result[0].interested_count;
  }
};

module.exports = InterestedJob;
