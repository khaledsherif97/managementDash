/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Sider } = Layout;

type Props = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  items: any;
  toggleOverlay: () => void;
  showOverlay: boolean;
};

const Sidebar: React.FC<Props> = ({
  collapsed,
  toggleCollapsed,
  items,
  showOverlay,
}) => {
  const navigate = useNavigate();
  const handleMenuItemClick = (
    key: React.Key,
    event: React.MouseEvent<HTMLElement>
  ) => {
    console.log("Clicked menu item:", key);
    event.preventDefault(); // Prevent the default behavior
    navigate(`/${key}`);
  };

  return (
    <Sider collapsible collapsed={collapsed} width={250} trigger={null}>
      <div className="flex items-center p-3 min-h-[64px] justify-between">
        <Link to={"/home"}>
          {!collapsed && (
            <div className="logo flex gap-x-3 items-center">
              <img src="/assets/Icon.png" alt="logo" width={28} height={28} />
              <h1 className="text-[1.2rem] font-bold">LOGO</h1>
            </div>
          )}
        </Link>
        {!showOverlay ? (
          <MenuUnfoldOutlined
            className={`text-xl flex cursor-pointer ${
              collapsed ? "mx-auto" : "mx-0"
            }`}
            onClick={toggleCollapsed}
          />
        ) : null}
      </div>

      <Menu
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["MonitorB"]}
        mode="inline"
        theme="light"
        onClick={({ key, domEvent }) =>
          handleMenuItemClick(key, domEvent as React.MouseEvent<HTMLElement>)
        }
      >
        {items.map((group: any) => {
          if (group !== null) {
            return (
              <Menu.ItemGroup
                key={group.key}
                title={collapsed ? null : group.label} // Conditionally show/hide title
                style={{ color: "#00000080" }}
              >
                {group.children.map((item: any) => (
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
            );
          }
          return null;
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
