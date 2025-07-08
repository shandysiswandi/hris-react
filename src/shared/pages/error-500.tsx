import { FrownOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link } from "react-router";
import "./error-style.css";

export const InternalErrorPage = () => {
  return (
    <div className="error-container">
      <Result
        icon={<FrownOutlined className="error-text-style" />}
        status="500"
        title="Oops, something went wrong"
        subTitle="We apologize for the incovenience. Please try again later."
        extra={
          <Link to="/">
            <Button type="primary" size="large" shape="round">
              Go Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};
