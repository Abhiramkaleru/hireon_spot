import React from "react";
import { Button, Form, Input, Alert, Spin, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addEmployer } from "../../Redux/Slice";

function AddEmployerContent() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.admin);

  const onFinish = (values) => {
    dispatch(addEmployer(values));
  };

  return (
    <div>
      {error && <Alert message={error} type="error" showIcon />}
      {success && <Alert message="Employer Added Successfully!" type="success" showIcon />}

      <Form
        name="addEmployer"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ role: "employer" }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the employer name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please enter a password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role!" }]}
        >
          <Select>
            <Select.Option value="employer">Employer</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            {/* Add more roles if needed */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loading}>
            {loading ? <Spin /> : "Add Employer"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddEmployerContent;




// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addEmployer } from "../../Redux/Slice";

// function AddEmployerContent() {
//   const dispatch = useDispatch();
//   const { loading, error, success} = useSelector((state) => state.admin);

//   // State to track form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     dispatch(addEmployer(formData)); // Dispatch action
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>Employer Added Successfully!</p>}
      
//       <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             minLength={6}
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//             minLength={6}
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Adding..." : "Add Employer"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddEmployerContent;

