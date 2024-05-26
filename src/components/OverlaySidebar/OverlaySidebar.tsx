import React from "react";
import { Menu, Layout, Card } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/Theme";
const { Sider } = Layout;

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

interface OverlaySidebarProps {
  collapsed: boolean;
  items: GroupItem[];
  overlay: boolean;
  toggleOverlay: () => void;
  handleMenuItemClick: (
    key: React.Key,
    event: React.MouseEvent<HTMLElement>
  ) => void;
}

const OverlaySidebar: React.FC<OverlaySidebarProps> = ({
  collapsed,
  items,
  overlay,
  toggleOverlay,
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const handleMenuItemClick = (
    key: React.Key,
    event: React.MouseEvent<HTMLElement>
  ) => {
    console.log("Clicked menu item:", key);
    event.preventDefault(); // Prevent the default behavior
    navigate(`/${key}`);
  };

  return (
    <>
      <Sider
        collapsed={collapsed}
        trigger={null}
        width={250}
        breakpoint="md"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,

          transform: overlay ? "translateX(0)" : "translateX(-250px)",
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          zIndex: 1000000000000,
        }}
      >
        <Card
          className="navbarHead flex items-center  min-h-[68px] "
          style={{
            borderRight: `1px solid ${
              theme === "light" ? "#EAEBEC" : "#434343"
            }`,
          }}
        >
          <Link
            className={`logo flex gap-x-3 items-center ${
              collapsed && "hidden"
            }`}
            to={"/home"}
          >
            <img src="/assets/Icon.png" alt="logo" width={28} height={28} />
            <h1 className="text-[1.2rem] font-bold">LOGO</h1>
          </Link>
          <MenuUnfoldOutlined
            onClick={toggleOverlay}
            className="text-xl cursor-pointer md:hidden ml-auto"
          />
        </Card>
        <Menu
          defaultSelectedKeys={["home"]}
          defaultOpenKeys={["MonitorB"]}
          mode="inline"
          theme="light"
          // eslint-disable-next-line
          onClick={({ key, domEvent }) =>
            // eslint-disable-next-line
            handleMenuItemClick(key, domEvent as any)
          }
          style={{
            borderTop: `1px solid ${theme === "light" ? "#EAEBEC" : "#434343"}`,
            paddingTop: "20px",
            paddingBottom: "20px",
            overflowY: "auto",
          }}
        >
          {items.map((group) => (
            <Menu.ItemGroup
              key={group.key}
              title={group.label}
              style={{ color: "#00000080" }}
            >
              {group.children.map((item) => (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  style={{ position: "relative" }}
                  className="MenuItemCustom"
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          ))}
        </Menu>
      </Sider>
      {overlay && <div className="black-overlay" onClick={toggleOverlay}></div>}
    </>
  );
};

export default OverlaySidebar;
