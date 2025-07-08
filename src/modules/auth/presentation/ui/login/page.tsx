import { useState } from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleCircleFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router";
import logo from "@assets/logo.png";
import { useAuthStore } from "@stores/auth-store";
import { rule } from "./rule";
import "./style.css";

export default function LoginPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const onFinish = async (_: FormData) => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000)); // simulate login api

    try {
      login();
      messageApi.success("Login successful!");
      navigate("/", { replace: true });
    } catch (err) {
      messageApi.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    message.warning("Google login not implemented yet");
  };

  return (
    <>
      {contextHolder}

      <div className="container">
        <div className="content">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="card">
            <Typography.Title level={3} className="title">
              Welcome Back!
            </Typography.Title>

            <p className="subtitle">You can log in to access with your existing account.</p>

            <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
              <Form.Item name="username" label="Username" rules={rule.username}>
                <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
              </Form.Item>

              <Form.Item name="password" label="Password" rules={rule.password}>
                <Input.Password
                  prefix={<LockOutlined />}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="full-width"
                  shape="round"
                  loading={loading}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>

            <Divider plain>OR</Divider>

            <Button
              danger
              type="default"
              icon={<GoogleCircleFilled />}
              className="google-button"
              size="large"
              shape="round"
              onClick={handleGoogleLogin}
            >
              Log in with Google
            </Button>
          </div>
        </div>

        <footer className="footer">
          <Typography.Text type="secondary">
            © {new Date().getFullYear()} HRIS - Human Resources Information System. All rights reserved.
          </Typography.Text>
        </footer>
      </div>
    </>
  );
}
