
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployers, updateEmployer, deleteEmployer } from "../../Redux/Slice";
// import { Table, Button, Modal, Form, Spin, Alert, Space, Typography, Popconfirm, Input, Select } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// const { Title } = Typography;
// const { Option } = Select;

// const UsersContent = () => {
//   const dispatch = useDispatch();
//   const { loading, employers, error } = useSelector((state) => state.admin);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedEmployer, setSelectedEmployer] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     dispatch(fetchEmployers());
//   }, [dispatch]);

//   // Handle Edit Click
//   const handleEdit = (employer) => {
//     setSelectedEmployer(employer);
//     form.setFieldsValue({
//       name: employer.name,
//       email: employer.email,
//       role: employer.role
//     });
//     setShowModal(true);
//   };

//   // Handle Update User
//   const handleUpdate = async () => {
//     try {
//       const values = await form.validateFields();
//       await dispatch(updateEmployer({ 
//         id: selectedEmployer.id, 
//         employerData: values 
//       }));
//       setShowModal(false);
//       form.resetFields();
//       Modal.success({
//         title: "Success",
//         content: "User updated successfully!",
//       });
//     } catch (error) {
//       Modal.error({
//         title: "Error",
//         content: `Failed to update user: ${error?.message || "Unknown error"}`,
//       });
//     }
//   };

//   // Handle Delete User
//   const handleDelete = async (id) => {
//     try {
//       await dispatch(deleteEmployer(id));
//       Modal.success({
//         title: "Success",
//         content: "User deleted successfully!",
//       });
//     } catch (err) {
//       Modal.error({
//         title: "Error",
//         content: `Failed to delete user: ${err?.message || "Unknown error"}`,
//       });
//     }
//   };

//   // Handle Modal Cancel
//   const handleCancel = () => {
//     form.resetFields();
//     setShowModal(false);
//   };

//   // Table columns
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//       responsive: ["md"],
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       sorter: (a, b) => a.name.localeCompare(b.name),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       responsive: ["sm"],
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       filters: [
//         { text: 'Admin', value: 'admin' },
//         { text: 'Employer', value: 'employer' },
//         { text: 'Job Seeker', value: 'job_seeker' }
//       ],
//       onFilter: (value, record) => record.role === value
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <Space>
//           <Button 
//             type="primary" 
//             icon={<EditOutlined />} 
//             onClick={() => handleEdit(record)}
//             size="small"
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Delete user"
//             description="Are you sure you want to delete this user?"
//             onConfirm={() => handleDelete(record.id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button 
//               type="primary" 
//               danger 
//               icon={<DeleteOutlined />}
//               size="small"
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   // For extra small screens, use a custom expandable row
//   const expandedRowRender = (record) => {
//     return (
//       <div style={{ padding: "8px" }}>
//         <p><strong>Email:</strong> {record.email}</p>
//         <p><strong>Role:</strong> {record.role}</p>
//         <Space>
//           <Button 
//             type="primary" 
//             icon={<EditOutlined />} 
//             onClick={() => handleEdit(record)}
//             size="small"
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Delete user"
//             description="Are you sure you want to delete this user?"
//             onConfirm={() => handleDelete(record.id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button 
//               type="primary" 
//               danger 
//               icon={<DeleteOutlined />}
//               size="small"
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       </div>
//     );
//   };

//   return (
//     <div className="users-management-container">
//       <Title level={3}>Users Management</Title>
      
//       {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}
      
//       {loading ? (
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <Spin size="large" />
//         </div>
//       ) : (
//         <Table
//           columns={columns}
//           dataSource={employers?.length ? employers : []}
//           rowKey="id"
//           pagination={{ 
//             pageSize: 10,
//             showSizeChanger: true,
//             pageSizeOptions: ['5', '10', '20', '50'],
//             showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
//           }}
//           scroll={{ x: "max-content" }}
//           expandable={{
//             expandedRowRender,
//             showExpandColumn: false,
//             expandRowByClick: true,
//             expandIconColumnIndex: -1,
//             expandedRowClassName: () => "ant-table-expanded-row-small-only"
//           }}
//           locale={{ emptyText: "No users found" }}
//         />
//       )}

//       {/* Edit User Modal */}
//       <Modal
//         title="Edit User"
//         open={showModal}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" onClick={handleCancel}>
//             Cancel
//           </Button>,
//           <Button key="submit" type="primary" onClick={handleUpdate}>
//             Update
//           </Button>,
//         ]}
//         destroyOnClose={true}
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please enter user name" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { required: true, message: "Please enter user email" },
//               { type: "email", message: "Please enter a valid email" }
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="role"
//             label="Role"
//             rules={[{ required: true, message: "Please select user role" }]}
//           >
//             <Select placeholder="Select a role">
//               <Option value="admin">Admin</Option>
//               <Option value="employer">Employer</Option>
//               <Option value="job_seeker">Job Seeker</Option>
//             </Select>
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Add this CSS to make the expandable row only visible on extra small screens */}
//       <style jsx>{`
//         .users-management-container {
//           padding: 16px;
//         }
//         @media (min-width: 576px) {
//           .ant-table-expanded-row-small-only {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default UsersContent;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers, updateEmployer, deleteEmployer } from "../../Redux/Slice";
import { Table, Button, Modal, Form, Spin, Alert, Space, Typography, Popconfirm, Input, Select, Card, Row, Col } from "antd";
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

  const handleEdit = (employer) => {
    setSelectedEmployer(employer);
    form.setFieldsValue({
      name: employer.name,
      email: employer.email,
      role: employer.role,
    });
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await dispatch(updateEmployer({ id: selectedEmployer.id, employerData: values }));
      setShowModal(false);
      form.resetFields();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const handleDelete = async (id) => {
    await dispatch(deleteEmployer(id));
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", responsive: ["md"] },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email", responsive: ["sm"] },
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)} size="small">Edit</Button>
          <Popconfirm title="Delete user?" onConfirm={() => handleDelete(record.id)} okText="Yes" cancelText="No">
            <Button type="primary" danger icon={<DeleteOutlined />} size="small">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="users-management-container">
      <Title level={3}>Users Management</Title>
      {error && <Alert message={error} type="error" showIcon />}
      {loading ? (
        <Spin size="large" style={{ display: "block", textAlign: "center", margin: "20px 0" }} />
      ) : (
        <>
          <div className="desktop-view">
            <Table columns={columns} dataSource={employers} rowKey="id" pagination={{ pageSize: 10 }} />
          </div>
          <div className="mobile-view">
            <Row gutter={[16, 16]}>
              {employers.map((employer) => (
                <Col xs={24} key={employer.id}>
                  <Card title={employer.name} extra={<EditOutlined onClick={() => handleEdit(employer)} />}>
                    <p><strong>Email:</strong> {employer.email}</p>
                    <p><strong>Role:</strong> {employer.role}</p>
                    <Popconfirm title="Delete user?" onConfirm={() => handleDelete(employer.id)} okText="Yes" cancelText="No">
                      <Button type="primary" danger icon={<DeleteOutlined />} size="small">Delete</Button>
                    </Popconfirm>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}

      <Modal title="Edit User" open={showModal} onCancel={() => setShowModal(false)} onOk={handleUpdate}>
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Enter user name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Enter user email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true, message: "Select user role" }]}>
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="employer">Employer</Option>
              <Option value="job_seeker">Job Seeker</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <style jsx>{`
        .desktop-view { display: block; }
        .mobile-view { display: none; }
        @media (max-width: 768px) {
          .desktop-view { display: none; }
          .mobile-view { display: block; }
        }
      `}</style>
    </div>
  );
};

export default UsersContent;
