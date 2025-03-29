// import React from "react";
// import { Button, Form, Input, Alert, Spin, Select } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { addEmployer } from "../../Redux/Slice";

// function AddEmployerContent() {
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector((state) => state.admin);

//   const onFinish = (values) => {
//     dispatch(addEmployer(values));
//   };

//   return (
//     <div>
//       {error && <Alert message={error} type="error" showIcon />}
//       {success && <Alert message="Employer Added Successfully!" type="success" showIcon />}

//       <Form
//         name="addEmployer"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ role: "employer" }}
//         onFinish={onFinish}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter the employer name!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             { required: true, message: "Please enter a password!" },
//             { min: 6, message: "Password must be at least 6 characters!" },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           label="Role"
//           name="role"
//           rules={[{ required: true, message: "Please select a role!" }]}
//         >
//           <Select>
//             <Select.Option value="employer">Employer</Select.Option>
//             <Select.Option value="admin">Admin</Select.Option>
//             {/* Add more roles if needed */}
//           </Select>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" disabled={loading}>
//             {loading ? <Spin /> : "Add Employer"}
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// }

// export default AddEmployerContent;


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
    <div className="w-full max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Add New Employer</h2>

      {error && <Alert message={error} type="error" className="mb-4" />}
      {success && <Alert message="Employer added successfully!" type="success" className="mb-4" />}

      <Form
        name="addEmployer"
        layout="vertical"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter employer name" }]}
        >
          <Input placeholder="Enter employer name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Please enter a valid email" }
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role" }]}
        >
          <Select placeholder="Select role">
            <Select.Option value="employer">Employer</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            {/* Add more roles if needed */}
          </Select>
        </Form.Item>

        <Form.Item className="mt-6">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            disabled={loading}
            style={
              {
                borderColor: "#FF8541",
                background: "linear-gradient(90deg, #ff8541 0%,rgb(0, 0, 0) 100%)",
                border: "none",
                color: "white",
              }
            }
          >
            {loading ? <Spin size="small" /> : "Add Employer"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddEmployerContent;