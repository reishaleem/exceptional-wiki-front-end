import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import AuthService from "../../../services/auth.service";

export default () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        //window.location.reload();
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to={"/"}>
                        The Exceptional Outliner
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="non-app-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to={"/about"}>
                                About
                            </Link>
                            <Link className="nav-link" to={"/features"}>
                                Features
                            </Link>
                            {currentUser ? (
                                <>
                                    <NavDropdown
                                        title={currentUser.name}
                                        id="non-app-nav-dropdown"
                                    >
                                        <NavDropdown.Item>
                                            <Link
                                                to={"/app"}
                                                style={{
                                                    color: "#212529",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                App
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item>
                                            <Link
                                                to={"/"}
                                                onClick={logOut}
                                                style={{
                                                    color: "#212529",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Sign out
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Link className="nav-link" to={"/register"}>
                                        Sign Up
                                    </Link>
                                    <Link className="nav-link" to={"/login"}>
                                        Login
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
