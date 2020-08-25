import React, { useState } from "react";
import { Nav, Card, ListGroup, Button, Collapse } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Forest from "../../../images/floating-forest.jpg";
import AuthService from "../../../services/auth.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Side = ({ children }) => {
  const [open, setOpen] = useState(false);
  const currentUser = AuthService.getCurrentUser(); // no need to check if null, sidebar only renders in App

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Forest} />
        <Card
          onClick={() => setOpen(!open)}
          aria-controls="sidebarDropdown"
          aria-expanded={open}
        >
          <ListGroup.Item action>
            <div className="sidebarDropdownHeader">
              {currentUser.name}
              <FontAwesomeIcon
                icon="angle-down"
                className="pl-1"
              ></FontAwesomeIcon>
            </div>
          </ListGroup.Item>
          <Collapse in={open}>
            <div>
              <ListGroup variant="flush">
                <ListGroup.Item as={Link} to={"/app"} action>
                  <FontAwesomeIcon
                    icon="home"
                    className="pr-1"
                    size="lg"
                  ></FontAwesomeIcon>
                  App
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={"/app/account/profile"} action>
                  <FontAwesomeIcon
                    icon="user-circle"
                    className="pr-1"
                    size="lg"
                  ></FontAwesomeIcon>
                  My Account
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={"/"} action>
                  <FontAwesomeIcon
                    icon="sign-out-alt"
                    className="pr-1"
                    size="lg"
                  ></FontAwesomeIcon>
                  Sign out
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Collapse>
        </Card>

        <ListGroup variant="flush">{children}</ListGroup>
      </Card>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
