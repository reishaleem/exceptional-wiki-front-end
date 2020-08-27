import React, { useState } from "react";
import {
  Nav,
  Card,
  ListGroup,
  Button,
  Collapse,
  Accordion,
} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Forest from "../../../images/floating-forest.jpg";
import AuthService from "../../../services/auth.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Side = ({ children }) => {
  const [open, setOpen] = useState(false);
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
            <FontAwesomeIcon
              icon="globe"
              className="mr-2"
              size="lg"
            ></FontAwesomeIcon>
            {currentUser.name}
            <div className="spacer"></div>
            <FontAwesomeIcon
              icon="chevron-down"
              className="down-arrow"
            ></FontAwesomeIcon>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <ListGroup variant="flush">
              <ListGroup.Item as={Link} to={"/app"} action className="border-0">
                <FontAwesomeIcon
                  icon="home"
                  className="pr-1"
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
                  className="pr-1"
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
                  className="pr-1"
                  size="lg"
                  className="mr-2"
                ></FontAwesomeIcon>
                Sign out
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Collapse>
        </Accordion>

        <ListGroup variant="flush">{children}</ListGroup>
      </Card>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
