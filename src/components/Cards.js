import { theme, Card, Col, Row, Button } from "antd";

const { Meta } = Card;

const Cards = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        <Row gutter={30} justify="space-around" align="middle">
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              hoverable
              //   style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[<Button key="setting" type="link">Button</Button>]}
            >
              <Meta
                title="Milkshake"
                description="Tue 16 May 2023 10:30pm — 4am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              hoverable
              //   style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[<Button key="setting" type="link">Button</Button>]}
            >
              <Meta
                title="FUTURE x We Rave You Pres. Fedde Le Grand"
                description="Fri 12 May 2023 10pm — 5am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              hoverable
              //   style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[<Button key="setting" type="link">Button</Button>]}
            >
              <Meta
                title="FUTURE X SELECT presents Ibiza Send Off"
                description="Sat 13 May 2023 10pm — 6am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              hoverable
              //   style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[<Button key="setting" type="link">Button</Button>]}
            >
              <Meta
                title="Foreverland presents Trippy City"
                description="Sat 27 May 2023 10pm — 6am"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Cards;
