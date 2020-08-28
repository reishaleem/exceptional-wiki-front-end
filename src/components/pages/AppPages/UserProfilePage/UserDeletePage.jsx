import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthService from "../../../../services/auth.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import AppFrontPageWrapper from "../../../organisms/Wrappers/AppFrontPageWrapper";

export default () => {
  let history = useHistory();
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    // start organizing code...this can be all pushed into a lower ProfilePage component. Lots of duplicate code.
    return <Redirect to="/login" />;
  }

  const logOut = () => {
    AuthService.logout();
    //window.location.reload();
  };

  const { register, handleSubmit, errors } = useForm();

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [deleteField, setDeleteField] = useState("");

  const onChangeDeleteField = (e) => {
    const val = e.target.value;
    setDeleteField(val);
  };

  // need to configure this endpoint first...
  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    AuthService.deleteUser(currentUser.id).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        logOut();
        history.push("/login");
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
      <Container fluid style={{ paddingLeft: "0px" }}>
        <AppNavbar />
        <AppFrontPageWrapper>
          <Row>
            <Col>
              <h1>Account</h1>
              <hr />
              <Card>
                <Card.Header>
                  <Nav justify variant="tabs" defaultActiveKey="delete">
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
                      <Nav.Link eventKey="delete">
                        <Link className="nav-link" to={"/app/account/delete"}>
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
                        <Card.Text>
                          To delete your account, type DELETE into the field
                          below and click the button.
                        </Card.Text>
                        <Form.Control
                          type="text"
                          placeholder="Type DELETE"
                          name="deleteField"
                          value={deleteField}
                          onChange={onChangeDeleteField}
                          ref={register({
                            validate: {
                              isDelete: (value) => value === "DELETE",
                            },
                          })}
                        />
                        {errors.deleteField && (
                          <Form.Text>
                            You must type exactly DELETE to delete your account.
                          </Form.Text>
                        )}
                      </Col>
                      <Col md={2}></Col>
                    </Form.Group>

                    <Row>
                      <Col md={2}></Col>
                      <Col md={8}>
                        <Button
                          variant="danger"
                          type="submit"
                          className="float-right"
                        >
                          DELETE ACCOUNT
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
        </AppFrontPageWrapper>
      </Container>
    </>
  );
};
