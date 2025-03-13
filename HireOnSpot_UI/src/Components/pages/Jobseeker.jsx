import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  DashboardOutlined,
  EyeOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";
import ViewJobs from "../JobseekerContent/ViewJobs";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

// Job Seeker Components
const JobseekerDashboard = () => (
  <div>
    <h2>Dashboard Overview</h2>
    <p>View job listings and manage your profile.</p>
  </div>
);
// const JobListings = () => (
//   <div>
//     <h2>Available Jobs</h2>
//     <p>Browse and apply for jobs.</p>
//   </div>
// );
const InterestedJobs = () => (
  <div>
    <h2>Interested Jobs</h2>
    <p>Jobs you have marked as interested.</p>
  </div>
);
const Profile = () => (
  <div>
    <h2>My Profile</h2>
    <p>Update your profile information.</p>
  </div>
);

const JobSeekerDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { logout, auth } = useContext(AuthContext);
  const [selectedComponent, setSelectedComponent] = useState(
    <JobseekerDashboard />
  );

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1":
        setSelectedComponent(<JobseekerDashboard />);
        break;
      case "2":
        setSelectedComponent(<ViewJobs />);
        break;
      case "3":
        setSelectedComponent(<InterestedJobs />);
        break;
      case "4":
        setSelectedComponent(<Profile />);
        break;
      default:
        setSelectedComponent(<JobseekerDashboard />);
    }
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle} theme="dark">
        <div
          className="demo-logo-vertical"
          style={{
            color: "white",
            padding: "16px",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <svg
                    width="150"
                    height="50"
                    viewBox="0 0 400 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <text
                        x="50"
                        y="70"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        HIRE
                      </text>
                      <circle cx="200" cy="60" r="30" fill="blue" />
                      <text
                        x="180"
                        y="73"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        ON
                      </text>
                      <text
                        x="250"
                        y="70"
                        fontFamily="Arial"
                        fontWeight="900"
                        fontSize="40"
                        fill="white"
                      >
                        SPOT
                      </text>
                      <path
                        d="M320 45 C340 45, 340 75, 320 75"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                      />
                      <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
                    </g>
                  </svg>
          Job Seeker Dashboard
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick}
          items={[
            { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "2", icon: <EyeOutlined />, label: "View Jobs" },
            { key: "3", icon: <HeartOutlined />, label: "Interested Jobs" },
            { key: "4", icon: <UserOutlined />, label: "Profile" },
          ]}
        />
      </Sider>
      <Layout style={{ width: "1330px", height: "100vh" }}>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Welcome, {auth.user ? auth.user.email : "Job Seeker"}!
          </span>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "auto",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "80vh",
          }}
        >
          {selectedComponent}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          HireOnSpot ©{new Date().getFullYear()} - Job Seeker Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default JobSeekerDashboard;
