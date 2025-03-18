// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Table, Button, Modal, Form, Spinner, Alert } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployers, updateEmployer, deleteEmployer } from "../../Redux/Slice";

// const UsersContent = () => {
//   const dispatch = useDispatch();
//   const { loading, employers, error } = useSelector((state) => state.admin);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEmployer, setSelectedEmployer] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   useEffect(() => {
//     dispatch(fetchEmployers());
//   }, [dispatch]);

//   // Handle Edit Click
//   const handleEdit = (employer) => {
//     setSelectedEmployer(employer);
//     setFormData({ name: employer.name, email: employer.email });
//     setShowModal(true);
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Update Employer
//   const handleUpdate = async () => {
//     if (!formData.name || !formData.email) {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       await dispatch(updateEmployer({ id: selectedEmployer.id, employerData: formData }));
//       alert("Employer updated successfully!");
//       setShowModal(false);
//     } catch (error) {
//       alert("Failed to update employer.");
//     }
//   };

//   // Handle Delete Employer
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this employer?")) {
//       await dispatch(deleteEmployer(id));
//       alert("Employer deleted successfully!");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {error && <Alert variant="danger">{error}</Alert>}
//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" />
//         </div>
//       ) : (
//         <div className="table-responsive">
//           <Table striped bordered hover>
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employers.map((employer) => (
//                 <tr key={employer.id}>
//                   <td>{employer.id}</td>
//                   <td>{employer.name}</td>
//                   <td>{employer.email}</td>
//                   <td>{employer.role}</td>
//                   <td>
//                     <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(employer)}>
//                       Edit
//                     </Button>
//                     <Button variant="danger" size="sm" onClick={() => handleDelete(employer.id)}>
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {/* Edit Employer Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Employer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="success" onClick={handleUpdate}>
//             Update
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UsersContent;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers, updateEmployer, deleteEmployer } from "../../Redux/Slice";
import { Table, Button, Modal, Form, Spin, Alert, Space, Typography, Popconfirm, Input, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const UsersContent = () => {
  const dispatch = useDispatch();
  const { loading, employers, error } = useSelector((state) => state.admin);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchEmployers());
  }, [dispatch]);

  // Handle Edit Click
  const handleEdit = (employer) => {
    setSelectedEmployer(employer);
    form.setFieldsValue({
      name: employer.name,
      email: employer.email,
      role: employer.role
    });
    setShowModal(true);
  };

  // Handle Update User
  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await dispatch(updateEmployer({ 
        id: selectedEmployer.id, 
        employerData: values 
      }));
      setShowModal(false);
      form.resetFields();
      Modal.success({
        title: "Success",
        content: "User updated successfully!",
      });
    } catch (error) {
      Modal.error({
        title: "Error",
        content: `Failed to update user: ${error?.message || "Unknown error"}`,
      });
    }
  };

  // Handle Delete User
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteEmployer(id));
      Modal.success({
        title: "Success",
        content: "User deleted successfully!",
      });
    } catch (err) {
      Modal.error({
        title: "Error",
        content: `Failed to delete user: ${err?.message || "Unknown error"}`,
      });
    }
  };

  // Handle Modal Cancel
  const handleCancel = () => {
    form.resetFields();
    setShowModal(false);
  };

  // Table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["sm"],
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: [
        { text: 'Admin', value: 'admin' },
        { text: 'Employer', value: 'employer' },
        { text: 'Job Seeker', value: 'job_seeker' }
      ],
      onFilter: (value, record) => record.role === value
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete user"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              type="primary" 
              danger 
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // For extra small screens, use a custom expandable row
  const expandedRowRender = (record) => {
    return (
      <div style={{ padding: "8px" }}>
        <p><strong>Email:</strong> {record.email}</p>
        <p><strong>Role:</strong> {record.role}</p>
        <Space>
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete user"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              type="primary" 
              danger 
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      </div>
    );
  };

  return (
    <div className="users-management-container">
      <Title level={3}>Users Management</Title>
      
      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}
      
      {loading ? (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={employers?.length ? employers : []}
          rowKey="id"
          pagination={{ 
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20', '50'],
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
          }}
          scroll={{ x: "max-content" }}
          expandable={{
            expandedRowRender,
            showExpandColumn: false,
            expandRowByClick: true,
            expandIconColumnIndex: -1,
            expandedRowClassName: () => "ant-table-expanded-row-small-only"
          }}
          locale={{ emptyText: "No users found" }}
        />
      )}

      {/* Edit User Modal */}
      <Modal
        title="Edit User"
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter user name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter user email" },
              { type: "email", message: "Please enter a valid email" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select user role" }]}
          >
            <Select placeholder="Select a role">
              <Option value="admin">Admin</Option>
              <Option value="employer">Employer</Option>
              <Option value="job_seeker">Job Seeker</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {/* Add this CSS to make the expandable row only visible on extra small screens */}
      <style jsx>{`
        .users-management-container {
          padding: 16px;
        }
        @media (min-width: 576px) {
          .ant-table-expanded-row-small-only {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default UsersContent;