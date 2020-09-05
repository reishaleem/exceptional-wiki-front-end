import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthService from "../../../../services/auth.service";
import UserService from "../../../../services/user.service";
import UniverseService from "../../../../services/universe.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import AppFrontPageWrapper from "../../../organisms/Wrappers/AppFrontPageWrapper";

export default () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }

    const [universes, setUniverses] = useState([]);

    useEffect(() => {
        UserService.getUserUniverseList(currentUser.id).then((response) => {
            setUniverses(response.data);
        });
    }, [currentUser.id]);
    console.log(universes);

    function test() {
        universes.forEach((element) => {
            console.log(element);
        });
    }

    return (
        <>
            <Container fluid style={{ paddingLeft: "0px" }}>
                <AppNavbar />
                <AppFrontPageWrapper>
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col md={3}>
                            <Link to={"/app/universes/new"}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    block
                                    className="mb-4"
                                >
                                    Create Universe
                                </Button>
                            </Link>
                            <Form>
                                <Form.Group controlId="universeSearch">
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                    />
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
                        <Col md={9}>
                            <h1>Universes</h1>
                            <hr />
                            {universes.map((universe, i) => {
                                return (
                                    <Card key={i} className="mb-4 shadow-sm">
                                        <Link
                                            to={`/app/universes/${universe.id}`}
                                        >
                                            <Card.Header as="h4">
                                                {universe.name}
                                            </Card.Header>
                                        </Link>
                                        <Card.Body>
                                            <Card.Text>
                                                {universe.description}
                                            </Card.Text>
                                            <Button variant="primary">
                                                Go somewhere
                                            </Button>
                                        </Card.Body>
                                        <Card.Footer className="text-muted d-flex">
                                            Created -{" "}
                                            {universe.createdTimestamp.substring(
                                                8
                                            )}{" "}
                                            - Updated{" "}
                                            {universe.modifiedTimestamp}
                                            <div className="spacer"></div>
                                            <Link
                                                to={`/app/universes/${universe.id}`}
                                                className="pr-3"
                                            >
                                                <FontAwesomeIcon
                                                    icon="pen"
                                                    className="pr-1"
                                                    size="lg"
                                                ></FontAwesomeIcon>
                                            </Link>
                                            <Link to={"#delete"} onClick={test}>
                                                <FontAwesomeIcon
                                                    icon="trash-alt"
                                                    size="lg"
                                                ></FontAwesomeIcon>
                                            </Link>
                                        </Card.Footer>
                                    </Card>
                                );
                            })}
                        </Col>
                    </Row>
                </AppFrontPageWrapper>
            </Container>
        </>
    );
};
