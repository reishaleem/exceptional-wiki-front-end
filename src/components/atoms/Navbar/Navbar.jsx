import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to={"/"}>
                        Exceptional Outlining
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to={"/about"}>
                                About
                            </Link>
                            <Link className="nav-link" to={"/features"}>
                                Features
                            </Link>
                            <Link className="nav-link" to={"/register"}>
                                Sign Up
                            </Link>
                            <Link className="nav-link" to={"/login"}>
                                Login
                            </Link>
                            <Link className="nav-link" to={"/profile"}>
                                My Account
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
