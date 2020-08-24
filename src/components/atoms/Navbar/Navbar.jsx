import React, {useState, useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import AuthService from "../../../services/auth.service";

export default () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
          setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
          setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
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
                       Brand
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
                            { currentUser ? (
                                <>
                                <Link className="nav-link" to={"/app/account/profile"}>
                                    My Account
                                </Link>
                                
                                <Nav.Link href="/login" onClick={logOut}>Logout</Nav.Link>
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
