import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Modal,
  Row,
  Col,
  Image,
  Form,
  Offcanvas,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";

export const Header = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="/">
              <Image style={{ width: "10rem" }} src="edstem.jpg" />
            </Navbar.Brand>
            {values.map((v, idx) => (
              <Button
                variant="primary"
                key={idx}
                className="mb-10 ms-auto m-3"
                onClick={() => handleShow(v)}
              >
                Contact-Us
                {typeof v === "string" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image style={{ width: "10rem" }} src="edstem.jpg" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="text-center flex-grow-1 pe-3"
                  style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/blogs">Blogs</Nav.Link>
                  <Nav.Link href="/blogs">Services</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

          <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <Image style={{ width: "10rem" }} src="edstem.jpg" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              <Row>
                <Col md="4">
                  <Image style={{ width: "20rem" }} src="contact-us.png" />
                </Col>
                <Col md="4">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Company" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md="4">
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="text" placeholder="Phone" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </Navbar>
      ))}
    </>
  );
};
