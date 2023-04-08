import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add Event</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Event Title</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Event Description</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Category Type</Form.Label>
                                            <Form.Control as="select">
                                                <option>Free</option>
                                                <option>Paid</option>
                                            </Form.Control>
                                        </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Event Type</Form.Label>
                                            <Form.Control as="select">
                                                <option>Free</option>
                                                <option>Paid</option>
                                            </Form.Control>
                                        </Form.Group>
                                            <Button variant="primary">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="email" placeholder="Text" />
                                        </Form.Group>


                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control type="text" placeholder="Text" />
                                        </Form.Group>


                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Start Time</Form.Label>
                                            <Form.Control type="datetime-local" placeholder="Text" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>End Time</Form.Label>
                                            <Form.Control type="datetime-local" placeholder="Text" />
                                        </Form.Group>
                                       
                                       
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                               
                            </Card.Body>
                        </Card>
                     
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
