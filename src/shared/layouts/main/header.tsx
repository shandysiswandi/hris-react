import { type SetStateAction } from "react";
import {
  AppstoreOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Dropdown, Flex, Layout, type MenuProps, Tooltip, theme } from "antd";
import { useNavigate } from "react-router";
import userImg from "@assets/user.png";
import { useAuthStore } from "@stores/auth-store";
import { headerStyle } from "./style";

type HeaderNavProps = {
  collapsed: boolean;
  setCollapsed: (value: SetStateAction<boolean>) => void;
  navFill?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const MainHeader = ({ collapsed, setCollapsed, ...others }: HeaderNavProps) => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const items: MenuProps["items"] = [
    {
      key: "user-profile",
      label: "Profile",
      icon: <UserOutlined />,
      onClick: () => {
        navigate("/user/profile");
      },
    },
    {
      key: "user-settings",
      label: "Settings",
      icon: <SettingOutlined />,
      onClick: () => {
        navigate("/user/setting");
      },
    },
    {
      type: "divider",
    },
    {
      key: "user-logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        logout();
        navigate("/", { replace: true });
      },
    },
  ];

  return (
    <>

      <Layout.Header style={headerStyle(collapsed)} {...others}>
        <Flex align="center">
          <Tooltip title={`${collapsed ? "Expand" : "Collapse"} Sidebar`}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Tooltip>
        </Flex>

        <Flex align="center" gap="small">
          <Tooltip title="Apps">
            <Button icon={<AppstoreOutlined />} type="text" size="large" />
          </Tooltip>

          <Tooltip title="Messages">
            <Button icon={<MessageOutlined />} type="text" size="large" />
          </Tooltip>

          <Divider type="vertical" style={{ height: "3em" }} />

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Flex>
              <img
                src={userImg}
                alt="user profile"
                height={36}
                width={36}
                style={{ borderRadius: token.borderRadius, objectFit: "cover" }}
              />
            </Flex>
          </Dropdown>
        </Flex>
      </Layout.Header>
    </>
  );
};
