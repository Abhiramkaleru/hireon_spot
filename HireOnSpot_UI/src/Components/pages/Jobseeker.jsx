
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  DashboardOutlined,
  EyeOutlined,
  HeartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Drawer, Grid } from "antd";
import ViewJobs from "../JobseekerContent/ViewJobs";
import DashBoardOverview from "../JobseekerContent/DashBoardOverview";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const JobseekerDashboard = () => (
  <div>
    <h2>Dashboard Overview</h2>
    <p>View job listings and manage your profile.</p>
  </div>
);
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

  const screens = useBreakpoint(); // ✅ Use Ant Design's breakpoint system
  const { logout, auth } = useContext(AuthContext);

  const [selectedComponent, setSelectedComponent] = useState(
    <DashBoardOverview />
  );
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = !screens.lg; // ✅ Automatically detects if the screen is mobile based on breakpoints

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1":
        setSelectedComponent(<DashBoardOverview />);
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

    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "2", icon: <EyeOutlined />, label: "View Jobs" },
    { key: "3", icon: <HeartOutlined />, label: "Interested Jobs" },
    { key: "4", icon: <UserOutlined />, label: "Profile" },
  ];

  const renderLogo = () => (
    <div
      className="logo"
      style={{
        color: "white",
        padding: "16px",
        fontSize: collapsed ? "14px" : "16px",
        fontWeight: "bold",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <svg
        width={collapsed ? "80" : "150"}
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
      {!collapsed && "JobSeeker Dashboard"}
    </div>
  );

  // Desktop sidebar
  const desktopSidebar = (
    <Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}
    >
      {renderLogo()}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
        items={menuItems}
      />
    </Sider>
  );

  // Mobile drawer menu
  const mobileMenu = (
    <Drawer
      title="Menu"
      placement="left"
      closable
      onClose={() => setDrawerVisible(false)}
      open={drawerVisible}
      bodyStyle={{ padding: 0, background: "#001529" }}
      headerStyle={{
        background: "#001529",
        color: "white",
        borderBottom: "1px solid #303030",
      }}
      closeIcon={<CloseOutlined style={{ color: "white" }} />}
      width={250}
    >
      {renderLogo()}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
        items={menuItems}
      />
    </Drawer>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && desktopSidebar}
      {isMobile && mobileMenu}

      <Layout style={{ width: screens.lg ? "81vw" : "100%" }}>
        {/* Header */}
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ marginRight: 1 }}
            />
          )}
          <span style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: "bold" }}>
            Welcome, {auth.user ? auth.user.email : "Job Seeker"}!
          </span>
          <Button type="primary" onClick={handleLogout} style={{ width: isMobile ? "70px" : "80px", height: isMobile ? "30px" : "35px" }}>
            Logout
          </Button>
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: isMobile ? "16px 8px 0" : "24px 16px 0",
            overflow: "auto",
            padding: isMobile ? 16 : 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "80vh",
            minWidth:"100%"
          }}
        >
          {selectedComponent}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          HireOnSpot ©{new Date().getFullYear()} - Job Seeker Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default JobSeekerDashboard;
