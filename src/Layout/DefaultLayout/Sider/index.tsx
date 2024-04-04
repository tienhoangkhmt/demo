import { Layout, Menu } from "antd";
import CustomIcons from "../../../Components/CustomUi/Icons";
import { useState } from "react";
const { Sider } = Layout;

const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <CustomIcons name="react" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[]} />
    </Sider>
  )
}

export default SiderLayout;
