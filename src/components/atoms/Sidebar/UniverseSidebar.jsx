import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../Sidebar.css";
import AuthService from "../../../services/auth.service";
import Forest from "../../../images/floating-forest.jpg";

const Side = ({ children, universeId }) => {
    const currentUser = AuthService.getCurrentUser(); // no need to check if null, sidebar only renders in App

    const logOut = () => {
        AuthService.logout();
        //window.location.reload();
    };

    //potentially use an Accordion component, instead of this dropdown one for the user account/app/signout stuff
    return (
        <>
            <Card
                style={{
                    height: "100vh",
                    top: "0px",
                    maxHeight: "calc(100% + 0px)",
                    transform: "translateX(0%)",
                    width: "256px",
                    position: "fixed",
                }}
            >
                <Card.Img variant="top" src={Forest} />

                <Accordion>
                    <Accordion.Toggle
                        as={ListGroup.Item}
                        action
                        eventKey="0"
                        className="d-flex bottom-shadow"
                    >
                        {currentUser.name}
                        <div className="spacer"></div>
                        <FontAwesomeIcon
                            icon="chevron-down"
                            className="down-arrow"
                        ></FontAwesomeIcon>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <ListGroup variant="flush">
                            <ListGroup.Item
                                as={Link}
                                to={"/app"}
                                action
                                className="border-0"
                            >
                                <FontAwesomeIcon
                                    icon="home"
                                    size="lg"
                                    className="mr-2"
                                ></FontAwesomeIcon>
                                App
                            </ListGroup.Item>
                            <ListGroup.Item
                                as={Link}
                                to={"/app/account/profile"}
                                action
                                className="border-0"
                            >
                                <FontAwesomeIcon
                                    icon="user-circle"
                                    size="lg"
                                    className="mr-2"
                                ></FontAwesomeIcon>
                                My Account
                            </ListGroup.Item>
                            <ListGroup.Item
                                as={Link}
                                to={"/"}
                                action
                                className="border-0"
                                onClick={logOut}
                            >
                                <FontAwesomeIcon
                                    icon="sign-out-alt"
                                    size="lg"
                                    className="mr-2"
                                ></FontAwesomeIcon>
                                Sign out
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Collapse>
                </Accordion>

                <ListGroup variant="flush">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle
                            as={ListGroup.Item}
                            action
                            eventKey="0"
                            className="d-flex"
                        >
                            <FontAwesomeIcon
                                icon="globe"
                                className="mr-2"
                                size="lg"
                            ></FontAwesomeIcon>
                            Universe
                            <div className="spacer"></div>
                            <FontAwesomeIcon
                                icon="chevron-down"
                                className="down-arrow"
                            ></FontAwesomeIcon>
                        </Accordion.Toggle>

                        <Accordion.Collapse
                            eventKey="0"
                            style={{ fontSize: "13px" }}
                        >
                            <ListGroup variant="flush">
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/wikis`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="book"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Wikis
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/maps`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="compass"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Maps
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/timelines`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="hourglass-half"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Timelines and Calendars
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/charts`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="sitemap"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Charts and Trees
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/Settings`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="cog"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Settings
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>

                        <ListGroup.Item
                            as={Link}
                            to={`/app/universes/${universeId}/writing`}
                            action
                        >
                            <FontAwesomeIcon
                                icon="feather-alt"
                                className="mr-2"
                                size="lg"
                            ></FontAwesomeIcon>
                            Writing
                        </ListGroup.Item>

                        <ListGroup.Item
                            as={Link}
                            to={`/app/universes/${universeId}/files`}
                            action
                        >
                            <FontAwesomeIcon
                                icon="folder"
                                className="mr-2"
                                size="lg"
                            ></FontAwesomeIcon>
                            Images and Files
                        </ListGroup.Item>

                        <ListGroup.Item as={Link} to={"#"} action>
                            <FontAwesomeIcon
                                icon="book"
                                className="mr-2"
                                size="lg"
                            ></FontAwesomeIcon>
                            Potentially add here pinned places (such as list of
                            characters, spells, etc...)
                        </ListGroup.Item>

                        <Accordion.Toggle
                            as={ListGroup.Item}
                            action
                            eventKey="1"
                            className="d-flex"
                        >
                            <FontAwesomeIcon
                                icon="palette"
                                className="mr-2"
                                size="lg"
                            ></FontAwesomeIcon>
                            Studio
                            <div className="spacer"></div>
                            <FontAwesomeIcon
                                icon="chevron-down"
                                className="down-arrow"
                            ></FontAwesomeIcon>
                        </Accordion.Toggle>

                        <Accordion.Collapse
                            eventKey="1"
                            style={{ fontSize: "13px" }}
                        >
                            <ListGroup variant="flush">
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/templates`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="flask"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Wiki Templates (This is where you create
                                    your own. Not where you start an article
                                    from one)
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/notebook`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="sticky-note"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Notebook (Set this up almost like a mini
                                    OneNote...)
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/generator`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="tools"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Generator
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as={Link}
                                    to={`/app/universes/${universeId}/sheets`}
                                    action
                                    className="pl-5 border-0"
                                >
                                    <FontAwesomeIcon
                                        icon="edit"
                                        className="mr-2"
                                        size="lg"
                                    ></FontAwesomeIcon>
                                    Sheets (this is like character sheets and
                                    stuff. But not the actual article. We want
                                    to be able to make characters without
                                    putting all info into the article)
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                    </Accordion>
                </ListGroup>
            </Card>
        </>
    );
};
const UniverseSidebar = withRouter(Side);
export default UniverseSidebar;
