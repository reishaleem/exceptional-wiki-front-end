import React, {useState, useEffect} from "react";
import axios from 'axios'
import AuthService from "../../../services/auth.service";
import ProfilePage from '../../organisms/ProfilePage/ProfilePage'
import {Row, Col, Card, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default () => {

    const currentUser = AuthService.getCurrentUser();


    return (
        <>
            <Container className="profile-padding py-3">
                <Row>
                    <Col>
                        <h1>Account</h1>
                        <hr />
                        <Card>
                            <Card.Header>
                            <Nav justify variant="tabs" defaultActiveKey="security">
                            <Nav.Item>
                                <Nav.Link eventKey="profile">
                                <Link className="nav-link"  to={"/app/account/profile"}>
                                Profile
                            </Link>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="security">
                            <Link className="nav-link" to={"/app/account/security"}>
                                Security
                            </Link>
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="delete">
                                Delete
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Header>
                        <Card.Body>
                           
                            <Card.Text>security</Card.Text>
                            
                        </Card.Body>
                        </Card>

                    </Col>
                    
                </Row>
            </Container>
        </>
    );
};
