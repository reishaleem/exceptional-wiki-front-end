import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import { Redirect, Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../../../Sidebar.css";
import Forest from "../../../images/floating-forest.jpg";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import AppNavbar from "../../atoms/Navbar/AppNavbar";
import { Button, Form, FormControl } from "react-bootstrap";
import UniverseSidebar from "../../atoms/Sidebar/UniverseSidebar";

export default () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }

  const { universeId } = useParams();
  // const [content, setContent] = useState("");

  return (
    <>
      <Container fluid style={{ paddingLeft: "0px" }}>
        <AppNavbar />
        <Row>
          <Col md={2}>
            <UniverseSidebar />
          </Col>
          <Col md={10} className="app-page-main-content">
            <Container style={{ maxWidth: "1185px" }}>
              <Row style={{ paddingBottom: "15px" }}>
                <Col md={3}>
                  <Link to={"/app/universes/new"}>
                    <Button variant="primary" size="lg" block className="mb-4">
                      Create Universe
                    </Button>
                  </Link>
                  <Form>
                    <Form.Group controlId="universeSearch">
                      <FormControl type="text" placeholder="Search" />
                    </Form.Group>
                  </Form>
                  <Form>
                    <Form.Group controlId="universeSort">
                      <Form.Label>Sort By</Form.Label>
                      <Form.Control as="select" custom>
                        <option>Most recent</option>
                        <option>Name (A-Z)</option>
                        <option>Name (Z-A)</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={9}>
                  <h1>{universeId}</h1>
                  <Card>
                    <Card.Header as="h5">Universe Name</Card.Header>
                    <Card.Body>
                      <Card.Title>Description</Card.Title>
                      <Card.Text>Universe description</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                      Created - Aug 24, 2020 - Updated 9:53pm Aug 25, 2020
                      <div className="spacer"></div>
                      <Link to={"/app/universes/Unnamed"} className="pr-3">
                        <FontAwesomeIcon
                          icon="pen"
                          className="pr-1"
                          size="lg"
                        ></FontAwesomeIcon>
                      </Link>
                      <Link to={"#delete"}>
                        <FontAwesomeIcon
                          icon="trash-alt"
                          size="lg"
                        ></FontAwesomeIcon>
                      </Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
