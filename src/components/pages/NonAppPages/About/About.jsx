import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Forest from "../../../../images/floating-forest.jpg";
import Navbar from "../../../atoms/Navbar/Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <Container fluid>
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
                  Typwriter going through worldbuilding, writing, storytelling,
                  etc.
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
                We are writers. We love creativity. We love building rich
                characters. We love building brand new worlds. We love writing
                stories that we lose ourselves in. We wanted a place where we
                could do it all. So we create the Exceptional Wiki.
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
      </Container>
    </>
  );
};