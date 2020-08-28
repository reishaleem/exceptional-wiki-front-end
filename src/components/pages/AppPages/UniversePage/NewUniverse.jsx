import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import AuthService from "../../../../services/auth.service";
import UniverseService from "../../../../services/universe.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import AppFrontPageWrapper from "../../../organisms/Wrappers/AppFrontPageWrapper";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [universeName, setUniverseName] = useState("");
  const [universeDesc, setUniverseDesc] = useState("");

  function onChangeUniverseName(e) {
    setUniverseName(e.target.value);
  }

  function onChangeUniverseDesc(e) {
    setUniverseDesc(e.target.value);
  }

  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    UniverseService.createUniverse(
      currentUser.id,
      universeName,
      universeDesc
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        history.push(`/app/universes/${response.data.idOfCreatedDocument}`);
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
          <Row style={{ paddingBottom: "15px" }}>
            <Col md={3}>
              <p>
                Maybe a picture for the thumbnail of the universe, then
                underneath that, maybe a genre thing. Not sure if needed there.
                Can instead do created date.
              </p>
            </Col>
            <Col md={9}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formUniverseName">
                  <Form.Label>What is your Universe's name?</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="universeName"
                    placeholder="e.g. Middle Earth, Narnia, Earthland, World2"
                    value={universeName}
                    onChange={onChangeUniverseName}
                    ref={register({ required: true, maxLength: 50 })}
                  />
                  <Form.Text className="text-muted">
                    If you are not sure of a name now, this can be changed
                    later. Feel free to check out the GENERATOR for ideas!
                  </Form.Text>
                  {errors.universeName && (
                    <Form.Text>This field is required</Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formUniverseDescription">
                  <Form.Label>
                    What is your Universe about? (Optional)
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="universeDesc"
                    rows="3"
                    placeholder="Write a short paragraph that evokes the wonderful or not so wonderful aspects of your world. A teaser of what is to come"
                    maxLength="500"
                    value={universeDesc}
                    onChange={onChangeUniverseDesc}
                    ref={register({ maxLength: 500 })}
                  />
                  <Form.Text className="text-right" muted>
                    {universeDesc.length} / 500
                  </Form.Text>
                </Form.Group>

                <ButtonGroup className="mr-2" aria-label="First group">
                  <Link to={"/app/universes"}>
                    <Button variant="primary" type="button">
                      Cancel
                    </Button>
                  </Link>
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button variant="primary" type="submit">
                    Create
                  </Button>
                </ButtonGroup>
              </Form>
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </AppFrontPageWrapper>
      </Container>
    </>
  );
};
