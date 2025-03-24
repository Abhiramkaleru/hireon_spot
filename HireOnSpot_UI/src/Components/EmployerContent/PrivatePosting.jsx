import React from "react";
import { Card, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import "../EmployerContent/PrivatePosting.css"; // Import animations

const { Title, Text } = Typography;

const PrivatePostings = () => (
  <Card
    className="shadow-lg rounded-2xl p-8 text-center flex flex-col items-center"
    style={{
      background: "linear-gradient(135deg, #f9f9f9, #e3e3e3)",
      border: "1px solid #cccccc",
      maxWidth: 450,
      margin: "auto",
    }}
  >
    <LockOutlined className="lock-pulse" style={{ fontSize: "60px", color: "#ff6b6b" }} />
    
    <Title level={3} style={{ color: "#333", marginTop: "20px" }}>
      Private Postings
    </Title>
    <Text type="secondary" style={{ fontSize: "16px", lineHeight: "1.5" }}>
      🔧 This feature is under development. Stay tuned for updates!
    </Text>
  </Card>
);

export default PrivatePostings;
