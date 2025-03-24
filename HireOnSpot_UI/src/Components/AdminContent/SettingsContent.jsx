import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const SettingsContent = () => {
  return (
    <Card className="shadow-md rounded-lg p-6 text-center">
      <Title level={3} style={{ color: "#004aad" }}>
        Settings
      </Title>
      <Text type="secondary">This feature is coming soon. Stay tuned!</Text>
    </Card>
  );
};

export default SettingsContent;
