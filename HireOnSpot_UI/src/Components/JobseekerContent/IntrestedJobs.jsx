import React from "react";
import { useSelector } from "react-redux";

const InterestedJobs = () => {
  const { interestedJobs } = useSelector((state) => state.jobs);

  return (
    <div>
      <h2>Interested Jobs</h2>
      {interestedJobs.length === 0 ? (
        <p>No interested jobs yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
  {interestedJobs.map((job) => (
    <li
      key={job._id}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#1a73e8" }}>{job.title}</h3>
      <p>{job.description}</p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> ₹{job.salary}
      </p>
    </li>
  ))}
</ul>
      )}
    </div>
  );
};

export default InterestedJobs;
