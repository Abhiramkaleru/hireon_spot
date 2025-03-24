import React from "react";
import { Card, Typography } from "antd";
import { ClockCircleOutlined, HourglassOutlined } from "@ant-design/icons";
import "../../Components/AdminContent/SettingContent.css"

const { Title, Text } = Typography;

const SettingsContent = () => {
  return (
    <Card
      className="shadow-lg rounded-2xl p-8 text-center flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #f0f8ff, #e6f7ff)",
        border: "1px solid #b3daff",
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HourglassOutlined
          className="hourglass-bounce"
          style={{
            fontSize: "50px",
            color: "#ff9800",
            position: "absolute",
            left: "-25px",
            top: "-10px",
            opacity: 0.8,
          }}
        />
        <ClockCircleOutlined
          className="clock-spin"
          style={{
            fontSize: "60px",
            color: "#004aad",
          }}
        />
      </div>

      <Title level={3} style={{ color: "#004aad", marginTop: "20px" }}>
        Settings
      </Title>
      <Text type="secondary" style={{ fontSize: "16px", lineHeight: "1.5" }}>
        🚀 Exciting features are on the way! Stay tuned for updates.
      </Text>
    </Card>
  );
};

export default SettingsContent;

