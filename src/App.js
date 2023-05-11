import './App.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
  <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: '1',
              label: 'Home',
            },
            {
              key: '2',
    
              label: 'nav 2',
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '50px 50px' }}>

        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>

    </div>
  );
}

export default App;
