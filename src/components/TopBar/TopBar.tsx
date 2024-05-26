import React, { useLayoutEffect, useState } from "react";
import {
  BellOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Popover,
  Menu,
  Dropdown,
  Select,
  Switch,
  Typography,
  Card,
} from "antd";
import NotificationComponent from "../Notification/Notification";
import { useTheme } from "../../contexts/Theme";

const { Option } = Select;
const { Text } = Typography;
interface TopBarProps {
  routeName: string;
  notifications: number;
  language: string;
  onLanguageChange: (lang: string) => void;
  toggleOverlay: () => void;
  overlay: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  routeName,
  notifications,
  language,
  onLanguageChange,
  toggleOverlay,
  overlay,
}) => {
  const [visible, setVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isCompact, setIsCompact] = useState(window.innerWidth < 350);

  useLayoutEffect(() => {
    function handleResize() {
      setIsCompact(window.innerWidth < 350);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profileMenu = (
    <Menu>
      <Menu.Item key="vendor-profile" icon={<UserOutlined />}>
        <a href="/vendor-profile">Vendor Profile</a>
      </Menu.Item>
      <Menu.Item key="vendor-details" icon={<UserOutlined />}>
        <a href="/vendor-details">Vendor Details</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="sign-out" danger icon={<LogoutOutlined />}>
        <a href="/signout">Sign Out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      className={`topbar ant-top-barw-full ${
        isCompact ? "flex-col" : "flex justify-between"
      } items-center ${overlay && "fixed"} z-index-3`}
      style={{
        top: 0, // Align to the top
        left: 0, // Align to the left
        right: 0, // Align to the right
        zIndex: 1050, // Ensure it's above most other components
        width: "100%", // Ensure it spans the full width of the viewport
      }}
    >
      {isCompact ? (
        <>
          <div className="flex justify-between items-center w-full">
            {overlay && (
              <MenuUnfoldOutlined
                onClick={toggleOverlay}
                className="text-xl cursor-pointer"
              />
            )}
            <Select
              className="custom-language-select"
              value={language}
              onChange={onLanguageChange}
              style={{ maxWidth: 200 }}
            >
              <Option value="en">English</Option>
              <Option value="fr">French</Option>
              <Option value="es">Spanish</Option>
            </Select>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Text className="text-lg font-semibold mt-3">{routeName}</Text>
            <div className="flex items-center gap-4 mt-3">
              <NotificationAndUserControls />
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center w-full">
          {overlay && (
            <MenuUnfoldOutlined
              onClick={toggleOverlay}
              className="text-xl  cursor-pointer"
            />
          )}
          <Text className={`font-semibold ${overlay && "hidden"}`}>
            {routeName}
          </Text>
          <div className="flex items-center gap-6">
            <Select
              className="custom-language-select"
              value={language}
              onChange={onLanguageChange}
              style={{ width: 120 }}
            >
              <Option value="en">English</Option>
              <Option value="fr">French</Option>
              <Option value="es">Spanish</Option>
            </Select>
            <NotificationAndUserControls />
          </div>
        </div>
      )}
    </Card>
  );

  function NotificationAndUserControls() {
    return (
      <>
        <Popover
          content={
            <div className="px-4 py-2">
              <NotificationComponent />
            </div>
          }
          title="Notifications"
          trigger="click"
          visible={visible}
          onVisibleChange={setVisible}
        >
          <Badge count={notifications} className="cursor-pointer">
            <BellOutlined className="text-xl" />
          </Badge>
        </Popover>
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <UserOutlined className="text-xl cursor-pointer" />
        </Dropdown>
        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </>
    );
  }
};

export default TopBar;
