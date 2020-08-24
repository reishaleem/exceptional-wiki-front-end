import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../../../services/auth.service";
import ProfilePage from "../../organisms/ProfilePage/ProfilePage";
import { Row, Col, Card, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default () => {
  const currentUser = AuthService.getCurrentUser();

  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();

  const [username, setUsername] = useState(currentUser.username);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [userBio, setUserBio] = useState(currentUser.bio);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeUserBio = (e) => {
    const bio = e.target.value;
    setUserBio(bio);
  };

  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);
    console.log(username);
    console.log(email);

    AuthService.updateUserProfile(username, email, name, userBio).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
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
      <Container className="profile-padding py-3">
        <Row>
          <Col>
            <h1>Account</h1>
            <hr />
            <Card>
              <Card.Header>
                <Nav justify variant="tabs" defaultActiveKey="profile">
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group as={Row} controlId="formBasicName">
                    <Col md={2}></Col>
                    <Col md={8}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder=""
                        name="name"
                        value={name}
                        onChange={onChangeName}
                        ref={register({ maxLength: 30 })}
                      />
                      {errors.name && (
                        <Form.Text>This field is required</Form.Text>
                      )}
                    </Col>
                    <Col md={2}></Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicUsername">
                    <Col md={2}></Col>
                    <Col md={8}>
                      <Form.Label className="text-md-right pt-md-2">
                        Username
                      </Form.Label>

                      <Form.Control
                        type="username"
                        placeholder=""
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        ref={register({ maxLength: 20 })}
                      />
                      {errors.username && (
                        <Form.Text>This field is required</Form.Text>
                      )}
                    </Col>
                    <Col md={2}></Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicEmail">
                    <Col md={2}></Col>
                    <Col md={8}>
                      <Form.Label className="text-md-right pt-md-2">
                        Email address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        placeholder=""
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        ref={register({ maxLength: 50 })}
                      />

                      {errors.email && (
                        <Form.Text>This field is required</Form.Text>
                      )}
                    </Col>
                    <Col md={2}></Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="profileForm.userBio">
                    <Col md={2}></Col>
                    <Col md={8}>
                      <Form.Label>Bio</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        maxLength="255"
                        value={userBio}
                        onChange={onChangeUserBio}
                        ref={register({ maxLength: 255 })}
                      />
                      <Form.Text className="text-right" muted>
                        {userBio.length} / 255
                      </Form.Text>
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
    </>
  );
};
