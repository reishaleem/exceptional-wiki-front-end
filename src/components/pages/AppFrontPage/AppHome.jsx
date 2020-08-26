import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import { Redirect, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import NavItem from "react-bootstrap/NavItem";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../../../Sidebar.css";
import Forest from "../../../images/floating-forest.jpg";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppNavbar from "../../atoms/Navbar/AppNavbar";
import { Button, ButtonGroup } from "react-bootstrap";

export default () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }
  // const [content, setContent] = useState("");

  return (
    <>
      <Container fluid style={{ paddingLeft: "0px" }}>
        <AppNavbar />
        <Row>
          <Col md={2}>
            <Sidebar>
              <ListGroup.Item as={Link} to={"/app/universes"} action>
                <FontAwesomeIcon
                  icon="globe"
                  className="pr-1"
                  size="lg"
                ></FontAwesomeIcon>
                Universes
              </ListGroup.Item>
              <ListGroup.Item as={Link} to={"/app/wikis"} action>
                <FontAwesomeIcon
                  icon="book"
                  className="pr-1"
                  size="lg"
                ></FontAwesomeIcon>
                Wikis
              </ListGroup.Item>
            </Sidebar>
          </Col>

          <Col md={10} className="app-page-main-content">
            <Container style={{ maxWidth: "1400px" }}>
              <Row style={{ paddingBottom: "15px" }}>
                <Col xs={3}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header>Recent</Card.Header>

                    <Card.Text
                      className="text-center align-middle"
                      style={{ margin: "0", padding: "8px" }}
                    >
                      <ButtonGroup
                        aria-label="Basic example"
                        className="mr-2 align-middle"
                      >
                        <Button
                          variant="outline-dark"
                          className="align-middle"
                          size="sm"
                        >
                          <FontAwesomeIcon
                            icon="plus"
                            className="pr-1"
                            size="md"
                          ></FontAwesomeIcon>
                          Wiki
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup aria-label="Basic example" className="mr-2">
                        <Button variant="outline-dark" size="sm">
                          <FontAwesomeIcon
                            icon="plus"
                            className="pr-1"
                            size="md"
                          ></FontAwesomeIcon>
                          Universe
                        </Button>
                      </ButtonGroup>
                    </Card.Text>

                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Need to fetch user list and then map out their recents
                        to here
                      </ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col xs={9}>
                  <Card>
                    <Card.Header>Statistics</Card.Header>
                    <Card.Body>
                      <Card.Title>This will be a graph or something</Card.Title>
                      <Card.Text>
                        This will include stuff like how often they are adding
                        to their things. Like on GitHub, how they keep track of
                        code.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row style={{ paddingBottom: "15px" }}>
                <Col>
                  <Card>
                    <Card.Header>This will be a todo app</Card.Header>
                    <Card.Body>
                      <Card.Title>TODO App</Card.Title>
                      <Card.Text>
                        This should have three panes, one being goals for today,
                        one being short term goals (one week to a moth ish), one
                        being long term. We can do a todo app later and then
                        integrate it.
                      </Card.Text>
                    </Card.Body>
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
