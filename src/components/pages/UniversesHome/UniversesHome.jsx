import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import { Redirect, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";

import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import "../../../Sidebar.css";
import Forest from "../../../images/floating-forest.jpg";
import Sidebar from "../../atoms/Sidebar/Sidebar";

export default () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }
  // const [content, setContent] = useState("");

  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar>
            <ListGroup.Item
              as={Link}
              to={"/app/universes"}
              action
              variant="dark"
            >
              Universes
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={"/app/wikis"} action>
              Wikis
            </ListGroup.Item>
          </Sidebar>
        </Col>
        <Col md={10}>
          <h1>Universes</h1>
        </Col>
      </Row>
    </>
  );
};
