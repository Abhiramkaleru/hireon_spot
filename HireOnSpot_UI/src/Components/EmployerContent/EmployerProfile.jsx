// import React, { useState, useContext } from "react";
// import { Card, Form, Input, Button, Upload, Progress, Typography, Row, Col, message } from "antd";
// import { UploadOutlined, UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
// import { AuthContext } from "../../contexts/AuthContext"; // Import Auth Context

// const { Title, Text } = Typography;

// const EmployerProfile = () => {
//   const { auth } = useContext(AuthContext); // Fetching employer data from context

//   const [profile, setProfile] = useState({
//     name: auth?.user?.name || "Employer Name",
//     email: auth?.user?.email || "employer@example.com",
//     phone: auth?.user?.phone || "",
//     company: auth?.user?.company || "Company Name",
//     logo: null,
//     profileCompletion: 70, // Example Progress
//   });

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   // Handle Logo Upload
//   const handleUpload = (info) => {
//     if (info.file.status === "done") {
//       setProfile({ ...profile, logo: info.file.name });
//       message.success(`${info.file.name} uploaded successfully`);
//     }
//   };

//   // Handle Save
//   const handleSave = () => {
//     message.success("Profile Updated Successfully!");
//     console.log("Updated Profile:", profile);
//   };

//   return (
//     <Card
//       title="Employer Profile"
//       className="shadow-md rounded-lg p-4"
//     >
//       {/* Profile Summary */}
//       <Row gutter={[16, 16]} justify="center">
//         <Col xs={24} sm={12}>
//           <Title level={4}>
//             <UserOutlined /> {profile.name}
//           </Title>
//           <Text type="secondary">{profile.email}</Text>
//         </Col>
//         <Col xs={24} sm={12} className="text-center">
//           <Progress type="circle" percent={profile.profileCompletion} />
//           <Text block className="block mt-2">
//             Profile Completion
//           </Text>
//         </Col>
//       </Row>

//       {/* Editable Form */}
//       <Form layout="vertical" className="mt-4">
//         <Form.Item label="Full Name">
//           <Input
//             prefix={<UserOutlined />}
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//           />
//         </Form.Item>

//         <Form.Item label="Email">
//           <Input prefix={<MailOutlined />} value={profile.email} disabled />
//         </Form.Item>

//         <Form.Item label="Phone Number">
//           <Input
//             prefix={<PhoneOutlined />}
//             name="phone"
//             value={profile.phone}
//             onChange={handleChange}
//           />
//         </Form.Item>

//         <Form.Item label="Company Name">
//           <Input
//             prefix={<HomeOutlined />}
//             name="company"
//             value={profile.company}
//             onChange={handleChange}
//           />
//         </Form.Item>

//         {/* Company Logo Upload */}
//         <Form.Item label="Upload Company Logo">
//           <Upload
//             beforeUpload={() => false}
//             onChange={handleUpload}
//             showUploadList={false}
//           >
//             <Button icon={<UploadOutlined />}>Upload Logo</Button>
//           </Upload>
//           {profile.logo && (
//             <Text type="secondary" className="block mt-2">
//               Uploaded: {profile.logo}
//             </Text>
//           )}
//         </Form.Item>

//         {/* Save Button */}
//         <Form.Item>
//           <Button type="primary" block onClick={handleSave}>
//             Save Profile
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   );
// };

// export default EmployerProfile;



import React, { useState, useContext } from "react";
import { Card, Form, Input, Button, Upload, Progress, Typography, Row, Col, message } from "antd";
import { UploadOutlined, UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import { AuthContext } from "../../contexts/AuthContext"; // Import Auth Context

const { Title, Text } = Typography;

const EmployerProfile = () => {
  const { auth } = useContext(AuthContext); // Fetching employer data from context

  const [profile, setProfile] = useState({
    name: auth?.user?.name || "Employer Name",
    email: auth?.user?.email || "employer@example.com",
    phone: auth?.user?.phone || "",
    company: auth?.user?.company || "Company Name",
    logo: null,
    profileCompletion: 70, // Example Progress
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle Logo Upload
  const handleUpload = (info) => {
    if (info.file.status === "done") {
      setProfile({ ...profile, logo: info.file.name });
      message.success(`${info.file.name} uploaded successfully`);
    }
  };

  // Handle Save
  const handleSave = () => {
    message.success("Profile Updated Successfully!");
    console.log("Updated Profile:", profile);
  };

  return (
    <Card
      title="Employer Profile"
      style={{ background: "#fff", color: "#000" }}
      className="shadow-md rounded-lg p-4"
      headStyle={{ background: "#FF8541", color: "#000", transition: "background 0.3s ease" }}
    >
      {/* Profile Summary */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12}>
          <Title level={4} style={{ color: "#000" }}>
            <UserOutlined /> {profile.name}
          </Title>
          <Text style={{ color: "#000" }} type="secondary">
            {profile.email}
          </Text>
        </Col>
        <Col xs={24} sm={12} style={{ textAlign: "center" }}>
          <Progress type="circle" percent={profile.profileCompletion} strokeColor="#FF8541" />
          <Text style={{ color: "#000" }} className="block mt-2">
            Profile Completion
          </Text>
        </Col>
      </Row>

      {/* Editable Form */}
      <Form layout="vertical" className="mt-4">
        <Form.Item label="Full Name">
          <Input
            prefix={<UserOutlined />}
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Email">
          <Input prefix={<MailOutlined />} value={profile.email} disabled />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input
            prefix={<PhoneOutlined />}
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Company Name">
          <Input
            prefix={<HomeOutlined />}
            name="company"
            value={profile.company}
            onChange={handleChange}
          />
        </Form.Item>

        {/* Company Logo Upload */}
        <Form.Item label="Upload Company Logo">
          <Upload beforeUpload={() => false} onChange={handleUpload} showUploadList={false}>
            <Button icon={<UploadOutlined />} style={{ background: "#FF8541", borderColor: "#FF8541", transition: "background 0.3s ease" }}>
              Upload Logo
            </Button>
          </Upload>
          {profile.logo && (
            <Text style={{ color: "#000" }} type="secondary" className="block mt-2">
              Uploaded: {profile.logo}
            </Text>
          )}
        </Form.Item>

        {/* Save Button */}
        <Form.Item>
          <Button
            type="primary"
            block
            onClick={handleSave}
            style={{
              // background: "#FF8541",
              borderColor: "#FF8541",
              transition: "background 0.3s ease",
              borderColor: "#FF8541",
              background: "linear-gradient(90deg, #ff8541 0%,rgb(0, 0, 0) 100%)",
              border: "none",
              color: "white",
            }}
          >
            Save Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EmployerProfile;
