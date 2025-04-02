// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchInterestedJobs, removeInterestedJob } from "../../Redux/JobSlice";
// import { applyForJob } from "../../Redux/appliedJobsSlice";
// import { toast } from "react-toastify";
// import ApplyForJobForm from "../JobseekerContent/ApplyForJobForm";
// import { Modal, Button } from "antd";

// const InterestedJobs = () => {
//   const dispatch = useDispatch();
//   const { interestedJobs, loading, error: jobsError } = useSelector((state) => state.jobs);
//   const { isLoading, error: appliedJobsError } = useSelector((state) => state.appliedJobs);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedJobId, setSelectedJobId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchInterestedJobs());
//   }, [dispatch]);

//   const handleRemoveInterest = (job_id) => {
//     dispatch(removeInterestedJob(job_id)).then((res) => {
//       if (res.meta.requestStatus === "fulfilled") {
//         toast.info("❌ Removed from Interested Jobs!");
//       } else {
//         toast.error("⚠️ Failed to remove job!");
//       }
//     });
//   };

//   const handleApplyNow = (job_id) => {
//     setSelectedJobId(job_id);
//     setIsModalOpen(true);
//   };

//   const handleJobApplication = (jobData) => {
//     dispatch(applyForJob(jobData)).then((res) => {
//       if (res.meta.requestStatus === "fulfilled") {
//         toast.success("✅ Job application submitted successfully!");
//         setIsModalOpen(false);
//       } else {
//         toast.error("⚠️ Failed to submit application!");
//       }
//     });
//   };

//   return (
//     <div>
//       <h2 style={{ padding: "20px", color: "#FF8541", textAlign: "center" }}>Interested Jobs</h2>

//       {loading ? (
//         <p style={{ textAlign: "center", color: "#000" }}>Loading...</p>
//       ) : jobsError ? (
//         <p style={{ textAlign: "center", color: "red" }}>{jobsError}</p>
//       ) : interestedJobs.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#000" }}>No interested jobs yet.</p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0, margin: "20px auto", maxWidth: "600px" }}>
//           {interestedJobs.map((job) => (
//             <li
//               key={job.id}
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "16px",
//                 marginBottom: "12px",
//                 borderRadius: "8px",
//                 backgroundColor: "#fff",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                 position: "relative",
//                 transition: "transform 0.2s",
//                 cursor: "pointer",
//               }}
//             >
//               <h3 style={{ color: "#FF8541", marginBottom: "6px" }}>{job.title}</h3>
//               <p style={{ color: "#000", marginBottom: "4px" }}>{job.description}</p>
//               <p><strong>Location:</strong> {job.location}</p>
//               <p><strong>Salary:</strong> ₹{job.salary}</p>
//               <button
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "#e63946",
//                   color: "#fff",
//                   border: "none",
//                   padding: "6px 12px",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                   transition: "background-color 0.2s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c62828")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e63946")}
//                 onClick={() => handleRemoveInterest(job.id)}
//               >
//                 Remove
//               </button>
//               <Button
//                 // type="primary"
//                 style={{ marginTop: "10px", width: "100%" }}
//                 onClick={() => handleApplyNow(job.id)}
//               >
//                 Apply Now
//               </Button>
//             </li>
//           ))}
//         </ul>
//       )}

//       <Modal
//         title="Apply for Job"
//         visible={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//       >
//         <ApplyForJobForm jobId={selectedJobId} onClose={() => setIsModalOpen(false)} onSubmit={handleJobApplication} />
//       </Modal>
//     </div>
//   );
// };

// export default InterestedJobs;



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInterestedJobs, removeInterestedJob } from "../../Redux/JobSlice";
import { applyForJob } from "../../Redux/appliedJobsSlice";
import { toast } from "react-toastify";
import ApplyForJobForm from "../JobseekerContent/ApplyForJobForm";
import { Modal, Button, Card, Spin, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const InterestedJobs = () => {
  const dispatch = useDispatch();
  const { interestedJobs, loading, error: jobsError } = useSelector((state) => state.jobs);
  const { isLoading, error: appliedJobsError } = useSelector((state) => state.appliedJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    dispatch(fetchInterestedJobs());
  }, [dispatch]);

  const handleRemoveInterest = (job_id) => {
    dispatch(removeInterestedJob(job_id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.info("❌ Removed from Interested Jobs!");
      } else {
        toast.error("⚠️ Failed to remove job!");
      }
    });
  };

  const handleApplyNow = (job_id) => {
    setSelectedJobId(job_id);
    setIsModalOpen(true);
  };

  const handleJobApplication = (jobData) => {
    dispatch(applyForJob(jobData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("✅ Job application submitted successfully!");
        setIsModalOpen(false);
      } else {
        toast.error("⚠️ Failed to submit application!");
      }
    });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Title level={2} style={{ color: "#FF8541" }}>Interested Jobs</Title>

      {loading ? (
        <Spin size="large" style={{ marginTop: "20px" }} />
      ) : jobsError ? (
        <Text type="danger">{jobsError}</Text>
      ) : interestedJobs.length === 0 ? (
        <Text>No interested jobs yet.</Text>
      ) : (
        <div style={{ display: "grid", gap: "16px", justifyContent: "center", maxWidth: "800px", margin: "0 auto" }}>
          {interestedJobs.map((job) => (
            <Card
              key={job.id}
              title={job.title}
              bordered={false}
              style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}
              extra={
                <CloseCircleOutlined
                  style={{ color: "#e63946", fontSize: "18px", cursor: "pointer" }}
                  onClick={() => handleRemoveInterest(job.id)}
                />
              }
            >
              <Text>{job.description}</Text>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> ₹{job.salary}</p>
              <Button type="primary" style={{background:"#FF8541"}}block onClick={() => handleApplyNow(job.id)}>
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      )}

      <Modal
        title="Apply for Job"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <ApplyForJobForm jobId={selectedJobId} onClose={() => setIsModalOpen(false)} onSubmit={handleJobApplication} />
      </Modal>
    </div>
  );
};

export default InterestedJobs;
