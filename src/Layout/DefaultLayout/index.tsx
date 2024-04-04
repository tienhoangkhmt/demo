import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import CustomIcons from "../../Components/CustomUi/Icons";
import { getItem } from "../../Components/UiDesign/Menu";
import { postLogin } from "../../Features/auth/redux/auth.slice";
import { useAppDispatch } from "../../store";
import TableAntd from "../../Components/UiDesign/TableAntd";
import socket from "../../Config/socket";
type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Footer, Sider } = Layout;


const DefaultLayout:React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
      getItem('Team 1', '6'), getItem('Team 2', '8')
    ]),
    getItem('Files', '9', <FileOutlined />),
  ];

  // const store = useAppSelector(store => store.auth);
  const dispatch = useAppDispatch()
  // socket.connect();
  useEffect(() => {
    dispatch(postLogin())
  }, [dispatch])
socket.connect();
  
  useEffect(() => {
    function onConnect() {
      // setIsConnected(true);
      console.log("log");
    }

    function onDisconnect() {
      console.log("log");
      // setIsConnected(false);
    }

    function onFooEvent() {
      // setFooEvents(previous => [...previous, value]);
      console.log("log");
      
    }

    socket.on("connection", () => {
      console.log("connected to server");
    })
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <CustomIcons name="react" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
          <TableAntd propsTable={{}} url='/api/v1/users' />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;