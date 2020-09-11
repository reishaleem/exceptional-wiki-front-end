import React, { useState } from "react";
import { Redirect, Link, useHistory, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import AuthService from "../../../../services/auth.service";
import AppNavbar from "../../../atoms/Navbar/AppNavbar";
import WikiService from "../../../../services/wiki.service";
import UniverseSidebarWrapper from "../../../organisms/Wrappers/UniverseSidebarWrapper";

export default () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser === null || currentUser === undefined) {
        return <Redirect to="/login" />;
    }
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const { universeId } = useParams();

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const [wikiName, setWikiName] = useState("");
    const [wikiBody, setWikiBody] = useState(""); // going with just one body for now...

    function onChangeWikiName(e) {
        setWikiName(e.target.value);
    }

    function onChangeWikiBody(e) {
        setWikiBody(e.target.value);
    }

    const onSubmit = (data) => {
        setMessage("");
        setSuccessful(false);

        WikiService.createWiki(
            currentUser.id,
            universeId,
            wikiName,
            wikiBody
        ).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                console.log(response);
                history.push(
                    `/app/universes/${universeId}/wikis/${response.data.idOfCreatedDocument}/edit`
                );
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

    return (
        <>
            <Container fluid style={{ paddingLeft: "0px" }}>
                <AppNavbar />
                <UniverseSidebarWrapper universeId={universeId}>
                    <Row style={{ paddingBottom: "15px" }}>
                        <Col md={3}>
                            <p>
                                Maybe a picture for the thumbnail of the wiki,
                                then underneath that, maybe the category thing.
                                Not implementing the type yet, though.
                            </p>
                        </Col>
                        <Col md={9}>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group controlId="formWikiName">
                                    <Form.Label>
                                        What is your Wiki's name?
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        name="wikiName"
                                        value={wikiName}
                                        onChange={onChangeWikiName}
                                        ref={register({
                                            required: true,
                                            maxLength: 50,
                                        })}
                                    />
                                    <Form.Text className="text-muted">
                                        If you are not sure of a name now, this
                                        can be changed later. Feel free to check
                                        out the GENERATOR for ideas!
                                    </Form.Text>
                                    {errors.wikiName && (
                                        <Form.Text>
                                            This field is required
                                        </Form.Text>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formWikiBody">
                                    <Form.Label>
                                        Wiki body (for now, all we have is this
                                        paragraph. we'll remove the max length
                                        later)
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="wikiBody"
                                        rows="3"
                                        maxLength="500"
                                        value={wikiBody}
                                        onChange={onChangeWikiBody}
                                        ref={register({ maxLength: 500 })}
                                    />
                                    <Form.Text className="text-right" muted>
                                        {wikiBody.length} / 500
                                    </Form.Text>
                                </Form.Group>

                                <ButtonGroup
                                    className="mr-2"
                                    aria-label="First group"
                                >
                                    <Link
                                        to={`/app/universes/${universeId}/wikis`}
                                    >
                                        <Button variant="primary" type="button">
                                            Cancel
                                        </Button>
                                    </Link>
                                </ButtonGroup>
                                <ButtonGroup
                                    className="mr-2"
                                    aria-label="First group"
                                >
                                    <Button variant="primary" type="submit">
                                        Create
                                    </Button>
                                </ButtonGroup>
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
                        </Col>
                    </Row>
                </UniverseSidebarWrapper>
            </Container>
        </>
    );
};
