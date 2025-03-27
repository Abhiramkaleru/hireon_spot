import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInterestedJobs, removeInterestedJob } from "../../Redux/JobSlice";
import { toast } from "react-toastify";

const InterestedJobs = () => {
  const dispatch = useDispatch();
  const { interestedJobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchInterestedJobs());
  }, [dispatch]);

  const handleRemoveInterest = (job_id) => {
    dispatch(removeInterestedJob(job_id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.info("Removed from Interested Jobs!");
      } else {
        toast.error("⚠️ Failed to remove job!");
      }
    });
  };

  return (
    <div>
      <h2 style={{ padding: "20px", color: "#1a73e8" }}>Interested Jobs</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : interestedJobs.length === 0 ? (
        <p>No interested jobs yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {interestedJobs.map((job) => (
            <li
              key={job.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              <h3 style={{ color: "#1a73e8" }}>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> ₹{job.salary}</p>

              <button
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#e63946",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onClick={() => handleRemoveInterest(job.id)}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InterestedJobs;
