import { type CSSProperties } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

function Loading() {
  return (
    <Flex style={style} align="center" justify="center">
      <Spin indicator={antIcon} />
    </Flex>
  );
}

const style: CSSProperties = {
  minHeight: "100vh",
};

export default Loading;
