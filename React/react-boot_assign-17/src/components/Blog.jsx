import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

export const Blog = () => {
  return (
    <div>
      <Container className="text-center p-5">
        <h1>Blogs</h1>
      </Container>
      <Container className="mb-5 mt-3">
        <Row>
          <Col lg="3" md="4" sm="6" xs="12">
            <Card
              style={{ borderRadius: "20px", backgroundColor: "#f7f7f7" }}
              className="mt-5"
            >
              <Card.Img variant="top" src="blog.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12">
            <Card
              style={{ borderRadius: "20px", backgroundColor: "#f7f7f7" }}
              className="mt-5"
            >
              <Card.Img variant="top" src="blog1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12">
            <Card
              style={{ borderRadius: "20px", backgroundColor: "#f7f7f7" }}
              className="mt-5"
            >
              <Card.Img variant="top" src="blog2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12">
            <Card
              style={{ borderRadius: "20px", backgroundColor: "#f7f7f7" }}
              className="mt-5"
            >
              <Card.Img variant="top" src="blog.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
