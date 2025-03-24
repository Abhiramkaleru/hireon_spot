// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import {
//   DashboardOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   SettingOutlined,
//   UsergroupAddOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Button, Layout, Menu, theme } from 'antd';

// import DashboardContent from '../AdminContent/DashboardContent';
// import UsersContent from '../AdminContent/UsersContent';
// import SettingsContent from '../AdminContent/SettingsContent';
// import AddEmployerContent from '../AdminContent/AddEmployerContent';

// const { Header, Sider, Content } = Layout;

// const AdminDashboard = () => {
//   const { logout, auth } = useContext(AuthContext);
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedKey, setSelectedKey] = useState('dashboard');
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const handleLogout = () => {
//     logout();
//   };

//   const renderContent = () => {
//     switch (selectedKey) {
//       case 'dashboard':
//         return <DashboardContent />;
//       case 'users':
//         return <UsersContent />;
//       case 'settings':
//         return <SettingsContent />;
//       case 'add-employer':
//         return <AddEmployerContent />;
//       default:
//         return <DashboardContent />;
//     }
//   };

//   return (
//     <Layout>
//       {/* Sidebar */}
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div
//           className="demo-logo-vertical"
//           style={{
//             color: "white",
//             padding: "16px",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textAlign: "center",
//           }}
//         >
//           <svg
//             width="150"
//             height="50"
//             viewBox="0 0 400 100"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g>
//               <text
//                 x="50"
//                 y="70"
//                 fontFamily="Arial"
//                 fontWeight="900"
//                 fontSize="40"
//                 fill="white"
//               >
//                 HIRE
//               </text>
//               <circle cx="200" cy="60" r="30" fill="blue" />
//               <text
//                 x="180"
//                 y="73"
//                 fontFamily="Arial"
//                 fontWeight="900"
//                 fontSize="40"
//                 fill="white"
//               >
//                 ON
//               </text>
//               <text
//                 x="250"
//                 y="70"
//                 fontFamily="Arial"
//                 fontWeight="900"
//                 fontSize="40"
//                 fill="white"
//               >
//                 SPOT
//               </text>
//               <path
//                 d="M320 45 C340 45, 340 75, 320 75"
//                 fill="none"
//                 stroke="#3b82f6"
//                 strokeWidth="4"
//               />
//               <path d="M315 70 L325 75 L315 80" fill="#3b82f6" />
//             </g>
//           </svg>
//           Admin Dashboard
//         </div>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['dashboard']}
//           onClick={({ key }) => setSelectedKey(key)}
//           items={[
//             {
//               key: 'dashboard',
//               icon: <DashboardOutlined />,
//               label: 'Dashboard',
//             },
//             {
//               key: 'users',
//               icon: <UserOutlined />,
//               label: 'Users',
//             },
//             {
//               key: 'settings',
//               icon: <SettingOutlined />,
//               label: 'Settings',
//             },
//             {
//               key: 'add-employer',
//               icon: <UsergroupAddOutlined />,
//               label: 'Add Employer',
//             },
//           ]}
//         />
//       </Sider>

//       {/* Main Content */}
//       <Layout style={{ width: '1330px', height: '100vh' }}>
//         {/* Header */}
//         <Header
//           style={{
//             padding: '0 16px',
//             background: colorBgContainer,
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           {/* Collapse Button */}
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{ fontSize: '16px', width: 64, height: 64 }}
//           />
          
//           {/* User Info + Logout */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             <span style={{ fontSize: '16px', fontWeight: '500' }}>
//               {auth.user ? `Welcome, ${auth.user.email}` : 'Welcome, Admin'}
//             </span>
//             <Button type="primary" onClick={handleLogout}>
//               Logout
//             </Button>
//           </div>
//         </Header>

//         {/* Content */}
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             width: 1280,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <h2>Admin Dashboard</h2>
//           <div style={{ marginTop: '20px' }}>{renderContent()}</div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AdminDashboard;



import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  CloseOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Drawer, Grid } from 'antd';

import DashboardContent from '../AdminContent/DashboardContent';
import UsersContent from '../AdminContent/UsersContent';
import SettingsContent from '../AdminContent/SettingsContent';
import AddEmployerContent from '../AdminContent/AddEmployerContent';

const { Header, Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const AdminDashboard = () => {
  const { logout, auth } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const [drawerVisible, setDrawerVisible] = useState(false);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const screens = useBreakpoint(); // Use Ant Design's breakpoint system
  const isMobile = !screens.lg; // Automatically detects if the screen is mobile based on breakpoints

  const handleLogout = () => {
    logout();
  };

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  const renderContent = () => {
    switch (selectedKey) {
      case 'dashboard':
        return <DashboardContent />;
      case 'users':
        return <UsersContent />;
      case 'settings':
        return <SettingsContent />;
      case 'add-employer':
        return <AddEmployerContent />;
      default:
        return <DashboardContent />;
    }
  };

  const renderLogo = () => (
    <div
      className="demo-logo-vertical"
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
      {!collapsed && "AdminDashboard"}
    </div>
  );

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Users',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'add-employer',
      icon: <UsergroupAddOutlined />,
      label: 'Add Employer',
    },
  ];

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
        defaultSelectedKeys={['dashboard']}
        selectedKeys={[selectedKey]}
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
        defaultSelectedKeys={['dashboard']}
        selectedKeys={[selectedKey]}
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
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          {isMobile ? (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{ marginRight: 1 }}
            />
          ) : (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 64, height: 64 }}
            />
          )}
          
          {/* User Info + Logout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* <span style={{ fontSize: isMobile ? "12px" : "16px", fontWeight: "500" }}>
              {auth.user ? `Welcome, ${auth.user.email}` : 'Welcome, Admin'}
            </span> */}
            <Button 
              type="primary" 
              onClick={handleLogout} 
              style={{ width: isMobile ? "70px" : "80px", height: isMobile ? "30px" : "35px" }}
            >
              Logout
            </Button>
          </div>
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
          {/* <h2>Admin Dashboard</h2> */}
          <div style={{ marginTop: '20px' }}>{renderContent()}</div>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          HireOnSpot ©{new Date().getFullYear()} - Admin Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
