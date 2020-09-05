import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import Navbar from "../../../atoms/Navbar/Navbar";

export default () => {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row className="features-heading">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1 className="heading-underlined">
                                    Bring your ideas to life
                                </h1>
                                <p className="lead">
                                    Write faster, organize thoughts, find new
                                    inspirations, and create something
                                    Exceptional.
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
                </Row>

                <Container className="pt-5">
                    <section className="mb-5">
                        <h1>Completed Features</h1>
                        <hr />
                        <Row>
                            <Col md={3}>
                                <p>
                                    Features are designed to provide a seamless
                                    experience for both casual and dedicated
                                    writers. Whether you are creating an epic
                                    second world or your story takes place
                                    within a single room, these features aim to
                                    bring you an easy and fun experience.
                                </p>

                                <Button variant="danger">
                                    {" CREATE YOUR ACCOUNT"}
                                </Button>
                            </Col>
                            <Col md={9}>
                                <CardColumns>
                                    <Card>
                                        <Card.Header>User creation</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create an account and sign in
                                                and out. The app uses local
                                                storage to store a JwT token for
                                                authentication and redirecting
                                                if accessing pages the user is
                                                not allowed.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            Universe creation
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create a Universe, which is
                                                simply the world in which your
                                                story takes place. It may be
                                                brand new, like Middle-earth, or
                                                it may take place on Earth as we
                                                know it.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Wiki creation</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create a Wiki, which is an
                                                article linked to your Universe.
                                                A Wiki can be literally
                                                anything, from a character
                                                article to a location article.
                                                With the rich text editor, you
                                                can format your wiki to your
                                                liking, as well as mention other
                                                Wikis to link together related
                                                pages. You can also view Wikis
                                                as if you were viewing them on
                                                an actual wiki-styled website.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Todo List</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Each Universe comes with a Todo
                                                List, where you can create tasks
                                                and set goals for yourself. The
                                                Todo list is split into 4
                                                sections: Priority (includes
                                                pinned tasks, overdue tasks, and
                                                tasks due within a week), Short
                                                Term (includes tasks due within
                                                a month), Long Term (includes
                                                any other tasks, including
                                                undated tasks), and Completed
                                                (includes all tasks marked as
                                                completed). You also have the
                                                option to pin tasks so they
                                                appear in the Priority list, as
                                                well as delete tasks from the
                                                list entirely.
                                            </Card.Text>
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
                                    Our goal is to provide the easiest and most
                                    enjoyable experience around. We are
                                    continously improving to ensure we meet this
                                    goal. All user feedback is taken seriously
                                    and appreciated, because at the end of the
                                    day, your experience is what matters most.
                                </p>
                                <p>
                                    Some of these features are more likely than
                                    others. This application was just a learning
                                    experience, so I don't plan to necessarily
                                    implement all of these, unless I get around
                                    to it.
                                </p>
                            </Col>
                            <Col md={9}>
                                <CardColumns>
                                    <Card>
                                        <Card.Header>Online Editor</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Fully featured editor for
                                                actually writing manuscripts and
                                                outlined. Right now, the editor
                                                is only being used in the Wiki
                                                creation, and it can still use
                                                some work.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Generator</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                The Generator that will generate
                                                names for anything, such as
                                                characters, weapons, locations,
                                                and many more. The Generator
                                                will provide users the ability
                                                to generate from a given Seed
                                                File, as well as understand the
                                                etymology of the word, so that
                                                their names can still have a
                                                known meaning.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Map creation</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Design maps, from world maps to
                                                small town maps, or even maps of
                                                a single building.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Timelines</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create timelines within your
                                                Universe that can apply to
                                                anything, from a character's
                                                life to the entire world's
                                                history
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Family Trees</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create charts in a family tree
                                                style. The main purpose will be
                                                for mapping out the relations of
                                                a family, but it will be
                                                implemented in a way such that
                                                it can be used for any sort of
                                                tree structure. An example may
                                                be how elements in your world
                                                all derive from a single
                                                element.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            Image and File Uploader
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Store images and files used
                                                throughout your Universe and its
                                                Wikis (or anything else).
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            Custom Template Creation
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Create custom templates for your
                                                Universes or other users to use
                                                for anything, such as a map, a
                                                wiki, or an outline.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Notebook</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Use the Notebook to take any
                                                sort of notes that come to mind
                                                regarding literally anything.
                                                This is a simple scratch pad for
                                                things that you may not want to
                                                risk forgetting.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>Sheets</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Slightly different than
                                                Templates, Sheets are used to
                                                jot down information regarding
                                                something in your Universe,
                                                without actually putting it into
                                                the article. A Character Sheet
                                                might include information on
                                                what a character likes to eat,
                                                their daily routine, and other
                                                small details that you, the
                                                author, might want to keep in
                                                mind, but might not want to
                                                share with the rest of the
                                                world. These can be integrated
                                                into Wikis by linking the Sheet
                                                and referencing details, such as
                                                name, age, magic power, etc.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            Questionnaires
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Get your mind working by
                                                checking out a Questionnaire
                                                attached to a certain thing in
                                                your Universe. City
                                                Questionnaires may ask questions
                                                like what is the history of the
                                                city? The demography? Landmarks?
                                                Daily life? Culture? These are
                                                similar to Sheets, but it
                                                provides the questions for the
                                                User to answer, rather than
                                                letting the User simply fill in
                                                the information they already
                                                know.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardColumns>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </Container>
        </>
    );
};
