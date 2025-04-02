// import React, { useEffect } from "react";
// import { Table, Tag, Spin, Alert } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllApplications } from "../../Redux/appliedJobsSlice"
// import dayjs from "dayjs";

// const AllApplications = () => {
//   const dispatch = useDispatch();
//   const { applications, loading, error } = useSelector((state) => state.appliedJobs);

//   useEffect(() => {
//     dispatch(fetchAllApplications());
//   }, [dispatch]);

//   const columns = [
//     {
//       title: "Application ID",
//       dataIndex: "application_id",
//       key: "application_id",
//     },
//     {
//       title: "Applicant Name",
//       dataIndex: "applicant_name",
//       key: "applicant_name",
//     },
//     {
//       title: "Applicant Email",
//       dataIndex: "applicant_email",
//       key: "applicant_email",
//     },
//     {
//       title: "Job Title",
//       dataIndex: "job_title",
//       key: "job_title",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <Tag color={status === "accepted" ? "green" : status === "pending" ? "orange" : "blue"}>
//           {status.charAt(0).toUpperCase() + status.slice(1)}
//         </Tag>
//       ),
//     },
//     {
//       title: "Comments",
//       dataIndex: "comments",
//       key: "comments",
//       render: (comments) => (comments ? comments : "No comments"),
//     },
//     {
//       title: "Apply Date",
//       dataIndex: "apply_date",
//       key: "apply_date",
//       render: (date) => dayjs(date).format("YYYY-MM-DD HH:mm"),
//     },
//   ];

//   if (loading) return <Spin size="large" />;
//   if (error) return <Alert message={error} type="error" showIcon />;

//   return <Table columns={columns} dataSource={applications} rowKey="application_id" />;
// };

// export default AllApplications;



import React, { useEffect } from "react";
import { Table, Tag, Spin, Alert, Card, List, Grid } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllApplications } from "../../Redux/appliedJobsSlice";
import dayjs from "dayjs";

const { useBreakpoint } = Grid;

const AllApplications = () => {
  const dispatch = useDispatch();
  const { applications, isLoading, error } = useSelector((state) => state.appliedJobs);
  const screens = useBreakpoint();

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);

  const columns = [
    { title: "Application ID", dataIndex: "application_id", key: "application_id", responsive: ["md"] },
    { title: "Applicant Name", dataIndex: "applicant_name", key: "applicant_name" },
    { title: "Applicant Email", dataIndex: "applicant_email", key: "applicant_email", responsive: ["lg"] },
    { title: "Job Title", dataIndex: "job_title", key: "job_title" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "accepted" ? "green" : status === "pending" ? "orange" : "blue"}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    { title: "Comments", dataIndex: "comments", key: "comments", render: (comments) => comments || "No comments", responsive: ["md"] },
    { title: "Apply Date", dataIndex: "apply_date", key: "apply_date", render: (date) => dayjs(date).format("YYYY-MM-DD HH:mm"), responsive: ["sm"] },
  ];

  if (isLoading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" showIcon />;

  return (
    <>
      {screens.md ? (
        <Table
          columns={columns}
          dataSource={applications}
          rowKey="application_id"
          scroll={{ x: "max-content" }}
        />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={applications}
          renderItem={(app) => (
            <List.Item>
              <Card title={app.job_title} bordered>
                <p><strong>Applicant:</strong> {app.applicant_name}</p>
                <p><strong>Email:</strong> {app.applicant_email}</p>
                <p><strong>Status:</strong> 
                  <Tag color={app.status === "accepted" ? "green" : app.status === "pending" ? "orange" : "blue"}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Tag>
                </p>
                <p><strong>Comments:</strong> {app.comments || "No comments"}</p>
                <p><strong>Applied On:</strong> {dayjs(app.apply_date).format("YYYY-MM-DD HH:mm")}</p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default AllApplications;
