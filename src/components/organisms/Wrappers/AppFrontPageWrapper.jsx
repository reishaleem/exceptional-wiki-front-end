import React from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import AuthService from "../../../services/auth.service";
import Sidebar from "../../atoms/Sidebar/AppFrontPageSidebar";

export default ({ children }) => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }
  // const [content, setContent] = useState("");

  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10} className="app-page-main-content">
          <Container className="profile-padding py-3">{children}</Container>
        </Col>
      </Row>
    </>
  );
};
