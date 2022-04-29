import React from "react";
import { Card, Container, Row, Col, Image, Carousel } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Container className="text-center  py-5">
        <h1>Edstem Technologies</h1>
        <p>
          Your dream development team with a group of young, highly skilled,
          passionate professionals, specialized in complex application
          development
        </p>
      </Container>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col lg="6" md="12" sm="12" xs="12">
            <Image style={{ width: "30rem" }} src="edstem1.jpg" />
          </Col>
          <Col lg="6" md="12" sm="12" xs="12">
            <Row className=" px-5">
              <Col lg="6" md="6" sm="6" xs="6">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src="home1.png" />
                </Card>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src="home2.png" />
                </Card>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="mt-5">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src="home3.png" />
                </Card>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="mt-5">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src="home4.png" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "3rem" }}>
        <Row style={{ backgroundColor: "#e9f9ff", borderRadius: "50px" }}>
          <Col className="m-5">
            <h2>Transforming Ideas Digitally to Engineered Solutions.</h2>
            <p style={{ textAlign: "justify" }}>
              From consulting, conceptualization to deployment and support – we
              are highly customer oriented company aimed at getting the best
              software done, in the most economical fashion, in the best suited
              cutting edge technology.
            </p>
          </Col>
          <Col className="m-5">
            <Image src="home5.png" />
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          marginTop: "3rem",
          backgroundColor: "#f7f7f7",
          marginBottom: "3rem",
          borderRadius: "50px",
        }}
      >
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <h1>Our Works</h1>
          <p>
            A fleeting glimpse of few of our prided works in action, across
            platforms
          </p>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carosal1.png"
              alt="First slide"
            />
            <div style={{ marginTop: "100px" }}>
              <Carousel.Caption>
                <p>
                  Application for managing and co-ordinating Trustee and Escrow
                  services across verticals
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carosal2.png"
              alt="Second slide"
            />
            <div style={{ marginTop: "100px" }}>
              <Carousel.Caption>
                <p>Membership and accounting solution for Trinity Church</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carosal3.png"
              alt="Third slide"
            />
            <div style={{ marginTop: "100px" }}>
              <Carousel.Caption>
                <p>Admin app for managing Assisted Stay Homes</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};
