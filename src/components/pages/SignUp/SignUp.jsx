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
import {Form as ValidationForm} from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../../services/auth.service";
import { useForm } from "react-hook-form";

// look into doing the submit using the services we've written without even using this validation stuff. i feel like we don't need it.



export default () => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();

    const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeName = (e) => {
      const name = e.target.value;
      setName(name)
  }

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
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
    }
  };

  const onSubmit = data => {
      setMessage("")
      setSuccessful(false)
      console.log(username)
      console.log(email)
      console.log(password)

      AuthService.register(username, email, name, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          AuthService.login(username, password)
          history.push("/profile")
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
  }

    // async function handleClick(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     data.set("username", data.get("username".toLowerCase()));
    //     data.set("email", data.get("email").toLowerCase());
    //     console.log(data.get("email"));
    //     const body = {};
    //     data.forEach((value, property) => (body[property] = value));
    //     console.log(body);

    //     const config = {
    //         headers: { "content-type": "multipart/form-data" },
    //     };

    //     // axios.post("/register", body)
    //     // .then(response => {
    //     //     console.log(response)
    //     // })
    //     // .catch(error => {
    //     //     console.log(error)
    //     // })
    //     history.push("/profile"); // kind of want we want...except, we would need to somehow redirect to this specific user's profile...
    // }

    return (
        <div className="register-page">
            <Container>
                <Row>
                    <Col md={7}>
                        <Card>
                            <Card.Header>Create your account</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
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
                                                value={name}
                                                onChange={onChangeName}
                                                ref={register({ required: true, maxLength: 30 })}
                                            />
                                            {errors.name &&  <Form.Text>This field is required</Form.Text>}
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
                                                value={username}
                                                onChange={onChangeUsername}
                                                ref={register({ required: true, maxLength: 20 })}
                                            />
                                            {errors.username &&  <Form.Text>This field is required</Form.Text>}
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
                                                value={email}
                                                onChange={onChangeEmail}
                                                ref={register({ required: true, maxLength: 50 })}
                                            />
                                            <Form.Text className="text-muted">
                                                We'll never share your email
                                                with anyone else.
                                            </Form.Text>
                                            {errors.email &&  <Form.Text>This field is required</Form.Text>}
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
                                                value={password}
                                                onChange={onChangePassword}
                                                ref={register({ required: true, minLength: 6, maxLength: 129 })}
                                            />
                                            {errors.password &&  <Form.Text>This field is required</Form.Text>}
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
                                                value={confirmPassword}
                                                onChange={onChangeConfirmPassword}
                                                ref={register({ required: true, minLength: 6, maxLength: 129 })}
                                            />
                                            {errors.checkPassword && <Form.Text>This field is required</Form.Text>}
                                        </Col>
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="float-right"
                                        
                                    >
                                        
                                        Register
                                    </Button>
                                    <br />

                                    {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
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
