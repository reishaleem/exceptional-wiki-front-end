import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import { Redirect, Link } from "react-router-dom";
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
              <ListGroup.Item
                as={Link}
                to={"/app/universes"}
                action
                variant="dark"
              >
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
            <Container style={{ maxWidth: "1185px" }}>
              <Row style={{ paddingBottom: "15px" }}>
                <Col md={3}>
                  <p>
                    Maybe a picture for the thumbnail of the universe, then
                    underneath that, maybe a genre thing. Not sure if needed
                    there. Can instead do created date.
                  </p>
                </Col>
                <Col md={9}>
                  <h1>
                    Make a basic form below for entering a new universe. Add a
                    cancel and submit button at the end.
                  </h1>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
