import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../../../atoms/Navbar/Navbar";

export default () => {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Container>
                        <h1>Error</h1>
                        <p>
                            The page either does not exist or has yet to be
                            implemented :(
                        </p>
                    </Container>
                </Row>
            </Container>
        </>
    );
};
