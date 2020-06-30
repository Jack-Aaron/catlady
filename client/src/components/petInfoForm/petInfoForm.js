import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function PetInfoForm() {
  const [petState, setPetState] = useState({
    petName: "",
    petType: "",
    currentWeight: 0,
    idealWeight: 0
  });

  const handleSubmit = () => {
    // setPetState(event.target.value);
    console.log("This is a test of the form: " + JSON.stringify(petState));
    savePet();
  };

  function savePet() {
    API.savePet({
      petName: petState.petName,
      petType: petState.petType,
      currentWeight: petState.currentWeight,
      idealWeight: petState.idealWeight,
    })

  }
  return (
    <Row className="justify-content-center">
      <Col lg={6}>
        <Form onClick={handleSubmit}>
          <Form.Group controlId="petName">
            <Form.Label>Pet Name: </Form.Label>
            <Form.Control
              type="text"
              onChange={(event) =>
                setPetState({ ...petState, petName: event.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="petType">
            <Form.Label>Pet Type: </Form.Label>
            <Form.Control
              as="select"
              onChange={(event) =>
                setPetState({ ...petState, petType: event.target.value })
              }
            >
              <option>Cat</option>
              <option>Dog</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="currentWeight">
            <Form.Label>Current Weight: </Form.Label>
            <Form.Control
              type="number"
              onChange={(event) =>
                setPetState({ ...petState, currentWeight: event.target.value })
              }
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>
          <Form.Group controlId="IdealWeight">
            <Form.Label>Ideal Weight: </Form.Label>
            <Form.Control
              type="number"
              onChange={(event) =>
                setPetState({ ...petState, idealWeight: event.target.value })
              }
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>

          <Button type="button">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
}
