import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        style={{
          height: "48px",
          marginTop: "0px",
          transform: "translateY(0px)",
          left: "256px",
          right: "0px",
        }}
      >
        <Link className="navbar-brand" to={"/"}>
          Brand
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to={"#"}>
              <FontAwesomeIcon
                icon="bell"
                style={{ fontSize: "1.5em" }}
              ></FontAwesomeIcon>
            </Link>
            <Link className="nav-link" to={"#"}>
              <FontAwesomeIcon
                icon="bullhorn"
                className="pl-2"
                style={{ fontSize: "1.5em" }}
              ></FontAwesomeIcon>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
