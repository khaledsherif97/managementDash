import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import {
  DashboardOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
  BulbOutlined,
  TagOutlined,
  StarOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  WalletOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import OverlaySidebar from "../OverlaySidebar/OverlaySidebar";
const { Content } = Layout;

interface MenuItem {
  key: React.Key;
  icon: React.ReactNode;
  label: React.ReactNode;
}
interface GroupItem {
  key: React.Key;
  label: React.ReactNode;
  children: MenuItem[];
}
const items: GroupItem[] = [
  {
    key: "MonitorB",
    label: "Monitor Your Business",
    children: [
      {
        key: "home",
        label: "Dashboard",
        icon: <DashboardOutlined />,
      },
      {
        key: "performance-board",
        label: "Performance Board",
        icon: <LineChartOutlined />,
      },
      {
        key: "financial-reports",
        label: "Financial Reports",
        icon: <MoneyCollectOutlined />,
      },
      {
        key: "periodic-reports",
        label: "Periodic Reports",
        icon: <CalendarOutlined />,
      },
      { key: "orders", label: "Orders", icon: <ShoppingCartOutlined /> },
    ],
  },
  {
    key: "GrowB",
    label: "Grow Your Business",
    children: [
      { key: "advertising", label: "Advertising", icon: <BulbOutlined /> },
      { key: "discount", label: "Discount", icon: <TagOutlined /> },
      { key: "reviews", label: "Reviews", icon: <StarOutlined /> },
    ],
  },
  {
    key: "ManageB",
    label: "Manage Your Business",
    children: [
      {
        key: "listing-management",
        label: "Listing Management",
        icon: <UnorderedListOutlined />,
      },
      {
        key: "users-management",
        label: "Users Management",
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "wallet-management",
        label: "Wallet Management",
        icon: <WalletOutlined />,
      },
      {
        key: "knowledge-center",
        label: "Knowledge Center",
        icon: <BookOutlined />,
      },
      { key: "settings", label: "Settings", icon: <SettingOutlined /> },
      // {key:'vendor-info', label: 'Vendor Info', icon: <FileOutlined />,children: [{key:'property-details', label: 'Property Details'},{key:'property-photos', label: 'Property Photos'},{key:'facilities', label: 'Facilities'},{key:'awards', label: 'Awards'},{key:'attractions', label: 'Attractions'},{key:'restaurant-details', label: 'Restaurant Details'}] }
    ],
  },
];

const DashboardLayout: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSider, setShowSider] = useState(true);
  const [isScreenXxs, setIsScreenXxs] = useState(window.innerWidth < 350);
  const [isScreenXs, setIsScreenXs] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsScreenXxs(window.innerWidth < 350 ? true : false);
      setIsScreenXs(window.innerWidth < 768 ? true : false);
      setShowSider(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showOverlay, showSider]);

  // eslint-disable-next-line
  const toggleOverlay = (state: any) => {
    setShowOverlay(state);
    setShowSider(false);
  };

  return (
    <Layout style={{ height: "100vh", display: "flex" }}>
      <div className="overlay-sidebar">
        <OverlaySidebar
          collapsed={false}
          toggleOverlay={() => toggleOverlay(false)}
          overlay={showOverlay}
          items={items}
          handleMenuItemClick={(
            key: React.Key,
            event: React.MouseEvent<HTMLElement, MouseEvent>
          ) => {
            console.log("Clicked menu item:", key);
            event.preventDefault(); // Prevent the default behavior
            // Handle menu item click
          }}
        />
      </div>

      {showSider && (
        <Sidebar
          collapsed={collapsed}
          toggleCollapsed={() => setCollapsed(!collapsed)}
          items={items}
          toggleOverlay={() => toggleOverlay(!showOverlay)}
          showOverlay={showOverlay}
        />
      )}

      <Layout className={`overflow-y-auto`}>
        <TopBar
          routeName={title}
          notifications={0}
          language={"English"}
          onLanguageChange={(lang) => console.log(lang)}
          toggleOverlay={() => toggleOverlay(!showOverlay)}
          overlay={!showSider}
        />
        <Content
          className={`px-3 sm:px-5  ${
            isScreenXxs ? "pt-[140px]" : isScreenXs && "pt-[80px]"
          } `}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
