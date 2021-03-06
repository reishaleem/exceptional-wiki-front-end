import React from "react";
import { Redirect, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "../../../../services/auth.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import AppFrontPageWrapper from "../../../organisms/Wrappers/AppFrontPageWrapper";

export default () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Container fluid style={{ paddingLeft: "0px" }}>
                <AppNavbar />
                <AppFrontPageWrapper>
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col xs={4}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Header>Recent</Card.Header>
                                <div
                                    className="text-center align-middle"
                                    style={{ margin: "0", padding: "8px" }}
                                >
                                    <ButtonGroup
                                        aria-label="Basic example"
                                        className="mr-2 align-middle"
                                    >
                                        <Button
                                            variant="outline-dark"
                                            className="align-middle"
                                            size="sm"
                                        >
                                            <FontAwesomeIcon
                                                icon="plus"
                                                className="mr-2"
                                                size="sm"
                                            ></FontAwesomeIcon>
                                            Wiki
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup
                                        aria-label="Basic example"
                                        className="mr-2"
                                    >
                                        <Link to={"/app/universes/new"}>
                                            <Button
                                                variant="outline-dark"
                                                size="sm"
                                            >
                                                <FontAwesomeIcon
                                                    icon="plus"
                                                    className="mr-1"
                                                    size="sm"
                                                ></FontAwesomeIcon>
                                                Universe
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </div>

                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        Need to fetch user list and then map out
                                        their recents to here
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Dapibus ac facilisis in
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Vestibulum at eros
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col xs={8}>
                            <Card>
                                <Card.Header>Statistics</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        This will be a graph or something
                                    </Card.Title>
                                    <Card.Text>
                                        This will include stuff like how often
                                        they are adding to their things. Like on
                                        GitHub, how they keep track of code.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col>
                            <Card>
                                <Card.Header>
                                    This will be a todo app
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>TODO App</Card.Title>
                                    <Card.Text>
                                        This should have three panes, one being
                                        goals for today, one being short term
                                        goals (one week to a moth ish), one
                                        being long term. We can do a todo app
                                        later and then integrate it.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </AppFrontPageWrapper>
            </Container>
        </>
    );
};
