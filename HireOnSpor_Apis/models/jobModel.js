const db = require('../config/db');

const Job = {
  // Create Job
  async createJob(employerId, title, description, salary, location, requirements, mode, hrName, companyName, hrLinkedin, companyLinkedin, hiringTeamLinkedin) {
    const [result] = await db.query(
      `INSERT INTO jobs (employer_id, title, description, salary, location, requirements, mode, hr_name, company_name, hr_linkedin, company_linkedin, hiring_team_linkedin) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [employerId, title, description, salary, location, requirements, mode, hrName, companyName, hrLinkedin, companyLinkedin, hiringTeamLinkedin]
    );
    return result.insertId;
  },

  // Get All Jobs
  async getAllJobs() {
    const [jobs] = await db.query('SELECT * FROM jobs');
    return jobs;
  },

  // Get Single Job by ID
  async getJobById(id) {
    const [job] = await db.query('SELECT * FROM jobs WHERE id = ?', [id]);
    return job.length ? job[0] : null;
  },

  // Update Job
  async updateJob(id, title, description, salary, location, requirements, mode, hrName, companyName, hrLinkedin, companyLinkedin, hiringTeamLinkedin) {
    await db.query(
      `UPDATE jobs 
       SET title = ?, description = ?, salary = ?, location = ?, requirements = ?, mode = ?, hr_name = ?, company_name = ?, hr_linkedin = ?, company_linkedin = ?, hiring_team_linkedin = ?
       WHERE id = ?`,
      [title, description, salary, location, requirements, mode, hrName, companyName, hrLinkedin, companyLinkedin, hiringTeamLinkedin, id]
    );
  },

  // Delete Job
  async deleteJob(id) {
    await db.query('DELETE FROM jobs WHERE id = ?', [id]);
  }
};

module.exports = Job;
