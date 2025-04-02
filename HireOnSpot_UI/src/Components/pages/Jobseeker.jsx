
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import {
//   DashboardOutlined,
//   EyeOutlined,
//   HeartOutlined,
//   UserOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, theme, Button, Drawer, Grid } from "antd";
// import ViewJobs from "../JobseekerContent/ViewJobs";
// import DashBoardOverview from "../JobseekerContent/DashBoardOverview";
// import InterestedJobs from "../JobseekerContent/IntrestedJobs";
// import JobSeekerProfile from "../JobseekerContent/MyProfile";

// const { Header, Content, Footer, Sider } = Layout;
// const { useBreakpoint } = Grid;

// const JobseekerDashboard = () => (
//   <div>
//     <h2>Dashboard Overview</h2>
//     <p>View job listings and manage your profile.</p>
//   </div>
// );

// const JobSeekerDashboard = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const screens = useBreakpoint(); // ✅ Use Ant Design's breakpoint system
//   const { logout, auth } = useContext(AuthContext);

//   const [selectedComponent, setSelectedComponent] = useState(
//     <DashBoardOverview />
//   );
//   const [collapsed, setCollapsed] = useState(false);
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   const isMobile = !screens.lg; // ✅ Automatically detects if the screen is mobile based on breakpoints

//   const handleLogout = () => {
//     logout();
//   };

//   const handleMenuClick = ({ key }) => {
//     switch (key) {
//       case "1":
//         setSelectedComponent(<DashBoardOverview />);
//         break;
//       case "2":
//         setSelectedComponent(<ViewJobs />);
//         break;
//       case "3":
//         setSelectedComponent(<InterestedJobs />);
//         break;
//       case "4":
//         setSelectedComponent(<JobSeekerProfile />);
//         break;
//       default:
//         setSelectedComponent(<JobseekerDashboard />);
//     }

//     if (isMobile) {
//       setDrawerVisible(false);
//     }
//   };

//   const menuItems = [
//     { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
//     { key: "2", icon: <EyeOutlined />, label: "View Jobs" },
//     { key: "3", icon: <HeartOutlined />, label: "Saved Jobs" },
//     { key: "4", icon: <UserOutlined />, label: "Profile" },
//   ];

//   const renderLogo = () => (
//     <div
//       className="logo"
//       style={{
//         color: "white",
//         padding: "16px",
//         fontSize: collapsed ? "14px" : "16px",
//         fontWeight: "bold",
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       <svg
//         width={collapsed ? "80" : "150"}
//         height="50"
//         viewBox="0 0 400 100"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g>
//           <text
//             x="50"
//             y="70"
//             fontFamily="Arial"
//             fontWeight="900"
//             fontSize="40"
//             fill="white"
//           >
//             HIRE
//           </text>
//           <circle cx="200" cy="60" r="30" fill="blue" />
//           <text
//             x="180"
//             y="73"
//             fontFamily="Arial"
//             fontWeight="900"
//             fontSize="40"
//             fill="white"
//           >
//             ON
//           </text>
//           <text
//             x="250"
//             y="70"
//             fontFamily="Arial"
//             fontWeight="900"
//             fontSize="40"
//             fill="white"
//           >
//             SPOT
//           </text>
//           <path
//             d="M320 45 C340 45, 340 75, 320 75"
//             fill="none"
//             stroke="#3b82f6"
//             strokeWidth="4"
//           />
//           <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
//         </g>
//       </svg>
//       {!collapsed && "JobSeeker Dashboard"}
//     </div>
//   );

//   // Desktop sidebar
//   const desktopSidebar = (
//     <Sider
//       theme="dark"
//       collapsible
//       collapsed={collapsed}
//       onCollapse={(value) => setCollapsed(value)}
//       breakpoint="lg"
//       style={{
//         overflow: "auto",
//         height: "100vh",
//         position: "sticky",
//         top: 0,
//         scrollbarWidth: "thin",
//         scrollbarGutter: "stable",
//       }}
//     >
//       {renderLogo()}
//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         onClick={handleMenuClick}
//         items={menuItems}
//       />
//     </Sider>
//   );

//   // Mobile drawer menu
//   const mobileMenu = (
//     <Drawer
//       title="Menu"
//       placement="left"
//       closable
//       onClose={() => setDrawerVisible(false)}
//       open={drawerVisible}
//       bodyStyle={{ padding: 0, background: "#001529" }}
//       headerStyle={{
//         background: "#001529",
//         color: "white",
//         borderBottom: "1px solid #303030",
//       }}
//       closeIcon={<CloseOutlined style={{ color: "white" }} />}
//       width={250}
//     >
//       {renderLogo()}
//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         onClick={handleMenuClick}
//         items={menuItems}
//       />
//     </Drawer>
//   );

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       {!isMobile && desktopSidebar}
//       {isMobile && mobileMenu}

//       <Layout style={{ width: screens.lg ? "81vw" : "100%" }}>
//         {/* Header */}
//         <Header
//           style={{
//             padding: "0 16px",
//             background: colorBgContainer,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             position: "sticky",
//             top: 0,
//             zIndex: 1,
//           }}
//         >
//           {isMobile && (
//             <Button
//               type="text"
//               icon={<MenuOutlined />}
//               onClick={() => setDrawerVisible(true)}
//               style={{ marginRight: 1 }}
//             />
//           )}
//           {/* <span style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: "bold" }}>
//             Welcome, {auth.user ? auth.user.email : "Job Seeker"}!
//           </span> */}
//           <Button type="primary" onClick={handleLogout} style={{ width: isMobile ? "70px" : "80px", height: isMobile ? "30px" : "35px" }}>
//             Logout
//           </Button>
//         </Header>

//         {/* Content */}
//         <Content
//           style={{
//             margin: isMobile ? "16px 8px 0" : "24px 16px 0",
//             overflow: "auto",
//             padding: isMobile ? 16 : 24,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             minHeight: "80vh",
//             minWidth:"100%"
//           }}
//         >
//           {selectedComponent}
//         </Content>

//         {/* Footer */}
//         <Footer style={{ textAlign: "center" }}>
//           HireOnSpot ©{new Date().getFullYear()} - Job Seeker Portal
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default JobSeekerDashboard;





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
import InterestedJobs from "../JobseekerContent/IntrestedJobs";
import JobSeekerProfile from "../JobseekerContent/MyProfile";
import SVGComponent from "../SvgComponent";
import UpdateApplicationStatus from "../JobseekerContent/AppledJobsAndUpdate";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const JobseekerDashboard = () => (
  <div>
    <h2>Dashboard Overview</h2>
    <p>View job listings and manage your profile.</p>
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
        setSelectedComponent(<JobSeekerProfile />);
        break;
      case "5":
        setSelectedComponent(<UpdateApplicationStatus/>);
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
    { key: "3", icon: <HeartOutlined />, label: "Saved Jobs" },
    { key: "5", icon: <UserOutlined />, label: "Update Status" },
    { key: "4", icon: <UserOutlined />, label: "Profile" },
  ];

  const renderLogo = () => {
    // Determine if mobile using the breakpoint info
    const isMobile = !screens.lg;
    return (
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isMobile ? "20px" : "16px",
          fontSize: isMobile ? "18px" : collapsed ? "14px" : "16px",
          fontWeight: "bold",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <SVGComponent
          width={isMobile ? "100" : "120"}
          height={isMobile ? "80" : "80"}
          className="my-custom-svg"
        />
        {/* On mobile, you might not need the extra text */}
        {!collapsed && !isMobile && "JobSeeker Dashboard"}
      </div>
    );
  };


  // Custom theme for menu to use #FF8541 as the active item background
  const menuTheme = {
    components: {
      Menu: {
        colorItemBgSelected: '#FF8541',
        colorItemTextSelected: 'white',
        colorItemTextHover: '#FF8541',
        colorItemBgHover: 'rgb(255, 89, 0)',
      },
    },
  };

  // Desktop sidebar
  const desktopSidebar = (
    <Sider
      theme="dark"
      // collapsible
      // collapsed={collapsed}
      // onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
        background: "black"
      }}
    >
      {renderLogo()}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{
          background: "black",
          // Add custom CSS for selected items
          // This is a fallback if the theme token approach doesn't work
          "--ant-primary-color": "#FF8541",
        }}
      />
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: #FF8541 !important;
        }
        .ant-menu-item:hover:not(.ant-menu-item-selected) {
          color: #FF8541 !important;
        }
      `}</style>
    </Sider>
  );
  const mobileMenu = (
    <Drawer
      // Remove the default title so that the logo (from renderLogo) is at the top
      title={null}
      placement="left"
      closable
      onClose={() => setDrawerVisible(false)}
      open={drawerVisible}
      bodyStyle={{ padding: 0, background: "black" }}
      headerStyle={{
        background: "black",
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
        style={{
          background: "black",
          "--ant-primary-color": "#FF8541",
        }}
      />
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: #FF8541 !important;
        }
        .ant-menu-item:hover:not(.ant-menu-item-selected) {
          color: #FF8541 !important;
        }
      `}</style>
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
              style={{
                marginRight: 1,
              }}
            />
          )}
          <Button
            type="primary"
            onClick={handleLogout}
            style={{
              width: isMobile ? "70px" : "80px",
              height: isMobile ? "30px" : "35px",
              // background: "#FF8541",
              borderColor: "#FF8541",
              borderColor: "#FF8541",
              background: "linear-gradient(90deg, #ff8541 0%,rgb(0, 0, 0) 100%)",
              border: "none",
              color: "white",
            }}
          >
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
            minWidth: "100%"
          }}
        >
          {selectedComponent}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center", background: "black", color: "white" }}>
          HireOnSpot ©{new Date().getFullYear()} - Job Seeker Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default JobSeekerDashboard;