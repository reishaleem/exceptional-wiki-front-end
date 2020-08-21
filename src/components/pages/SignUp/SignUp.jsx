import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'

async function handleClick(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    data.set("username", data.get("username".toLowerCase()))
    data.set("email", data.get("email").toLowerCase())
    console.log(data.get("email"))
    const body = {}
    data.forEach((value, property) => body[property] = value)
    console.log(body)

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post("/register", body)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export default () => {
    return (
        <Form onSubmit={handleClick}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="" name="name"/>
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="" name='username'/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" name="email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="At least 6 characters"
                    name="password"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="" name="checkPassword" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};
