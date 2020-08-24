import React from "react";
import AuthService from "../../../services/auth.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container className="profile-padding py-3">
        <Row>
          <Col>
            <h1>Account</h1>
            <hr />
            <Card>
              <Card.Header>
                <Nav justify variant="tabs" defaultActiveKey="security">
                  <Nav.Item>
                    <Nav.Link eventKey="profile">
                      <Link className="nav-link" to={"/app/account/profile"}>
                        Profile
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="security">
                      <Link className="nav-link" to={"/app/account/security"}>
                        Security
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="delete">Delete</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Text>security</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
