import React, {useState, useRef} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {Form as ValidationForm} from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../../services/auth.service";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

export default () => {
    let history = useHistory()
    const form = useRef();
  const checkBtn = useRef();

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

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          history.push("/profile");
          window.location.reload();
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
    } else {
      setLoading(false);
    }
  };


    return (
        <div class="register-page">
            <Container>
                <Row>
                    <Col md={7}>
                        <h2 className="text-center mb-3">Login</h2>
                        <Card>
                            <Card.Body>
                                <ValidationForm onSubmit={handleLogin} ref={form}>
                                    <Form.Group
                                        as={Row}
                                        controlId="formBasicUsername"
                                    >
                                        <Form.Label
                                            column
                                            md={4}
                                            className="text-md-right pt-md-2"
                                        >
                                            Username or Email
                                        </Form.Label>
                                        <Col md={8}>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                name="username"
                                                value={username}
                                                onChange={onChangeUsername}
                                                validations={[required]}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group
                                        as={Row}
                                        controlId="formBasicPassword"
                                    >
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
                                                validations={[required]}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Col md={8} className="offset-md-4">
                                            <Form.Check
                                                type="checkbox"
                                                label="Remember me"
                                            />
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
                                            <Link to={"/#ForgotPass"}>
                                                Forgot password?
                                            </Link>
                                            <br />
                                            <Link to={"/register"}>
                                                Don't have an account?
                                            </Link>

                                            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                        </Col>
                                    </Form.Group>
                                </ValidationForm>
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
    );
};
