// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import {
//   DashboardOutlined,
//   PlusOutlined,
//   FileTextOutlined,
//   UserOutlined,
//   LockOutlined,
//   UnlockOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, theme, Button, Grid, Drawer } from "antd";
// import JobPostingForm from "../EmployerContent/PostJob";
// import JobManager from "../EmployerContent/JobManager";
// import EmployerProfile from "../EmployerContent/EmployerProfile";
// import PublicPostings from "../EmployerContent/PublicPosting";
// import PrivatePostings from "../EmployerContent/PrivatePosting";
// import SVGComponent from "../SvgComponent";
// import JobStatus from "../EmployerContent/JobStatus";

// const { Header, Content, Footer, Sider } = Layout;
// const { useBreakpoint } = Grid;

// const EmployerDashboard = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const screens = useBreakpoint();
//   const { logout } = useContext(AuthContext);

//   const [selectedComponent, setSelectedComponent] = useState(<EmployerProfile />);
//   const [collapsed, setCollapsed] = useState(false);
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   const isMobile = !screens.lg;

//   const handleLogout = () => {
//     logout();
//   };

//   const handleMenuClick = ({ key }) => {
//     switch (key) {
//       case "1":
//         setSelectedComponent(<EmployerProfile />);
//         break;
//       case "2":
//         setSelectedComponent(<JobPostingForm />);
//         break;
//       case "3":
//         setSelectedComponent(<JobManager />);
//         break;
//       case "4":
//         setSelectedComponent(<JobStatus />);
//         break;
//       case "5":
//         setSelectedComponent(<PublicPostings />);
//         break;
//       case "6":
//         setSelectedComponent(<PrivatePostings />);
//         break;
//       default:
//         setSelectedComponent(<EmployerProfile />);
//     }

//     // Close drawer if on mobile
//     if (isMobile) {
//       setDrawerVisible(false);
//     }
//   };

//   const menuItems = [
//     { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
//     { key: "2", icon: <PlusOutlined />, label: "Post a Job" },
//     { key: "3", icon: <FileTextOutlined />, label: "Manage Jobs" },
//     { key: "4", icon: <UserOutlined />, label: "Job Status" },
//     { key: "5", icon: <UnlockOutlined />, label: "Public Postings" },
//     { key: "6", icon: <LockOutlined />, label: "Private Postings" },
//   ];

//   // Updated renderLogo function with responsive sizes
//   const renderLogo = () => {
//     return (
//       <div
//         className="logo"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: isMobile ? "20px" : "16px",
//           fontSize: isMobile ? "18px" : collapsed ? "14px" : "16px",
//           fontWeight: "bold",
//           textAlign: "center",
//           overflow: "hidden",
//         }}
//       >
//         <SVGComponent
//           width={isMobile ? "100" : "120"}
//           height={isMobile ? "80" : "80"}
//           className="my-custom-svg"
//         />
//         {/* Hide the extra text on mobile */}
//         {!collapsed && !isMobile && "Employer Dashboard"}
//       </div>
//     );
//   };

//   // Desktop sidebar
//   const desktopSidebar = (
//     <Sider
//       theme="dark"
//       // collapsible
//       // collapsed={collapsed}
//       // onCollapse={(value) => setCollapsed(value)}
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

//   // Mobile drawer menu (removed title so logo is at the top)
//   const mobileMenu = (
//     <Drawer
//       title={null}
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
//           <Button
//             type="primary"
//             onClick={handleLogout}
//             style={{
//               width: isMobile ? "70px" : "80px",
//               height: isMobile ? "30px" : "35px",
//             }}
//           >
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
//           }}
//         >
//           {selectedComponent}
//         </Content>

//         {/* Footer */}
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
import { Layout, Menu, Button, Grid, Drawer } from "antd";
import JobPostingForm from "../EmployerContent/PostJob";
import JobManager from "../EmployerContent/JobManager";
import EmployerProfile from "../EmployerContent/EmployerProfile";
import PublicPostings from "../EmployerContent/PublicPosting";
import PrivatePostings from "../EmployerContent/PrivatePosting";
import SVGComponent from "../SvgComponent";
import JobStatus from "../EmployerContent/JobStatus";

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const EmployerDashboard = () => {
  const screens = useBreakpoint();
  const { logout } = useContext(AuthContext);

  const [selectedComponent, setSelectedComponent] = useState(<EmployerProfile />);
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = !screens.lg;

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1":
        setSelectedComponent(<EmployerProfile />);
        break;
      case "2":
        setSelectedComponent(<JobPostingForm />);
        break;
      case "3":
        setSelectedComponent(<JobManager />);
        break;
      case "4":
        setSelectedComponent(<JobStatus />);
        break;
      case "5":
        setSelectedComponent(<PublicPostings />);
        break;
      case "6":
        setSelectedComponent(<PrivatePostings />);
        break;
      default:
        setSelectedComponent(<EmployerProfile />);
    }
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "2", icon: <PlusOutlined />, label: "Post a Job" },
    { key: "3", icon: <FileTextOutlined />, label: "Manage Jobs" },
    { key: "4", icon: <UserOutlined />, label: "Job Status" },
    { key: "5", icon: <UnlockOutlined />, label: "Public Postings" },
    { key: "6", icon: <LockOutlined />, label: "Private Postings" },
  ];

  const renderLogo = () => {
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
        {!collapsed && !isMobile && "Employer Dashboard"}
      </div>
    );
  };


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
      breakpoint="lg"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        background: "#000",
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
          background: "#000",
          "--ant-primary-color": "#FF8541",
          transition: "all 0.3s ease",
        }}
      />
      {/* Global style for hover and active states */}
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: #FF8541 !important;
          color: #000 !important;
          transition: background-color 0.3s ease;
        }
        .ant-menu-item:hover:not(.ant-menu-item-selected) {
          color: #FF8541 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </Sider>
  );

  // Mobile drawer menu
  const mobileMenu = (
    <Drawer
      title={null}
      placement="left"
      closable
      onClose={() => setDrawerVisible(false)}
      open={drawerVisible}
      bodyStyle={{ padding: 0, background: "#000" }}
      headerStyle={{ background: "#000", color: "#fff", borderBottom: "1px solid #303030" }}
      closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
      width={250}
    >
      {renderLogo()}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{ background: "#000", "--ant-primary-color": "#FF8541" }}
      />
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: #FF8541 !important;
          color: #000 !important;
          transition: background-color 0.3s ease;
        }
        .ant-menu-item:hover:not(.ant-menu-item-selected) {
          color: #FF8541 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </Drawer>
  );

  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      {!isMobile && desktopSidebar}
      {isMobile && mobileMenu}
      <Layout style={{ width: screens.lg ? "81vw" : "100%" }}>
        {/* Header */}
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            color: "#000",
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
                        style={{ marginRight: 1, 
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
              transition: "background 0.3s ease",
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
            background: "#fff",
            borderRadius: "8px",
            minHeight: "80vh",
          }}
        >
          {selectedComponent}
        </Content>
        {/* Footer */}
        <Footer style={{ textAlign: "center", background: "#000", color: "#fff" }}>
          HireOnSpot ©{new Date().getFullYear()} - Employer Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default EmployerDashboard;
