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
            <div className="features-heading">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="heading-underlined">
                                Bring your ideas to life
                            </h1>
                            <p className="lead">
                                Write faster, organize thoughts, find new
                                inspirations, and create something Exceptional.
                            </p>
                        </Col>
                        <Col></Col>
                        <Col md={6} className="offset-md-6 text-md-right">
                            <h1 className="heading-underlined">
                                Feature Rich Outlining and Writing
                            </h1>
                            <p className="lead">
                                A platform so you can enjoy what you are
                                writing, which means your readers will, too.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

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
