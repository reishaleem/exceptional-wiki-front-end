import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default () => {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="At least 6 characters"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};
