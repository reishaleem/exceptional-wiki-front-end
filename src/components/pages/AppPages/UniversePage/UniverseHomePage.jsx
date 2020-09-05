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
import TaskService from "../../../../services/tasklist.service";
import TaskList from "../../../ImportedComponents/UniverseTaskList";
import UniverseTaskList from "../../../ImportedComponents/UniverseTaskList";
import Pagination from "react-js-pagination";

export default () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }

    const { universeId } = useParams();
    //const [universe, setUniverse] = useState({});
    const [wikisLoaded, setWikisLoaded] = useState(false);
    //const [wikisLoading, setWikisLoading] = useState(true);
    const [wikis, setWikis] = useState([]);

    const [activeWikiPage, setActiveWikiPage] = useState(0);
    const [paginationOffset, setPaginationOffset] = useState(0);

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // UniverseService.getUniverse(universeId).then((response) => {
        //   setUniverse(response.data);
        // });
        UniverseService.getWikiList(universeId).then((response) => {
            setWikis(response.data);
            setWikisLoaded(true);
        });
    }, [universeId]);

    function handlePageChange(pageNumber) {
        setWikisLoaded(false);

        setActiveWikiPage(pageNumber);
        setPaginationOffset((pageNumber - 1) * 5);

        setWikisLoaded(true);
    }

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
                        <Col md={2}>
                            <Link to={`/app/universes/${universeId}/wikis/new`}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    block
                                    className="mb-4"
                                >
                                    Create Wiki
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
                        <Col md={6}>
                            <div className="d-flex">
                                <h1>paginate this to only show like 10</h1>
                                <div className="spacer"></div>
                                <Pagination
                                    totalItemsCount={wikis.length}
                                    activePage={activeWikiPage}
                                    onChange={(pageNumber) =>
                                        handlePageChange(pageNumber)
                                    }
                                    itemsCountPerPage={7}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    pageRangeDisplayed={1}
                                    hideFirstLastPages={true}
                                    innerClass="pagination justify-content-end align-items-end mb-2"
                                />
                            </div>
                            <hr />
                            {wikis
                                .slice(paginationOffset, paginationOffset + 5)
                                .map((wiki, i) => {
                                    const timestamp = wiki.modifiedTimestamp;
                                    const date = timestamp.substring(8);
                                    const time = timestamp.substring(0, 8);
                                    return (
                                        <Card key={i}>
                                            <Card.Body>
                                                <Card.Title className="d-flex">
                                                    {wiki.name}
                                                    <div className="spacer"></div>
                                                    <Link to={"#View"}>
                                                        <FontAwesomeIcon
                                                            icon="eye"
                                                            className="mr-2"
                                                            size="sm"
                                                        ></FontAwesomeIcon>
                                                    </Link>
                                                    <Link
                                                        to={`/app/universes/${universeId}/wikis/${wiki.id}/edit`}
                                                    >
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
                                                    Wiki category (character,
                                                    magic, etc.)
                                                </Card.Subtitle>
                                                <Card.Text
                                                    className="mb-3"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="calendar-alt"
                                                        className="mr-1"
                                                    ></FontAwesomeIcon>
                                                    {date + " at " + time}
                                                    maybe word count, some
                                                    identifier{" "}
                                                </Card.Text>
                                                <Card.Text>
                                                    Maybe some Wiki tags, like
                                                    Work In Progress
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                        </Col>
                        <Col md={4}>
                            <UniverseTaskList id={universeId} />

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
                                        <ListGroup.Item>
                                            Show some stats
                                        </ListGroup.Item>
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
