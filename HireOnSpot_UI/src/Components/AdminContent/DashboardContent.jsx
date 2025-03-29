import React, { useContext, useState } from "react";
import { Card, Form, Input, Button, Typography, Row, Col, message } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, SafetyOutlined } from "@ant-design/icons";
import { AuthContext } from "../../contexts/AuthContext";

const { Title, Text } = Typography;

const AdminProfile = () => {
  const { auth } = useContext(AuthContext); // Fetch admin data from context

  const [profile, setProfile] = useState({
    name: auth?.user?.name || "Admin Name",
    email: auth?.user?.email || "admin@example.com",
    phone: auth?.user?.phone || "",
    role: auth?.user?.role || "Administrator",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle Save (Future API Call)
  const handleSave = () => {
    message.success("Profile Updated Successfully!");
    console.log("Updated Profile:", profile);
  };

  return (
    <Card
      title="Admin Profile"
      className="shadow-md rounded-lg p-4"
    >
      {/* Profile Summary */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12}>
          <Title level={4}>
            <UserOutlined /> {profile.name}
          </Title>
          <Text type="secondary">{profile.email}</Text>
        </Col>
        <Col xs={24} sm={12} className="text-center">
          <Text strong>
            <SafetyOutlined /> Role: {profile.role}
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

        {/* Save Button */}
        <Form.Item>
          <Button type="primary" block onClick={handleSave} style={{       borderColor: "#FF8541",
                background: "linear-gradient(90deg, #ff8541 0%,rgb(0, 0, 0) 100%)",
                border: "none",
                color: "white",}}>
            Save Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AdminProfile;
