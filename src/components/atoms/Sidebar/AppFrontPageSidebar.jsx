import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../Sidebar.css";
import AuthService from "../../../services/auth.service";
import Forest from "../../../images/floating-forest.jpg";

const Side = ({ children }) => {
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
                    <ListGroup.Item as={Link} to={"/app/universes"} action>
                        <FontAwesomeIcon
                            icon="globe"
                            className="pr-1"
                            size="lg"
                        ></FontAwesomeIcon>
                        Universes
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar;
