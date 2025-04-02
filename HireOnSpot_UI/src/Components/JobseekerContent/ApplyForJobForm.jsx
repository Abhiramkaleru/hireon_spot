import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Spin, Alert } from "antd";
import { applyForJob } from "../../Redux/appliedJobsSlice";
import { toast } from "react-toastify";

const ApplyForJobForm = ({ jobId, onClose }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.appliedJobs);

  const [application, setApplication] = useState({
    job_id: jobId || "",
    resume_url: "",
    cover_letter: "",
  });

  useEffect(() => {
    setApplication((prev) => ({ ...prev, job_id: jobId }));
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplication((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(applyForJob(application)).unwrap(); // Unwrap API response
      toast.success("🎉 Job application submitted successfully!");
      onClose(); // Close modal after submission
    } catch (err) {
      // Extract error message safely
      const errorMessage = typeof err === "string" ? err : err?.message || "An unexpected error occurred";
      toast.error(`❌ Failed to apply: ${errorMessage}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Fix: Ensure error message is a string before rendering */}
      {error && <Alert message="Error" description={typeof error === "string" ? error : error?.message || "Something went wrong"} type="error" showIcon />}
      
      <label>Resume URL:</label>
      <Input
        name="resume_url"
        value={application.resume_url}
        onChange={handleChange}
        placeholder="Paste your resume link"
        required
      />

      <label>Cover Letter:</label>
      <Input.TextArea
        name="cover_letter"
        value={application.cover_letter}
        onChange={handleChange}
        placeholder="Write a brief cover letter"
        rows={4}
        required
      />

      <Button
        type="primary"
        htmlType="submit"
        style={{ marginTop: "10px", width: "100%",background:"#FF8541" }}
        disabled={isLoading}
      >
        {isLoading ? <Spin /> : "Submit Application"}
      </Button>
    </form>
  );
};

export default ApplyForJobForm;
