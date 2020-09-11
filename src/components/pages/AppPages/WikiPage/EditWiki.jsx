import React, { useState, useEffect } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm, Controller } from "react-hook-form";

import AuthService from "../../../../services/auth.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import UniverseSidebarWrapper from "../../../organisms/Wrappers/UniverseSidebarWrapper";
import WikiService from "../../../../services/wiki.service";
import WSYIWYGEditor from "../../../atoms/WYSIWYGEditor/WSYIWYGEditor";
import WikiTaskList from "../../../ImportedComponents/WikiTaskList";

export default () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }

    const { register, handleSubmit, errors, control } = useForm({
        mode: "onChange",
    });

    const { universeId, wikiId } = useParams();
    //const [universe, setUniverse] = useState({});
    const [wiki, setWiki] = useState({});

    const [wikiLoaded, setWikiLoaded] = useState(false);

    const [wikiName, setWikiName] = useState("");
    const [wikiBody, setWikiBody] = useState("h"); // going with just one body for now...

    useEffect(() => {
        // UniverseService.getUniverse(universeId).then((response) => {
        //   setUniverse(response.data);
        // });
        WikiService.getWiki(universeId, wikiId).then((response) => {
            setWiki(response.data);
            setWikiLoaded(true);
            setWikiBody(response.data.body);
            setWikiName(response.data.name);
        });
    }, [universeId, wikiId]);
    console.log(wiki);

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    function onChangeWikiName(e) {
        setWikiName(e.target.value);
    }

    const onSubmit = (data) => {
        setMessage("");
        setSuccessful(false);

        const body = data.editorContent ? data.editorContent : wikiBody;
        WikiService.updateWiki(universeId, wiki.id, wikiName, body).then(
            (response) => {
                setMessage("Wiki updated successfully!");
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
        console.log(data);
    };
    //console.log(successful);

    return (
        <>
            <Container fluid style={{ paddingLeft: "0px" }}>
                <AppNavbar />
                <UniverseSidebarWrapper universeId={universeId}>
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    {!wikiLoaded && <h2>Loading...</h2>}
                                    {wikiLoaded && (
                                        <>
                                            <Form
                                                id="save-wiki-form"
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <Form.Group controlId="formWikiName">
                                                    <Form.Label>
                                                        Title
                                                    </Form.Label>
                                                    <Form.Control
                                                        size="lg"
                                                        type="text"
                                                        name="wikiName"
                                                        value={wikiName}
                                                        onChange={
                                                            onChangeWikiName
                                                        }
                                                        ref={register({
                                                            required: true,
                                                            maxLength: 50,
                                                        })}
                                                    />
                                                    <Form.Text className="text-muted">
                                                        If you cannot think of a
                                                        name, be sure to check
                                                        out the Generator for
                                                        ideas!
                                                    </Form.Text>
                                                    {errors.wikiName && (
                                                        <Form.Text>
                                                            This field is
                                                            required
                                                        </Form.Text>
                                                    )}
                                                </Form.Group>

                                                <Form.Group controlId="formWikiBody">
                                                    <Form.Label>
                                                        Wiki body
                                                    </Form.Label>
                                                    <Controller
                                                        as={
                                                            <WSYIWYGEditor
                                                                initValue={
                                                                    wiki.body
                                                                }
                                                            />
                                                        }
                                                        name="editorContent"
                                                        control={control}
                                                    />
                                                </Form.Group>
                                            </Form>
                                            {message && (
                                                <div className="form-group">
                                                    <div
                                                        className={
                                                            successful
                                                                ? "alert alert-success"
                                                                : "alert alert-danger"
                                                        }
                                                        role="alert"
                                                    >
                                                        {message}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="mb-4">
                                <Card.Body className="text-center">
                                    {!wikiLoaded && <h2>Loading...</h2>}
                                    {wikiLoaded && (
                                        <>
                                            <ButtonGroup
                                                className="mr-2"
                                                aria-label="First group"
                                            >
                                                <Link
                                                    to={`/app/universes/${universeId}/wikis`}
                                                >
                                                    <Button
                                                        variant="primary"
                                                        type="button"
                                                    >
                                                        Cancel
                                                    </Button>
                                                </Link>
                                            </ButtonGroup>
                                            <ButtonGroup
                                                className="mr-2"
                                                aria-label="Second group"
                                            >
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    key="submit"
                                                    form="save-wiki-form"
                                                >
                                                    Save
                                                </Button>
                                            </ButtonGroup>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                            <WikiTaskList id={wikiId} />
                        </Col>
                    </Row>
                </UniverseSidebarWrapper>
            </Container>
        </>
    );
};
