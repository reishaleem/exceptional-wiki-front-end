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
            <h1>Universes</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
