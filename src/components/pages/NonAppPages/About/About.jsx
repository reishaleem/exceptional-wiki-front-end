import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";
import OnePiece from "../../../../images/onepieceworld.jpg";
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
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Worldbuilding",
                                                "Writing",
                                                "Storytelling",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                                <p>We love it</p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Container className="about-desc">
                    <Row>
                        <Col md={6}>
                            <h1 className="text-center">Who we are</h1>
                            <p>
                                I am a story lover. I love huge worlds and the
                                countless untold stories within them. There is
                                nothing like losing myself in the endless seas
                                of the Grand Line, the secret passageways within
                                Hogwarts, or the mists of the Final Empire. And
                                what I love most is that we are all capable of
                                inventing our own, mythical story. We just need
                                a place to do it. So, I created the Exceptional
                                Outliner.
                            </p>
                            <hr></hr>
                            <h1 className="text-center">What we do</h1>
                            <p>
                                I am a software Engineer studying at Ohio State
                                University. My goal was to create this
                                application to combine features from different
                                apps like{" "}
                                <a href="https://plotfactory.com">
                                    Plot Factory
                                </a>{" "}
                                and{" "}
                                <a href="https://worldanvil.com">World Anvil</a>
                                . Hopefully when this is complete, it will
                                provide a nice combination of world building,
                                outlining, and writing. Check out the{" "}
                                <a href="https://github.com/reishaleem/exceptional-wiki-front-end">
                                    repository
                                </a>{" "}
                                on GitHub to see more information on how this
                                app was made.
                            </p>
                        </Col>
                        <Col md={6}>
                            <Image src={OnePiece} fluid />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};
