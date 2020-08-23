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
                        <Card>
                            <Card.Header>Create your account</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleClick}>
                                    <Form.Group
                                        as={Row}
                                        controlId="formBasicName"
                                    >
                                        <Form.Label
                                            column
                                            md={4}
                                            className="text-md-right pt-md-2"
                                        >
                                            Name
                                        </Form.Label>
                                        <Col md={8}>
                                            <Form.Control
                                                type="name"
                                                placeholder=""
                                                name="name"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group
                                        as={Row}
                                        controlId="formBasicUsername"
                                    >
                                        <Form.Label
                                            column
                                            md={4}
                                            className="text-md-right pt-md-2"
                                        >
                                            Username
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
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label
                                            column
                                            md={4}
                                            className="text-md-right pt-md-2"
                                        >
                                            Email address
                                        </Form.Label>
                                        <Col md={8}>
                                            <Form.Control
                                                type="email"
                                                placeholder=""
                                                name="email"
                                            />
                                            <Form.Text className="text-muted">
                                                We'll never share your email
                                                with anyone else.
                                            </Form.Text>
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
                                                placeholder="At least 6 characters"
                                                name="password"
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
                                            Re-enter Password
                                        </Form.Label>
                                        <Col md={8}>
                                            <Form.Control
                                                type="password"
                                                placeholder=""
                                                name="checkPassword"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="float-right"
                                    >
                                        Register
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5}>
                        <h2 className="text-center mb-5">
                            Sign up with Social
                        </h2>
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
