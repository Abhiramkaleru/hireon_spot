import React, { useContext, useEffect, useState } from "react";
import { Card, Form, Input, Button, Upload, Progress, Typography, Row, Col, message } from "antd";
import { UploadOutlined, UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { AuthContext } from "../../contexts/AuthContext";

const { Title, Text } = Typography;

const JobSeekerProfile = () => {
  const { auth } = useContext(AuthContext);

  // Sample User Data (Replace with API Call)
  const [profile, setProfile] = useState({
    name: auth?.user?.name || "John Doe",
    email: auth?.user?.email || "johndoe@example.com",
    phone: auth?.user?.phone || "",
    resume: null,
    profileCompletion: 60, // Example Progress
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle Resume Upload
  const handleUpload = (info) => {
    if (info.file.status === "done") {
      setProfile({ ...profile, resume: info.file.name });
      message.success(`${info.file.name} uploaded successfully`);
    }
  };

  // Handle Save (Future API Integration)
  const handleSave = () => {
    message.success("Profile Updated Successfully!");
    console.log("Updated Profile:", profile);
  };

  return (
    <Card
      title="My Profile"
      style={{
        width: "100%",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Profile Summary */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12}>
          <Title level={4}>
            <UserOutlined /> {profile.name}
          </Title>
          <Text type="secondary">{profile.email}</Text>
        </Col>
        <Col xs={24} sm={12} style={{ textAlign: "center" }}>
          <Progress type="circle" percent={profile.profileCompletion} />
          <Text block style={{ display: "block", marginTop: 8 }}>
            Profile Completion
          </Text>
        </Col>
      </Row>

      {/* Editable Form */}
      <Form layout="vertical" style={{ marginTop: 24 }}>
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

        {/* Resume Upload */}
        <Form.Item label="Upload Resume">
          <Upload
            beforeUpload={() => false}
            onChange={handleUpload}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          {profile.resume && (
            <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
              Uploaded: {profile.resume}
            </Text>
          )}
        </Form.Item>

        {/* Save Button */}
        <Form.Item>
          <Button type="primary" block onClick={handleSave}>
            Save Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default JobSeekerProfile;
