import {Card, Col, Row } from "antd";
import './../assetss/style/Card.css';
import futureK from './../assetss/images/futureK.png';
import futureW from './../assetss/images/futurew.jpeg';
import milkshake from './../assetss/images/milkshake.jpg';
import ministryofpride from './../assetss/images/ministryofpride.jpg';


const { Meta } = Card;

const Cards = () => {
  return (
    <div>
      <div>
        <Row gutter={30} justify="space-around" align="middle">
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src={milkshake}
                />
              }
            >
              <Meta
                title="Milkshake"
                description="Tue 16 May 2023 10:30pm — 4am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src={futureK}
                />
              }
            >
              <Meta
                title="FUTURE presents Kayzo"
                description="Fri 02 Jun 2023 10pm — 5am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src={futureW}
                />
              }
            >
              <Meta
                title="FUTURE presents Will Sparks"
                description="Fri 07 Jul 2023 10pm — 5am"
              />
            </Card>
          </Col>
          <Col span={6} xs={12} sm={8} md={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src={ministryofpride}
                />
              }
            >
              <Meta
                title="Ministry of Pride"
                description="Sat 01 Jul 2023 10pm — 6am"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Cards;
