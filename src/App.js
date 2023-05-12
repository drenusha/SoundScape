import  {Layout } from "antd";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Nav />
        </Header>
        <Content className="site-layout" style={{ padding: "50px 50px" }}>
          <Cards />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
