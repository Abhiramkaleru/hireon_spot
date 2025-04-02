import React, { useEffect } from "react";
import { Table, Tag, Spin, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllApplications } from "../../Redux/appliedJobsSlice";

const AllApplications = () => {
  const dispatch = useDispatch();
  const { applications, loading, error } = useSelector((state) => state.appliedJobs);

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);

  const columns = [
    {
      title: "Application ID",
      dataIndex: "application_id",
      key: "application_id",
    },
    {
      title: "Applicant Name",
      dataIndex: "applicant_name",
      key: "applicant_name",
    },
    {
      title: "Applicant Email",
      dataIndex: "applicant_email",
      key: "applicant_email",
    },
    {
      title: "Job Title",
      dataIndex: "job_title",
      key: "job_title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Accepted" ? "green" : status === "Pending" ? "orange" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Apply Date",
      dataIndex: "apply_date",
      key: "apply_date",
    },
  ];

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" showIcon />;

  return <Table columns={columns} dataSource={applications} rowKey="application_id" />;
};

export default AllApplications;
