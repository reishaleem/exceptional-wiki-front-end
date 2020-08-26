import React, { useState } from "react";
import AuthService from "../../../services/auth.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import ListGroup from "react-bootstrap/ListGroup";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../atoms/Navbar/Navbar";
import AppNavbar from "../../atoms/Navbar/AppNavbar";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    // start organizing code...this can be all pushed into a lower ProfilePage component. Lots of duplicate code.
    return <Redirect to="/login" />;
  }

  const { register, handleSubmit, errors } = useForm();

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onChangeOldPassword = (e) => {
    const pass = e.target.value;
    setOldPassword(pass);
  };

  const onChangeNewPassword = (e) => {
    const pass = e.target.value;
    setNewPassword(pass);
  };

  const onChangeConfirmNewPassword = (e) => {
    const pass = e.target.value;
    setConfirmNewPassword(pass);
  };

  // need to configure this endpoint first...
  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    // check that password and confirm password match? Or do we do that in the backend??

    AuthService.updateUserSecurity(
      currentUser.id,
      oldPassword,
      newPassword
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        // need to somehow log user out then back in, so that the new password officially takes effect...same issue as update profile...
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
    console.log(data);
  };

  return (
    <>
      <Container
        fluid
        style={{
          paddingLeft: "0px",
        }}
      >
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
                            <Link
                              className="nav-link"
                              to={"/app/account/profile"}
                            >
                              Profile
                            </Link>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="security">
                            <Link
                              className="nav-link"
                              to={"/app/account/security"}
                            >
                              Security
                            </Link>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="delete">
                            <Link
                              className="nav-link"
                              to={"/app/account/delete"}
                            >
                              Delete
                            </Link>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group as={Row} controlId="formBasicName">
                          <Col md={2}></Col>
                          <Col md={8}>
                            <Form.Label>Current password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="At least 6 characters"
                              name="oldPassword"
                              value={oldPassword}
                              onChange={onChangeOldPassword}
                              ref={register({
                                minLength: 6,
                                maxLength: 129,
                              })}
                            />
                            {errors.oldPassword && (
                              <Form.Text>This field is required</Form.Text>
                            )}
                          </Col>
                          <Col md={2}></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicUsername">
                          <Col md={2}></Col>
                          <Col md={8}>
                            <Form.Label className="text-md-right pt-md-2">
                              New password
                            </Form.Label>

                            <Form.Control
                              type="password"
                              placeholder="At least 6 characters"
                              name="newPassword"
                              value={newPassword}
                              onChange={onChangeNewPassword}
                              ref={register({
                                minLength: 6,
                                maxLength: 129,
                              })}
                            />
                            {errors.newPassword && (
                              <Form.Text>This field is required</Form.Text>
                            )}
                          </Col>
                          <Col md={2}></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicEmail">
                          <Col md={2}></Col>
                          <Col md={8}>
                            <Form.Label className="text-md-right pt-md-2">
                              Confirm new password
                            </Form.Label>

                            <Form.Control
                              type="password"
                              placeholder="At least 6 characters"
                              name="confirmNewPassword"
                              value={confirmNewPassword}
                              onChange={onChangeConfirmNewPassword}
                              ref={register({
                                minLength: 6,
                                maxLength: 129,
                              })}
                            />

                            {errors.confirmNewPassword && (
                              <Form.Text>This field is required</Form.Text>
                            )}
                          </Col>
                          <Col md={2}></Col>
                        </Form.Group>

                        <Row>
                          <Col md={2}></Col>
                          <Col md={8}>
                            <Button
                              variant="primary"
                              type="submit"
                              className="float-right"
                            >
                              Save
                            </Button>
                          </Col>
                          <Col md={2}></Col>
                        </Row>
                        <br />

                        {message && (
                          <div className="form-group">
                            <div
                              className={
                                successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
                              {message}
                            </div>
                          </div>
                        )}
                      </Form>
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
