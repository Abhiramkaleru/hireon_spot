// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Table, Tag, Input, Button, Card, Spin, Alert } from "antd";
// import { updateApplicationStatus, fetchAppliedJobsForUser } from "../../Redux/appliedJobsSlice";
// import dayjs from "dayjs";

// const UpdateApplicationStatus = () => {
//   const dispatch = useDispatch();
//   const { applications, isLoading, error } = useSelector((state) => state.appliedJobs);
//   const [updatedStatus, setUpdatedStatus] = useState({});
//   const [updatedComments, setUpdatedComments] = useState({});
//   const isMobile = window.innerWidth <= 768;

//   useEffect(() => {
//     dispatch(fetchAppliedJobsForUser());
//   }, [dispatch]);

//   const handleUpdate = (id) => {
//     dispatch(updateApplicationStatus({ id, status: updatedStatus[id], comments: updatedComments[id] }));
//   };
// console.log(applications)
//   const columns = [
//     { title: "Job Title", dataIndex: "job_title", key: "job_title" },
//     { title: "Status", dataIndex: "status", key: "status", render: (status) => <Tag color={status === "accepted" ? "green" : status === "pending" ? "orange" : "blue"}>{status}</Tag> },
//     { title: "Comments", dataIndex: "comments", key: "comments" },
//     { title: "Apply Date", dataIndex: "apply_date", key: "apply_date", render: (date) => dayjs(date).format("YYYY-MM-DD HH:mm") },
//     { title: "Update", key: "update", render: (_, record) => (
//       <>
//         <Input placeholder="New Status" onChange={(e) => setUpdatedStatus({ ...updatedStatus, [record.id]: e.target.value })} style={{ marginBottom: 8 }} />
//         <Input placeholder="New Comment" onChange={(e) => setUpdatedComments({ ...updatedComments, [record.id]: e.target.value })} style={{ marginBottom: 8 }} />
//         <Button type="primary" onClick={() => handleUpdate(record.id)}>Update</Button>
//       </>
//     ) },
//   ];

//   if (isLoading) return <Spin size="large" />;
//   if (error) return <Alert message={error} type="error" showIcon />;

//   return (
//     <div>
//       <h2>Update Application Status</h2>
//       {isMobile ? (
//         applications.map((app) => (
//           <Card key={app.id} title={app.job_title} style={{ marginBottom: 16 }}>
//             <p><b>Status:</b> <Tag>{app.status}</Tag></p>
//             <p><b>Comments:</b> {app.comments || "No comments"}</p>
//             <p><b>Applied On:</b> {dayjs(app.apply_date).format("YYYY-MM-DD HH:mm")}</p>
//             <Input placeholder="New Status" onChange={(e) => setUpdatedStatus({ ...updatedStatus, [app.id]: e.target.value })} style={{ marginBottom: 8 }} />
//             <Input placeholder="New Comment" onChange={(e) => setUpdatedComments({ ...updatedComments, [app.id]: e.target.value })} style={{ marginBottom: 8 }} />
//             <Button type="primary" onClick={() => handleUpdate(app.id)}>Update</Button>
//           </Card>
//         ))
//       ) : (
//         <Table columns={columns} dataSource={applications} rowKey="id" />
//       )}
//     </div>
//   );
// };

// export default UpdateApplicationStatus;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Input, Button, Card, Spin, Alert, Select } from "antd";
import { updateApplicationStatus, fetchAppliedJobsForUser } from "../../Redux/appliedJobsSlice";
import dayjs from "dayjs";

const { Option } = Select;

const UpdateApplicationStatus = () => {
  const dispatch = useDispatch();
  const { applications, isLoading, error } = useSelector((state) => state.appliedJobs);
  const [updatedStatus, setUpdatedStatus] = useState({});
  const [updatedComments, setUpdatedComments] = useState({});
  const isMobile = window.innerWidth <= 768;

  useEffect(() => { dispatch(fetchAppliedJobsForUser()); }, [dispatch]);

  const handleUpdate = (id) => { dispatch(updateApplicationStatus({ id, status: updatedStatus[id], comments: updatedComments[id] })); };

  const statusOptions = ["pending", "reviewed", "shortlisted", "rejected", "hired"];

  const columns = [
    { title: "Job Title", dataIndex: "job_title", key: "job_title" },
    { title: "Status", dataIndex: "status", key: "status", render: (status, record) => (<><Tag color={status === "hired" ? "green" : status === "pending" ? "orange" : status === "reviewed" ? "blue" : status === "shortlisted" ? "purple" : "red"}>{status}</Tag> <Select defaultValue={status} onChange={(value) => setUpdatedStatus({ ...updatedStatus, [record.id]: value })} style={{ width: "120px" }}>{statusOptions.map((status) => (<Option key={status} value={status}>{status}</Option>))}</Select></>) },
    { title: "Comments", dataIndex: "comments", key: "comments", render: (comments, record) => (<><span>{comments || "No comments"}</span> <Input placeholder="New Comment" onChange={(e) => setUpdatedComments({ ...updatedComments, [record.id]: e.target.value })} style={{ width: "150px", marginLeft: 8 }} /></>) },
    { title: "Apply Date", dataIndex: "apply_date", key: "apply_date", render: (date) => dayjs(date).format("YYYY-MM-DD HH:mm") },
    { title: "Update", key: "update", render: (_, record) => (<Button type="primary" onClick={() => handleUpdate(record.id)}>Update</Button>) }
  ];

  if (isLoading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" showIcon />;

  return (
    <div>
      <h2>Update Application Status</h2>
      {isMobile ? (applications.map((app) => (<Card key={app.id} title={app.job_title} style={{ marginBottom: 16 }}><p><b>Status:</b> <Tag>{app.status}</Tag> <Select defaultValue={app.status} onChange={(value) => setUpdatedStatus({ ...updatedStatus, [app.id]: value })} style={{ width: "120px" }}>{statusOptions.map((status) => (<Option key={status} value={status}>{status}</Option>))}</Select></p><p><b>Comments:</b> <span>{app.comments || "No comments"}</span> <Input placeholder="New Comment" onChange={(e) => setUpdatedComments({ ...updatedComments, [app.id]: e.target.value })} style={{ width: "150px", marginLeft: 8 }} /></p><p><b>Applied On:</b> {dayjs(app.apply_date).format("YYYY-MM-DD HH:mm")}</p><Button type="primary" onClick={() => handleUpdate(app.id)}>Update</Button></Card>))) : (<Table columns={columns} dataSource={applications} rowKey="id" />)}
    </div>
  );
};

export default UpdateApplicationStatus;
8