// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import {
//   DashboardOutlined,
//   PlusOutlined,
//   FileTextOutlined,
//   UserOutlined,
//   LockOutlined,
//   UnlockOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, theme, Button } from "antd";
// import JobPostingForm from "../EmployerContent/PostJob";

// const { Header, Content, Footer, Sider } = Layout;

// const siderStyle = {
//   overflow: "auto",
//   height: "100vh",
//   position: "sticky",
//   insetInlineStart: 0,
//   top: 0,
//   bottom: 0,
//   scrollbarWidth: "thin",
//   scrollbarGutter: "stable",
// };

// const Dashboard = () => <div><h2>Dashboard Overview</h2><p>This is where you'll manage job postings and track applicants.</p></div>;
// // const PostJob = () => <div><h2>Post a Job</h2><p>Fill in details to post a job.</p></div>;
// const ManageJobs = () => <div><h2>Manage Jobs</h2><p>View and manage your job listings.</p></div>;
// const JobSeekers = () => <div><h2>Job Seekers</h2><p>Browse and interact with job seekers.</p></div>;
// const PublicPostings = () => <div><h2>Public Postings</h2><p>View public job postings.</p></div>;
// const PrivatePostings = () => <div><h2>Private Postings</h2><p>Manage private job postings.</p></div>;

// const EmployerDashboard = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const { logout, auth } = useContext(AuthContext);
//   const [selectedComponent, setSelectedComponent] = useState(<Dashboard />);

//   const handleLogout = () => {
//     logout();
//   };

//   const handleMenuClick = ({ key }) => {
//     switch (key) {
//       case "1":
//         setSelectedComponent(<Dashboard />);
//         break;
//       case "2":
//         setSelectedComponent(<JobPostingForm />);
//         break;
//       case "3":
//         setSelectedComponent(<ManageJobs />);
//         break;
//       case "4":
//         setSelectedComponent(<JobSeekers />);
//         break;
//       case "5":
//         setSelectedComponent(<PublicPostings />);
//         break;
//       case "6":
//         setSelectedComponent(<PrivatePostings />);
//         break;
//       default:
//         setSelectedComponent(<Dashboard />);
//     }
//   };

//   return (
//     <Layout hasSider>
//       <Sider style={siderStyle} theme="dark">
//         <div className="demo-logo-vertical" style={{ color: "white", padding: "16px", fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>
//         <svg
//                     width="150"
//                     height="50"
//                     viewBox="0 0 400 100"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g>
//                       <text
//                         x="50"
//                         y="70"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         HIRE
//                       </text>
//                       <circle cx="200" cy="60" r="30" fill="blue" />
//                       <text
//                         x="180"
//                         y="73"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         ON
//                       </text>
//                       <text
//                         x="250"
//                         y="70"
//                         fontFamily="Arial"
//                         fontWeight="900"
//                         fontSize="40"
//                         fill="white"
//                       >
//                         SPOT
//                       </text>
//                       <path
//                         d="M320 45 C340 45, 340 75, 320 75"
//                         fill="none"
//                         stroke="#3b82f6"
//                         strokeWidth="4"
//                       />
//                       <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
//                     </g>
//                   </svg>
//           Employer Dashboard
//         </div>
//         <Menu 
//           theme="dark" 
//           mode="inline" 
//           defaultSelectedKeys={["1"]} 
//           onClick={handleMenuClick}
//           items={[
//             { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
//             { key: "2", icon: <PlusOutlined />, label: "Post a Job" },
//             { key: "3", icon: <FileTextOutlined />, label: "Manage Jobs" },
//             { key: "4", icon: <UserOutlined />, label: "Job Seekers" },
//             { key: "5", icon: <UnlockOutlined />, label: "Public Postings" },
//             { key: "6", icon: <LockOutlined />, label: "Private Postings" },
//           ]}
//         />
//       </Sider>
//       <Layout style={{ width: '1330px', height: '100vh' }}>
//         <Header
//           style={{
//             padding: "0 16px",
//             background: colorBgContainer,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <span style={{ fontSize: "18px", fontWeight: "bold" }}>Welcome, {auth.user ? auth.user.email : "Employer"}!</span>
//           <Button type="primary" onClick={handleLogout}>Logout</Button>
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px 0",
//             overflow: "auto",
//             padding: 24,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             minHeight: "80vh",
//           }}
//         >
//           {selectedComponent}
//         </Content>
//         <Footer style={{ textAlign: "center" }}>
//           HireOnSpot ©{new Date().getFullYear()} - Employer Portal
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default EmployerDashboard;






import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  DashboardOutlined,
  PlusOutlined,
  FileTextOutlined,
  UserOutlined,
  LockOutlined,
  UnlockOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Grid, Drawer } from "antd";
import JobPostingForm from "../EmployerContent/PostJob";
import JobManager from "../EmployerContent/JobManager";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const Dashboard = () => <div><h2>Dashboard Overview</h2><p>This is where you'll manage job postings and track applicants.</p></div>;
// const ManageJobs = () => <div><h2>Manage Jobs</h2><p>View and manage your job listings.</p></div>;
// const JobSeekers = () => <div><h2>Job Seekers</h2><p>Browse and interact with job seekers.</p></div>;
const PublicPostings = () => <div><h2>Public Postings</h2><p>View public job postings.</p></div>;
const PrivatePostings = () => <div><h2>Private Postings</h2><p>Manage private job postings.</p></div>;

const EmployerDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const screens = useBreakpoint();
  const { logout, auth } = useContext(AuthContext);
  
  const [selectedComponent, setSelectedComponent] = useState(<Dashboard />);
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  
  const isMobile = !screens.lg;

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1":
        setSelectedComponent(<Dashboard />);
        break;
      case "2":
        setSelectedComponent(<JobPostingForm />);
        break;
      case "3":
        setSelectedComponent(<JobManager />);
        break;
      // case "4":
      //   setSelectedComponent(<JobSeekers />);
      //   break;
      case "5":
        setSelectedComponent(<PublicPostings />);
        break;
      case "6":
        setSelectedComponent(<PrivatePostings />);
        break;
      default:
        setSelectedComponent(<Dashboard />);
    }
    
    // Close drawer if on mobile
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "2", icon: <PlusOutlined />, label: "Post a Job" },
    { key: "3", icon: <FileTextOutlined />, label: "Manage Jobs" },
    // { key: "4", icon: <UserOutlined />, label: "Job Seekers" },
    { key: "5", icon: <UnlockOutlined />, label: "Public Postings" },
    { key: "6", icon: <LockOutlined />, label: "Private Postings" },
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
      {!collapsed && "Employer Dashboard"}
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
          {/* <span style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: "bold" }}>
            Welcome, {auth.user ? auth.user.email : "Employer"}!
          </span> */}
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
          }}
        >
          {selectedComponent}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          HireOnSpot ©{new Date().getFullYear()} - Employer Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default EmployerDashboard;