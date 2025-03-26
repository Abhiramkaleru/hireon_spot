import React, { useContext, useEffect } from "react";
import { Card, Progress, Button, Typography, Row, Col } from "antd";
import { UserOutlined, SaveOutlined, FileDoneOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchInterestedCount } from "../../Redux/JobSlice";

const { Title, Text } = Typography;

const DashBoardOverview = () => {
  const { auth } = useContext(AuthContext);
  const dispatch = useDispatch();

  // Using the correct property name from Redux state (adjust as necessary)
  const { interestedCount } = useSelector((state) => state.jobs);

  useEffect(() => {
    // Dispatch the thunk to fetch the saved (interested) count on mount
    dispatch(fetchInterestedCount());
  }, [dispatch]);

  // Sample data (replace with API call if needed)
  const profile = {
    name: auth?.user?.name || "Job Seeker",
    appliedJobs: 5,
    savedJobs: 10,
    profileCompletion: 80,
  };

  // Alert Notification Handler
  const handleComingSoon = () => {
    alert("🚀 Feature Coming Soon! Stay tuned!");
  };

  // Responsive Breakpoints
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Card
      hoverable
      style={{
        width: "100%",
        borderRadius: "12px",
        padding: isMobile ? "16px" : "24px",
        backgroundColor: "rgba(13, 17, 54, 0.9)", // Semi-transparent effect
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Title level={isMobile ? 4 : 3} style={{ color: "#fff" }}>
          👋 Welcome, {profile.name}!
        </Title>
        <Text type="secondary" style={{ color: "#fff" }}>
          Track your walk-in job progress below:
        </Text>

        {/* Stats Row */}
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          {/* Applied Jobs */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <FileDoneOutlined style={getIconStyle(isMobile, "#1890ff")} />
              <Title level={isMobile ? 5 : 4}>{profile.appliedJobs}</Title>
              <Text>Walk-in Jobs Applied</Text>
            </Card.Grid>
          </Col>

          {/* Saved Jobs (Interested Count) */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <SaveOutlined style={getIconStyle(isMobile, "#fa8c16")} />
              <Title level={isMobile ? 5 : 4}>
                {interestedCount}
              </Title>
              <Text>Saved Jobs</Text>
            </Card.Grid>
          </Col>

          {/* Profile Completion */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <UserOutlined style={getIconStyle(isMobile, "#52c41a")} />
              <Progress percent={profile.profileCompletion} size="small" strokeColor="#52c41a" />
              <Text>Profile Completion</Text>
            </Card.Grid>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row justify="center" style={{ marginTop: 20 }}>
          <Button
            type="primary"
            size={isMobile ? "small" : "large"}
            style={{
              marginRight: 10,
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
            onClick={handleComingSoon}
          >
            Find Walk-in Jobs
          </Button>

          <Button
            size={isMobile ? "small" : "large"}
            style={{
              color: "#1890ff",
              borderColor: "#1890ff",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
            onClick={handleComingSoon}
          >
            Update Profile
          </Button>
        </Row>
      </div>
    </Card>
  );
};

// Dynamic Styles
const getGridStyle = (isMobile) => ({
  width: "100%",
  textAlign: "center",
  padding: isMobile ? "12px" : "20px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
});

const getIconStyle = (isMobile, color) => ({
  fontSize: isMobile ? "24px" : "30px",
  marginBottom: "10px",
  color: color,
});

export default DashBoardOverview;
