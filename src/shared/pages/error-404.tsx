import { FrownOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="error-container">
      <Result
        icon={<FrownOutlined className="error-text-style" />}
        status="404"
        title="Sorry, we couldn't find that page"
        subTitle="Please, make sure you have typed the current URL"
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
