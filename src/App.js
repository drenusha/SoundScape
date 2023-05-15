import  {Layout } from "antd";
import './assetss/style/App.css';
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo"/>
          <Nav />
        </Header>
        <Content className="site-layout">
          <Cards />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2023 Created by Drenusha
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
