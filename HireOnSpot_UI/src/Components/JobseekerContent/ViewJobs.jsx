// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobs, addInterestedJob } from "../../Redux/JobSlice";
// import { Modal, Button } from "antd";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ViewJobs = () => {
//   const dispatch = useDispatch();
//   const { jobs, loading, error } = useSelector((state) => state.jobs);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);

//   const handleInterestedClick = (job) => {
//     dispatch(addInterestedJob(job));
//     toast.success(`✅ You showed interest in "${job.title}"!`, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleViewDetails = (job) => {
//     setSelectedJob(job);
//     setIsModalVisible(true);
//   };

//   const getButtonStyle = (createdAt) => {
//     const now = new Date();
//     const expiry = new Date(createdAt);
//     expiry.setDate(expiry.getDate() + 7);

//     return {
//       margin: "10px",
//       backgroundColor: expiry > now ? "#28a745" : "#e63946",
//       color: "#fff",
//       border: "none",
//       padding: "8px 16px",
//       borderRadius: "4px",
//       cursor: expiry > now ? "pointer" : "not-allowed",
//       transition: "background-color 0.2s",
//       opacity: expiry > now ? 1 : 0.6,
//     };
//   };

//   if (loading) return <p style={{ padding: "20px" }}>Loading jobs...</p>;
//   if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;

//   return (
//     <div>
//       <ToastContainer />
//       <h2 style={{ padding: "24px 20px", color: "#1a73e8" }}>Available Jobs</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
//           gap: "20px",
//           padding: "20px",
//         }}
//       >
//         {jobs.length === 0 ? (
//           <p>No jobs available.</p>
//         ) : (
//           jobs.map((job) => {
//             const expiryDate = new Date(job.created_at);
//             expiryDate.setDate(expiryDate.getDate() + 7);
//             const isExpired = expiryDate < new Date();

//             return (
//               <div
//                 key={job._id}
//                 style={{
//                   border: "1px solid #ddd",
//                   padding: "16px",
//                   borderRadius: "8px",
//                   backgroundColor: "#f9f9f9",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                   transition: "transform 0.2s ease-in-out",
//                   cursor: "pointer",
//                 }}
//               >
//                 <h3 style={{ color: "#1a73e8" }}>{job.company_name}</h3>
//                 <h3 style={{ color: "#1a73e8" }}>{job.title}</h3>
//                 <p>{job.description}</p>
//                 <p><strong>Skills:</strong> {Array.isArray(job.requirements) ? job.requirements.join(", ") : job.requirements}</p>
//                 <p><strong>Location:</strong> {job.location}</p>
//                 <p><strong>Salary:</strong> ₹{job.salary}</p>
//                 <p><strong>Mode:</strong> {job.mode}</p>
//                 <p><strong>HR Name:</strong> {job.hr_name}</p>
//                 <p><strong>Team:</strong> {job.team}</p>
//                 <p><strong>Posted on:</strong> {new Date(job.created_at).toLocaleString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 })}</p>
//                 <button
//                   style={{
//                     marginTop: "10px",
//                     backgroundColor: "#1a73e8",
//                     color: "#fff",
//                     border: "none",
//                     padding: "8px 16px",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                     transition: "background-color 0.2s",
//                   }}
//                   onClick={() => handleInterestedClick(job)}
//                 >
//                   Save Now
//                 </button>

//                 <button
//                   style={getButtonStyle(job.created_at)}
//                   onClick={() => !isExpired && handleViewDetails(job)}
//                   disabled={isExpired}
//                 >
//                   {isExpired ? "Expired" : "View Details"}
//                 </button>
//               </div>
//             );
//           })
//         )}
//       </div>

//       <Modal
//         title={selectedJob?.title}
//         visible={isModalVisible}
//         onCancel={() => setIsModalVisible(false)}
//         footer={null}
//       >
//         {selectedJob && (
//           <div>
//             <p><strong>Company:</strong> {selectedJob.company_name}</p>
//             <p><strong>Description:</strong> {selectedJob.description}</p>
//             <p><strong>Skills:</strong> {selectedJob.requirements}</p>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Salary:</strong> ₹{selectedJob.salary}</p>
//             <p><strong>Mode:</strong> {selectedJob.mode}</p>
//             <p><strong>HR Name:</strong> {selectedJob.hr_name}</p>
//             <p><strong>HR LinkedIn:</strong> <a href={selectedJob.hr_linkedin} target="_blank" rel="noopener noreferrer">{selectedJob.hr_linkedin}</a></p>
//             <p><strong>Hiring Team LinkedIn:</strong>
//               {selectedJob.hiring_team_linkedin
//                 ? selectedJob.hiring_team_linkedin.split(',').map((link, index) => (
//                   <div key={index}>
//                     <a href={link.trim()} target="_blank" rel="noopener noreferrer">{link.trim()}</a>
//                   </div>
//                 ))
//                 : "Not available"}
//             </p>
//             <p><strong>Company LinkedIn:</strong> <a href={selectedJob.company_linkedin} target="_blank" rel="noopener noreferrer">{selectedJob.company_linkedin}</a></p>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default ViewJobs;




import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, fetchInterestedJobs, addInterestedJob } from "../../Redux/JobSlice";
import { Modal, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyForJobForm from "./ApplyForJobForm";
const ViewJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countdowns, setCountdowns] = useState({});

  const [isApplyModalVisible, setIsApplyModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchInterestedJobs());
  }, [dispatch]);


  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsApplyModalVisible(true);
  };

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      const newCountdowns = {};

      jobs.forEach((job) => {
        const createdAt = new Date(job.created_at);
        const expiryDate = new Date(createdAt);
        expiryDate.setDate(expiryDate.getDate() + 7);

        const timeLeft = expiryDate - now;

        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          const seconds = Math.floor((timeLeft / 1000) % 60);
          newCountdowns[job.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          newCountdowns[job.id] = "Expired";
        }
      });

      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, [jobs]);

  const handleInterestedClick = (job) => {
    dispatch(addInterestedJob(job));
    toast.success(`✅ You showed interest in "${job.title}"!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  return (
    <div>
      <ToastContainer />
      <h2 style={{ padding: "24px 20px", color: "#FF8541", textAlign: "center" }}>Available Jobs</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {jobs.length === 0 ? (
          <p style={{ color: "#000", textAlign: "center" }}>No jobs available.</p>
        ) : (
          jobs.map((job) => {
            const isExpired = countdowns[job.id] === "Expired";

            return (
              <div
                key={job.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ color: "#FF8541" }}>{job.company_name}</h3>
                <h3 style={{ color: "#000" }}>{job.title}</h3>
                <p style={{ color: "#000" }}>{job.description}</p>
                <p><strong>Skills:</strong> {Array.isArray(job.requirements) ? job.requirements.join(", ") : job.requirements}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> ₹{job.salary}</p>
                <p><strong>Mode:</strong> {job.mode}</p>
                <p><strong>HR Name:</strong> {job.hr_name}</p>
                <p><strong>Team:</strong> {job.team}</p>
                <p><strong>Posted on:</strong> {new Date(job.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}</p>

                <p style={{ fontWeight: "bold", color: isExpired ? "#e63946" : "#FF8541" }}>
                  {countdowns[job.id] || "Calculating..."}
                </p>

                <button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#FF8541",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e06a27")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF8541")}
                  onClick={() => handleInterestedClick(job)}
                >
                  Save Now
                </button>

                <button
                  style={{
                    margin: "10px",
                    backgroundColor: isExpired ? "#e63946" : "#000",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: isExpired ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                    opacity: isExpired ? 0.6 : 1,
                  }}
                  onClick={() => !isExpired && handleViewDetails(job)}
                  disabled={isExpired}
                >
                  {isExpired ? "Closed" : "View Details"}
                </button>
              </div>
            );
          })
        )}
      </div>

      <Modal
        title={selectedJob?.title}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedJob && (
          <div>
            <p><strong>Company:</strong> {selectedJob.company_name}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Skills:</strong> {selectedJob.requirements}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Salary:</strong> ₹{selectedJob.salary}</p>
            <p><strong>Mode:</strong> {selectedJob.mode}</p>
            <p><strong>HR Name:</strong> {selectedJob.hr_name}</p>
            <p><strong>HR LinkedIn:</strong> <a href={selectedJob.hr_linkedin} target="_blank" rel="noopener noreferrer">{selectedJob.hr_linkedin}</a></p>
            <p><strong>Hiring Team LinkedIn:</strong>
              {selectedJob.hiring_team_linkedin
                ? selectedJob.hiring_team_linkedin.split(',').map((link, index) => (
                  <div key={index}>
                    <a href={link.trim()} target="_blank" rel="noopener noreferrer">{link.trim()}</a>
                  </div>
                ))
                : "Not available"}
            </p>
            <Button type="primary">
              <a href={selectedJob.company_linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                Apply via Company Website
              </a>
            </Button>

            {/* <p><strong>Company Apply Link:</strong> <a href={selectedJob.company_linkedin} target="_blank" rel="noopener noreferrer">{selectedJob.company_linkedin}</a></p> */}
            {/* Apply Now Button */}
            <Button
              type="primary"
              style={{
                margin: "10px",
                backgroundColor: "#FF8541",
                borderColor: "#FF8541",
                // width: "100%",
              }}
              onClick={() => handleApplyNow(selectedJob)}
            >
              Apply Now
            </Button>
          </div>
        )}
        {/* Apply Job Modal */}
        <Modal
          title={`Apply for ${selectedJob?.title}`}
          open={isApplyModalVisible}
          onCancel={() => setIsApplyModalVisible(false)}
          footer={null}
        >
          {selectedJob && (
            <ApplyForJobForm jobId={selectedJob.id} onClose={() => setIsApplyModalVisible(false)} />
          )}
        </Modal>

      </Modal>
    </div>
  );
};

export default ViewJobs;
