// import React, { useContext } from "react";
// import { Card, Progress, Button, Typography, Row, Col } from "antd";
// import { UserOutlined, SaveOutlined, FileDoneOutlined } from "@ant-design/icons";
// import { useMediaQuery } from "react-responsive";
// import { AuthContext } from "../../contexts/AuthContext";

// const { Title, Text } = Typography;

// const DashBoardOverview = () => {
//   const { auth } = useContext(AuthContext);

//   // Sample data (can be fetched from an API)
//   const profile = {
//     name: auth?.user?.name || "Job Seeker",
//     appliedJobs: 5,
//     savedJobs: 10,
//     profileCompletion: 80,
//   };

//   // Responsive Breakpoints
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   return (
//     <Card
//       bordered
//       hoverable
//       style={{
//         width: "100%",
//         borderRadius: "12px",
//         padding: isMobile ? "16px" : "24px",
//         backgroundColor: "#f9fafc",
//       }}
//     >
//       <Title level={isMobile ? 4 : 3}>
//         👋 Welcome, {profile.name}!
//       </Title>
//       <Text type="secondary">
//         Track your walk-in job progress below:
//       </Text>

//       {/* Stats Row */}
//       <Row 
//         gutter={[16, 16]} 
//         style={{ marginTop: 20, display: "flex", flexWrap: "wrap" }}
//       >
//         {/* Applied Jobs */}
//         <Col xs={24} sm={12} md={8}>
//           <Card.Grid style={getGridStyle(isMobile)}>
//             <FileDoneOutlined style={getIconStyle(isMobile, "#1890ff")} />
//             <Title level={isMobile ? 5 : 4}>
//               {profile.appliedJobs}
//             </Title>
//             <Text>Walk-in Jobs Applied</Text>
//           </Card.Grid>
//         </Col>

//         {/* Saved Jobs */}
//         <Col xs={24} sm={12} md={8}>
//           <Card.Grid style={getGridStyle(isMobile)}>
//             <SaveOutlined style={getIconStyle(isMobile, "#fa8c16")} />
//             <Title level={isMobile ? 5 : 4}>
//               {profile.savedJobs}
//             </Title>
//             <Text>Saved Jobs</Text>
//           </Card.Grid>
//         </Col>

//         {/* Profile Completion */}
//         <Col xs={24} sm={12} md={8}>
//           <Card.Grid style={getGridStyle(isMobile)}>
//             <UserOutlined style={getIconStyle(isMobile, "#52c41a")} />
//             <Progress
//               percent={profile.profileCompletion}
//               size="small"
//               strokeColor="#52c41a"
//             />
//             <Text>Profile Completion</Text>
//           </Card.Grid>
//         </Col>
//       </Row>

//       {/* Action Buttons */}
//       <Row 
//         justify="center" 
//         style={{ marginTop: 20, flexWrap: "wrap" }}
//       >
//         <Button
//           type="primary"
//           size={isMobile ? "small" : "large"}
//           style={{
//             marginRight: 10,
//             backgroundColor: "#1890ff",
//             borderColor: "#1890ff",
//           }}
//         >
//           Find Walk-in Jobs
//         </Button>
//         <Button
//           size={isMobile ? "small" : "large"}
//           style={{
//             color: "#1890ff",
//             borderColor: "#1890ff",
//           }}
//         >
//           Update Profile
//         </Button>
//       </Row>
//     </Card>
//   );
// };

// // Dynamic Styles
// const getGridStyle = (isMobile) => ({
//   width: "100%",
//   textAlign: "center",
//   padding: isMobile ? "12px" : "20px",
//   borderRadius: "8px",
//   backgroundColor: "#ffffff",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
// });

// const getIconStyle = (isMobile, color) => ({
//   fontSize: isMobile ? "24px" : "30px",
//   marginBottom: "10px",
//   color: color,
// });

// export default DashBoardOverview;


import React, { useContext } from "react";
import { Card, Progress, Button, Typography, Row, Col } from "antd";
import { UserOutlined, SaveOutlined, FileDoneOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "../../contexts/AuthContext";

const { Title, Text } = Typography;

const DashBoardOverview = () => {
  const { auth } = useContext(AuthContext);

  // Sample data (can be fetched from an API)
  const profile = {
    name: auth?.user?.name || "Job Seeker",
    appliedJobs: 5,
    savedJobs: 10,
    profileCompletion: 80,
  };

  // Responsive Breakpoints
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Card
      bordered
      hoverable
      style={{
        width: "100%",
        borderRadius: "12px",
        padding: isMobile ? "16px" : "24px",
        position: "relative", // Needed for absolute positioning
        backgroundColor: "rgba(13, 17, 54, 0.9)", // Semi-transparent for ASCII effect
        backdropFilter: "blur(10px)",
        overflow: "hidden", // Ensure ASCII doesn't overflow
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
    
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Title level={isMobile ? 4 : 3}>
          👋 Welcome, {profile.name}!
        </Title>
        <Text type="secondary">
          Track your walk-in job progress below:
        </Text>

        {/* Stats Row */}
        <Row 
          gutter={[16, 16]} 
          style={{ marginTop: 20, display: "flex", flexWrap: "wrap" }}
        >
          {/* Applied Jobs */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <FileDoneOutlined style={getIconStyle(isMobile, "#1890ff")} />
              <Title level={isMobile ? 5 : 4}>
                {profile.appliedJobs}
              </Title>
              <Text>Walk-in Jobs Applied</Text>
            </Card.Grid>
          </Col>

          {/* Saved Jobs */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <SaveOutlined style={getIconStyle(isMobile, "#fa8c16")} />
              <Title level={isMobile ? 5 : 4}>
                {profile.savedJobs}
              </Title>
              <Text>Saved Jobs</Text>
            </Card.Grid>
          </Col>

          {/* Profile Completion */}
          <Col xs={24} sm={12} md={8}>
            <Card.Grid style={getGridStyle(isMobile)}>
              <UserOutlined style={getIconStyle(isMobile, "#52c41a")} />
              <Progress
                percent={profile.profileCompletion}
                size="small"
                strokeColor="#52c41a"
              />
              <Text>Profile Completion</Text>
            </Card.Grid>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row 
          justify="center" 
          style={{ marginTop: 20, flexWrap: "wrap" }}
        >
          <Button
            type="primary"
            size={isMobile ? "small" : "large"}
            style={{
              marginRight: 10,
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
            }}
          >
            Find Walk-in Jobs
          </Button>
          <Button
            size={isMobile ? "small" : "large"}
            style={{
              color: "#1890ff",
              borderColor: "#1890ff",
            }}
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
