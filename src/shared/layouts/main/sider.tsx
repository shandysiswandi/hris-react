import React, { useEffect, useState } from "react";
import {
  BankOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
  DashboardOutlined,
  NodeIndexOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, type MenuProps, type SiderProps } from "antd";
import { Link, useLocation } from "react-router";
import logoDark from "@assets/logo-dark.png";
import { siderLogoStyle, siderStyle } from "./style";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuProps["items"] = [
  getItem(<Link to="/">Dashboard</Link>, "dashboard", <DashboardOutlined />),

  getItem("Features", "features", null, [], "group"),
  getItem("Employee", "employee", <TeamOutlined />, [
    getItem(<Link to="/employee/page-1">Dashboard 1</Link>, "employee-page-1"),
    getItem(<Link to="/employee/page-2">Dashboard 2</Link>, "employee-page-2"),
    getItem(<Link to="/employee/page-3">Dashboard 3</Link>, "employee-page-3"),
  ]),
  getItem("Attentdance", "attentdance", <CheckSquareOutlined />, [
    getItem(<Link to="/attentdance/page-1">Dashboard 1</Link>, "attentdance-page-1"),
    getItem(<Link to="/attentdance/page-2">Dashboard 2</Link>, "attentdance-page-2"),
    getItem(<Link to="/attentdance/page-3">Dashboard 3</Link>, "attentdance-page-3"),
  ]),
  getItem("Leave", "leave", <CloseSquareOutlined />, [
    getItem(<Link to="/leave/page-1">Dashboard 1</Link>, "leave-page-1"),
    getItem(<Link to="/leave/page-2">Dashboard 2</Link>, "leave-page-2"),
    getItem(<Link to="/leave/page-3">Dashboard 3</Link>, "leave-page-3"),
  ]),
  getItem("Claim", "claim", <SolutionOutlined />, [
    getItem(<Link to="/claim/page-1">Dashboard 1</Link>, "claim-page-1"),
    getItem(<Link to="/claim/page-2">Dashboard 2</Link>, "claim-page-2"),
    getItem(<Link to="/claim/page-3">Dashboard 3</Link>, "claim-page-3"),
  ]),

  getItem("Settings", "settings", null, [], "group"),
  getItem("Company", "company", <BankOutlined />, [
    getItem(<Link to="/company/page-1">Dashboard 1</Link>, "company-page-1"),
    getItem(<Link to="/company/page-2">Dashboard 2</Link>, "company-page-2"),
    getItem(<Link to="/company/page-3">Dashboard 3</Link>, "company-page-3"),
  ]),
  getItem("Workflow", "workflow", <NodeIndexOutlined />, [
    getItem(<Link to="/workflow/page-1">Dashboard 1</Link>, "workflow-page-1"),
    getItem(<Link to="/workflow/page-2">Dashboard 2</Link>, "workflow-page-2"),
    getItem(<Link to="/workflow/page-3">Dashboard 3</Link>, "workflow-page-3"),
  ]),
];

const rootSubmenuKeys = ["employee", "attentdance", "leave", "claim", "company", "workflow"];

type SideNavProps = SiderProps;

export const MainSider = ({ ...others }: SideNavProps) => {
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState([""]);
  const [current, setCurrent] = useState("");

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean); // Removes empty parts from path
    if (pathParts.length === 0) {
      setCurrent("dashboard");
      setOpenKeys([]);
      return;
    }
    const [section, page] = pathParts;
    setCurrent(`${section}-${page}`);
    setOpenKeys([section]);
  }, [pathname]);

  return (
    <Layout.Sider
      theme="dark"
      trigger={null}
      collapsible
      breakpoint="lg"
      collapsedWidth="0"
      style={siderStyle}
      {...others}
    >
      <div style={siderLogoStyle}>
        <img src={logoDark} alt="logo" height={45} />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        items={items}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[current]}
        style={{ border: "none" }}
      />
    </Layout.Sider>
  );
};
