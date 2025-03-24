import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Modal, Form, Input, message, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { fetchJobs, updateJob, deleteJob } from "../../Redux/JobSlice";

const JobManager = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchJobs()); // Fetch jobs when component mounts
  }, [dispatch]);

  // Open Edit Modal
  const handleEdit = (job) => {
    setCurrentJob(job);
    form.setFieldsValue(job);
    setEditModalVisible(true);
  };

  // Handle Job Update
  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await dispatch(updateJob({ id: currentJob.id, jobData: values })).unwrap();
      message.success("Job updated successfully!");
      setEditModalVisible(false);
    } catch (error) {
      message.error(error || "Failed to update job");
    }
  };

  // Handle Job Deletion
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteJob(id)).unwrap();
      message.success("Job deleted successfully!");
    } catch (error) {
      message.error(error || "Failed to delete job");
    }
  };

  // Table Columns
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Salary", dataIndex: "salary", key: "salary" },
    { title: "Location", dataIndex: "location", key: "location" },
    {
      title: "Actions",
      key: "actions",
      render: (_, job) => (
        <>
          <Button
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(job)}
          />
          <Popconfirm
            title="Are you sure to delete this job?"
            onConfirm={() => handleDelete(job.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Jobs</h2>
      <Table
        dataSource={jobs}
        columns={columns}
        rowKey="id"
        loading={loading}
      />

      {/* Edit Job Modal */}
      <Modal
        title="Edit Job"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onOk={handleUpdate}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="Job Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="salary" label="Salary" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="location" label="Location" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default JobManager;
