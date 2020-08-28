import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthService from "../../../../services/auth.service";
import Navbar from "../../../atoms/Navbar/Navbar";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser) {
    return <Redirect to="/app/account/profile" />;
  }

  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onSubmit = (data) => {
    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      () => {
        history.push("/app/account/profile");
        window.location.reload(); // might need to just update navbar to accept a prop regarding whether it is logged in...?
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <div class="register-page">
          <Container>
            <Row>
              <Col md={7}>
                <h2 className="text-center mb-3">Login</h2>
                <Card>
                  <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group as={Row} controlId="formBasicUsername">
                        <Form.Label
                          column
                          md={4}
                          className="text-md-right pt-md-2"
                        >
                          Username
                        </Form.Label>
                        <Col md={8}>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            ref={register({ required: true })}
                          />
                          {errors.name && (
                            <Form.Text>This field is required</Form.Text>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formBasicPassword">
                        <Form.Label
                          column
                          md={4}
                          className="text-md-right pt-md-2"
                        >
                          Password
                        </Form.Label>
                        <Col md={8}>
                          <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            ref={register({ required: true })}
                          />
                          {errors.name && (
                            <Form.Text>This field is required</Form.Text>
                          )}
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col md={8} className="offset-md-4">
                          <Form.Check type="checkbox" label="Remember me" />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Col md={8} className="offset-md-4">
                          <Button
                            variant="primary"
                            type="submit"
                            className="mr-3 mb-3"
                            disabled={loading}
                          >
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            Login
                          </Button>
                          <br />
                          <Link to={"/#ForgotPass"}>Forgot password?</Link>
                          <br />
                          <Link to={"/register"}>Don't have an account?</Link>
                          <br />
                          <br />

                          {message && (
                            <div className="form-group">
                              <div className="alert alert-danger" role="alert">
                                {message}
                              </div>
                            </div>
                          )}
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={5}>
                <h3 className="text-center mb-5">Login with Social</h3>
                <Button variant="danger" block>
                  <FontAwesomeIcon icon="user-plus"></FontAwesomeIcon>
                  {" Google"}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};
