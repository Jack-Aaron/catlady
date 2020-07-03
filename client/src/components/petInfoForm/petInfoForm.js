import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function PetInfoForm({ setPetState, petState }) {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/petfood" } };

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  useEffect(() => {
    API.getUser().then((res) => setUserData(res.data));
  }, []);

  const handleSubmit = () => {
    console.log(petState);
    savePet();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPetState({ ...petState, [name]: value });
    console.log(value);
  };

  function savePet() {
    API.savePet({
      petName: petState.petName,
      petType: petState.petType,
      currentWeight: petState.currentWeight,
      idealWeight: petState.idealWeight,
      mealsperDay: petState.mealsperDay,
      userId: userData.id,
    });
  }
  return (
    <Row>
      <Col>
        <Form onClick={handleSubmit}>
          <Form.Group controlId="petName">
            <Form.Label>Pet Name: </Form.Label>
            <Form.Control
              type="text"
              name="petName"
              value={petState.petName}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="petType">
            <Form.Label>Pet Type: </Form.Label>
            <Form.Control
              as="select"
              name="petType"
              value={petState.petType}
              onChange={handleOnChange}
            >
              <option> </option>
              <option>Cat</option>
              <option>Dog</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="currentWeight">
            <Form.Label>Current Weight: </Form.Label>
            <Form.Control
              type="number"
              name="currentWeight"
              value={petState.currentWeight}
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>
          <Form.Group controlId="IdealWeight">
            <Form.Label>Ideal Weight: </Form.Label>
            <Form.Control
              type="number"
              name="idealWeight"
              value={petState.idealWeight}
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>
          <Form.Group controlId="mealsPerDay">
            <Form.Label>Meals per day: </Form.Label>
            <Form.Control
              type="number"
              name="mealsPerDay"
              value={petState.mealsperDay}
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">How many times a day do you feed this pet?</Form.Text>
          </Form.Group>

          <Button
            disabled={
              !(
                petState.petType &&
                petState.petName &&
                petState.currentWeight &&
                petState.idealWeight
              )
            }
            type="button"
            onClick={() => history.replace(from)}
          >
            {" "}
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
