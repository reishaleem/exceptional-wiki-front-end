import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../../atoms/Navbar/Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container>
                <h1>Create your world.</h1>
                <h1>Plan your novel.</h1>
                <h1>Be Exceptional.</h1>
                <Link to={"/register"}>
                  <Button variant="danger">
                    <FontAwesomeIcon icon="user-plus"></FontAwesomeIcon>
                    {" CREATE YOUR ACCOUNT"}
                  </Button>
                </Link>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <div className="card-section">
          <Container>
            <Row>
              <Col>
                <CardDeck>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h1>
                          <FontAwesomeIcon icon="globe-americas"></FontAwesomeIcon>
                        </h1>
                      </Card.Title>
                      <Card.Title className="text-center">
                        <h4>Expand your world</h4>
                      </Card.Title>
                      <br></br>
                      <Card.Text>
                        With wiki-like pages, create and expand your
                        one-of-a-kind world. Build your characters, countries,
                        magic, and more from scratch, or use the provided
                        questionnaires to get your brain working!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h1>
                          <FontAwesomeIcon icon="tools"></FontAwesomeIcon>
                        </h1>
                      </Card.Title>
                      <Card.Title className="text-center">
                        <h4>Generator</h4>
                      </Card.Title>
                      <br></br>
                      <Card.Text>
                        Create countless ideas and names for anything, including
                        characters, locations, and more. You can corrupt
                        generated words and provide language root options, among
                        many more features!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h1>
                          <FontAwesomeIcon icon="pen"></FontAwesomeIcon>
                        </h1>
                      </Card.Title>
                      <Card.Title className="text-center">
                        <h4>Plan, Organize, Write</h4>
                      </Card.Title>
                      <br></br>
                      <Card.Text>
                        Outline your story, or start from the first chapter.
                        Take advantage of the script and storyboard functions
                        for comics or screenplays. Write high quality stories
                        with our rich manuscript editor.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="test">
          <Col></Col>
          <Col md={6}>
            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: "400",
                marginBottom: "2rem",
              }}
            >
              The tool for creating stories
            </h3>
            <p style={{ fontSize: "18px", marginBottom: "1.5rem" }}>
              Different authors have different styles when it comes to
              outlining. Some will outline every last detail, while others will
              simply put pen to paper and see what happens next. Whatever the
              case may be, we aim to help you keep your stories in order and
              safe, so that you can let your ideas flourish in the best way
              possible.
            </p>
            <p style={{ fontSize: "18px", marginBottom: "1.5rem" }}>
              The Exceptional Outliner is a tool for even the purest gardeners.
              With our simple UI, variety of features, and great support, our
              platform is truly one-of-a-kind. And that is our goal. To be
              different from the others. To truly be - Exceptional.
            </p>
            <p style={{ fontSize: "18px", marginBottom: "1.5rem" }}>
              With this app, you have potential to be the same.{" "}
              <Link to={"/register"}>Begin your journey now.</Link>
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
