import React from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import AuthService from "../../../services/auth.service";
import UniverseSidebar from "../../atoms/Sidebar/UniverseSidebar";

export default ({ children, universeId }) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }
    // const [content, setContent] = useState("");

    return (
        <>
            <Row>
                <Col md={2}>
                    <UniverseSidebar universeId={universeId} />
                </Col>
                <Col md={10} className="app-page-main-content">
                    <Container fluid>{children}</Container>
                </Col>
            </Row>
        </>
    );
};
