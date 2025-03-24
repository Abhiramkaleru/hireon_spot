import React from "react";
import { Card, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import "../EmployerContent/PublicPosting.css"; // Import animations

const { Title, Text } = Typography;

const PublicPostings = () => (
  <Card
    className="shadow-lg rounded-2xl p-8 text-center flex flex-col items-center"
    style={{
      background: "linear-gradient(135deg, #f0f8ff, #e6f7ff)",
      border: "1px solid #b3daff",
      maxWidth: 450,
      margin: "auto",
    }}
  >
    <GlobalOutlined className="globe-bounce" style={{ fontSize: "60px", color: "#004aad" }} />
    
    <Title level={3} style={{ color: "#004aad", marginTop: "20px" }}>
      Public Postings
    </Title>
    <Text type="secondary" style={{ fontSize: "16px", lineHeight: "1.5" }}>
      🚀 This feature is coming soon! Stay tuned for exciting updates.
    </Text>
  </Card>
);

export default PublicPostings;
