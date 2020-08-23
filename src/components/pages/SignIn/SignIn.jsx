import React from "react";
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

export default () => {
    let history = useHistory();

    async function handleClick(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.set("username", data.get("username".toLowerCase()));
        data.set("email", data.get("email").toLowerCase());
        console.log(data.get("email"));
        const body = {};
        data.forEach((value, property) => (body[property] = value));
        console.log(body);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        // axios.post("/register", body)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        history.push("/profile"); // kind of want we want...except, we would need to somehow redirect to this specific user's profile...
    }

    return (
        <div class="register-page">
            <Container>
                <Row>
                    <Col md={7}>
                        <h2 className="text-center mb-3">Login</h2>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleClick}>
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
                                                type="username"
                                                placeholder=""
                                                name="username"
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
                                            >
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
    );
};
