import React, { useState, useEffect } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "../../../../services/auth.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import UniverseSidebarWrapper from "../../../organisms/Wrappers/UniverseSidebarWrapper";
import UniverseService from "../../../../services/universe.service";

export default () => {
  const currentUser = AuthService.getCurrentUser();
  if (currentUser === null || currentUser === undefined) {
    return <Redirect to="/login" />;
  }

  const { universeId } = useParams();
  const [universe, setUniverse] = useState({});

  useEffect(() => {
    UniverseService.getUniverse(universeId).then((response) => {
      setUniverse(response.data);
    });
  }, [universeId]);
  console.log(universe);

  // we can have a recently updated pagination for the wikis. The 'wiki dashboard' is essentially out universe hub. This pagination can also be sorted
  // by article type, created date, etc... and we can have a search function through it

  // We can also have statistics and a TODO list, like we do with the Universes. These stats and TODO will be exclusive to this Universe (it may include things from the higher level one)

  // put the article list in the center, with the search and filter options to the left, then the Statistics and TODO list on the right, with the TODO list in the top right? maybe ditch statistics.
  // we can have like accordion like cards underneath the TODO list that we can open and close to see more options maybe.
  return (
    <>
      <Container fluid style={{ paddingLeft: "0px" }}>
        <AppNavbar />
        <UniverseSidebarWrapper>
          <Row style={{ paddingBottom: "15px" }}>
            <Col md={3}>
              <Link to={"#newwiki"}>
                <Button variant="primary" size="lg" block className="mb-4">
                  Create Wiki
                </Button>
              </Link>
              <Form>
                <Form.Group controlId="universeSearch">
                  <FormControl type="text" placeholder="Search" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="universeSort">
                  <Form.Label>Sort By</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Most recent</option>
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col md={6}>
              <h1>
                Map all wikis linked to this universe in cards below and
                paginate it to only show like 10{" "}
              </h1>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex">
                    Wiki Name<div className="spacer"></div>
                    <Link to={"#View"}>
                      <FontAwesomeIcon
                        icon="eye"
                        className="mr-2"
                        size="sm"
                      ></FontAwesomeIcon>
                    </Link>
                    <Link to={"#Edit"}>
                      <FontAwesomeIcon
                        icon="pen"
                        className="mr-2"
                        size="sm"
                      ></FontAwesomeIcon>
                    </Link>
                    <Link to={"#delete"}>
                      <FontAwesomeIcon
                        icon="trash-alt"
                        size="sm"
                      ></FontAwesomeIcon>
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className="text-muted">
                    Wiki category (character, magic, etc.)
                  </Card.Subtitle>
                  <Card.Text className="mb-3">
                    Calendar logo and updated date, maybe word count, some
                    identifier{" "}
                  </Card.Text>
                  <Card.Text>
                    Maybe some Wiki tags, like Work In Progress
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Header>TODO</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Will need to integrate a TODO list. Only show like 5 entries
                    and paginate it.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Accordion>
                <Accordion.Toggle
                  as={ListGroup.Item}
                  action
                  eventKey="0"
                  className="d-flex"
                >
                  Statistics
                  <div className="spacer"></div>
                  <FontAwesomeIcon
                    icon="chevron-down"
                    className="down-arrow"
                  ></FontAwesomeIcon>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Show some stats</ListGroup.Item>
                    <ListGroup.Item>
                      Not really sure which ones yet.
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>

                <Accordion.Toggle
                  as={ListGroup.Item}
                  action
                  eventKey="1"
                  className="d-flex"
                >
                  Quick links
                  <div className="spacer"></div>
                  <FontAwesomeIcon
                    icon="chevron-down"
                    className="down-arrow"
                  ></FontAwesomeIcon>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Show some quick navigation links
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Not really sure which ones yet.
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Collapse>
              </Accordion>
            </Col>
          </Row>
        </UniverseSidebarWrapper>
      </Container>
    </>
  );
};
