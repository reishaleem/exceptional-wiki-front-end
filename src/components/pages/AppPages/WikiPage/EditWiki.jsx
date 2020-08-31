import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory, useParams } from "react-router-dom";
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
import UniverseSidebarWrapper from "../../../organisms/Wrappers/UniverseSidebarWrapper";
import WikiService from "../../../../services/wiki.service";
import RichEditor from "../../../atoms/RichEditor/RichEditor";
import WSYIWYGEditor from "../../../atoms/WYSIWYGEditor/WSYIWYGEditor";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const { universeId, wikiId } = useParams();
  //const [universe, setUniverse] = useState({});
  const [wiki, setWiki] = useState({});

  const [wikiName, setWikiName] = useState("");
  const [wikiBody, setWikiBody] = useState(""); // going with just one body for now...

  useEffect(() => {
    // UniverseService.getUniverse(universeId).then((response) => {
    //   setUniverse(response.data);
    // });
    WikiService.getWiki(universeId, wikiId).then((response) => {
      setWiki(response.data);
      setWikiName(response.data.name);
      setWikiBody(response.data.body);
    });
  }, [universeId, wikiId]);
  console.log(wiki);

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  function onChangeWikiName(e) {
    setWikiName(e.target.value);
  }

  function onChangeWikiBody(e) {
    setWikiBody(e.target.value);
  }

  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    WikiService.updateWiki(universeId, wiki.id, wikiName, wikiBody).then(
      (response) => {
        setMessage("Wiki updated successfully!");
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
  console.log(successful);

  return (
    <>
      <Container fluid style={{ paddingLeft: "0px" }}>
        <AppNavbar />
        <UniverseSidebarWrapper>
          <Row style={{ paddingBottom: "15px" }}>
            <Col md={9}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formWikiName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="wikiName"
                    value={wikiName}
                    onChange={onChangeWikiName}
                    ref={register({ required: true, maxLength: 50 })}
                  />
                  <Form.Text className="text-muted">
                    If you are not sure of a name now, this can be changed
                    later. Feel free to check out the GENERATOR for ideas!
                  </Form.Text>
                  {errors.wikiName && (
                    <Form.Text>This field is required</Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formWikiBody">
                  <Form.Label>
                    Wiki body (for now, all we have is this paragraph. we'll
                    remove the max length later)
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="wikiBody"
                    rows="3"
                    maxLength="500"
                    value={wikiBody}
                    onChange={onChangeWikiBody}
                    ref={register({ maxLength: 500 })}
                  />

                  <WSYIWYGEditor initValue={wikiBody} />

                  <Form.Text className="text-right" muted>
                    {wikiBody.length} / 500
                  </Form.Text>
                </Form.Group>

                <ButtonGroup className="mr-2" aria-label="First group">
                  <Link to={`/app/universes/${universeId}`}>
                    <Button variant="primary" type="button">
                      Cancel
                    </Button>
                  </Link>
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button variant="primary" type="submit" key="submit">
                    Save
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
            <Col md={3}>
              <p>Can put the save buttons here later</p>
            </Col>
          </Row>
        </UniverseSidebarWrapper>
      </Container>
    </>
  );
};
