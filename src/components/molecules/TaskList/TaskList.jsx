import React from "react";
import {
    Form,
    Button,
    FormControl,
    Col,
    Container,
    ListGroup,
} from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TaskService from "../../../services/tasklist.service";

export default ({ taskListId, tasks, onSubmitNewTask }) => {
    const { register, handleSubmit, errors } = useForm();

    const [taskList, setTaskList] = useState(tasks);

    const [newTaskName, setNewTaskName] = useState("");

    function onChangeNewTaskName(e) {
        setNewTaskName(e.target.value);
    }

    const onSetTaskComplete = (data) => {
        console.log(data);
    };

    return (
        <Container fluid>
            <Form onSubmit={handleSubmit(onSubmitNewTask)}>
                <Form.Row>
                    <Col md={9}>
                        <Form.Control
                            type="text"
                            name="newTaskName"
                            placeholder="add new task"
                            value={newTaskName}
                            onChange={onChangeNewTaskName}
                            ref={register({
                                required: true,
                                maxLength: 50,
                            })}
                        />
                        {errors.newTaskName && (
                            <Form.Text>This field is required</Form.Text>
                        )}
                    </Col>
                    <Col md={3}>
                        <Button
                            variant="primary"
                            type="submit"
                            className="d-inline-block"
                        >
                            Create
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            <Form className="mt-2" onSubmit={handleSubmit(onSetTaskComplete)}>
                <Form.Check type="checkbox">
                    {taskList &&
                        taskList.map((task, i) => {
                            return (
                                <ListGroup.Item className="border-0" key={i}>
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label>
                                        {task.task}
                                    </Form.Check.Label>
                                </ListGroup.Item>
                            );
                        })}
                </Form.Check>
            </Form>
        </Container>
    );
};
