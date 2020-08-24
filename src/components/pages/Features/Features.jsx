import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export default () => {
  return (
    <>
      <Row className="features-heading">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="heading-underlined">Bring your ideas to life</h1>
              <p className="lead">
                Write faster, organize thoughts, find new inspirations, and
                create something Exceptional.
              </p>
            </Col>
            <Col></Col>
            <Col md={6} className="offset-md-6 text-md-right">
              <h1 className="heading-underlined">
                Feature Rich Outlining and Writing
              </h1>
              <p className="lead">
                A platform so you can enjoy what you are writing, which means
                your readers will, too.
              </p>
            </Col>
          </Row>
        </Container>
      </Row>

      <Container className="pt-5">
        <section className="mb-5">
          <h1>Completed Features</h1>
          <hr />
          <Row>
            <Col md={3}>
              <p>
                We are writers. We love creativity. We love building rich
                characters. We love building brand new worlds. We love writing
                stories that we lose ourselves in. We wanted a place where we
                could do it all. So we create the Exceptional Wiki.
              </p>

              <Button variant="danger">{" CREATE YOUR ACCOUNT"}</Button>
            </Col>
            <Col md={9}>
              <CardColumns>
                <Card>
                  <Card.Header>N/A</Card.Header>
                  <Card.Body>
                    <Card.Text>No features yet!</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>
          </Row>
        </section>
        <section className="mb-5">
          <h1>In the Works</h1>
          <hr />
          <Row>
            <Col md={3}>
              <p>
                Our goal is to provide you the best experience on the market. We
                are continously improving to ensure we meet that goal. All user
                feedback is taken seriously, because your experience is what's
                most important.
              </p>
            </Col>
            <Col md={9}>
              <CardColumns>
                <Card>
                  <Card.Header>Online Editor</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Fully featured text editor with all the necessary tools
                      for writing high quality chapters, manuscripts, or just
                      taking notes or outlining.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>Generator</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      The Generator that will generate names for anything, such
                      as characters, weapons, locations, and many more. The
                      Generator will provide users the ability to generate from
                      a given Seed File, as well as understand the etymology of
                      the word, so that their names can still have a known
                      meaning.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>More</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      And much more. Putting this here to see how it looks.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>More</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      And much more. Putting this here to see how it looks.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
