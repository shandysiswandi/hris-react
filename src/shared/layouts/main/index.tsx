import { useState } from "react";
import { Layout, Typography, theme } from "antd";
import { Outlet } from "react-router";
import { MainHeader } from "./header";
import { MainSider } from "./sider";
import { footerStyle, parantLayoutStyle } from "./style";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { borderRadius },
  } = theme.useToken();

  return (
    <Layout style={parantLayoutStyle}>
      <MainSider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} />

      <Layout>
        <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        <Layout.Content
          style={{
            margin: `0 0 0 ${collapsed ? 0 : "200px"}`,
            // background: '#ebedf0',
            borderRadius: collapsed ? 0 : borderRadius,
            transition: "all .25s",
            padding: "24px",
          }}
        >
          <Outlet />
        </Layout.Content>

        <Layout.Footer style={footerStyle(collapsed)}>
          <Typography.Text type="secondary">
            © {new Date().getFullYear()} HRIS - Human Resources Information System. All rights reserved.
          </Typography.Text>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
