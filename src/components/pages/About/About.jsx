import React from "react";
import Navbar from "../../atoms/Navbar/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardDeck, Image } from "react-bootstrap";
import Forest from "../../../images/floating-forest.jpg";

export default () => {
    return (
        <>
            <Row className="about-heading">
                <Container>
                    <Row>
                        <Col>
                            <h3
                                style={{
                                    fontSize: "54px",
                                    marginBottom: "3rem",
                                    fontWeight: "lighter",
                                }}
                            >
                                Typwriter going through worldbuilding, writing,
                                storytelling, etc.
                            </h3>
                            <p>We love it all.</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Container className="about-desc">
                <Row>
                    <Col md={6}>
                        <h1 className="text-center">Who we are</h1>
                        <p>
                            We are writers. We love creativity. We love building
                            rich characters. We love building brand new worlds.
                            We love writing stories that we lose ourselves in.
                            We wanted a place where we could do it all. So we
                            create the Exceptional Wiki.
                        </p>
                        <hr></hr>
                        <h1>What we do</h1>
                        <p>I am a software Engineer.</p>
                    </Col>
                    <Col md={6}>
                        <Image src={Forest} fluid />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
