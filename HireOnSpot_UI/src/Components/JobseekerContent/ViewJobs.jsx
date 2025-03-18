import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Redux/JobSlice";

const ViewJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <p style={{ padding: "20px" }}>Loading jobs...</p>;
  if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;

  return (
    <div>
      <h2 style={{ padding: "24px 20px", color: "#1a73e8" }}>Available Jobs</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out",
                cursor: "pointer",
              }}
            >
              <h3 style={{ color: "#1a73e8" }}>{job.title}</h3>
              <p>{job.description}</p>
              {/* ✅ Display Skills properly */}
              <p>
                <strong>Skills:</strong>{" "}
                {Array.isArray(job.requirements)
                  ? job.requirements.join(", ")
                  : job.requirements}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Salary:</strong> ₹{job.salary}
              </p>
              <p>
                <strong>Mode:</strong> {job.mode}
              </p>
              {/* ✅ Display post date and time */}
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(job.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#1a73e8",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onClick={() => alert(`Applied for ${job.title}`)}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewJobs;
