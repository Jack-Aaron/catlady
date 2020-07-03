import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function PetInfoForm({ form, setForm }) {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/petfood" } };

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (form.petName && form.petType && form.currentWeight && form.idealWeight) {
        API.savePet({
          petName: form.petName,
          petType: form.petType,
          currentWeight: form.currentWeight,
          idealWeight: form.idealWeight,
          mealsPerDay: form.mealsPerDay,
          userId: userData.id,
        })
            .then(res => {
                history.replace(from)
            })
            .catch(err => console.log(err))
    }
};

  useEffect(() => {
    API.getUser().then((res) => setUserData(res.data));
  }, []);

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group controlId="petName">
            <Form.Label>Pet Name: </Form.Label>
            <Form.Control
              name="petName"
              type="text"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="petType">
            <Form.Label>Pet Type: </Form.Label>
            <Form.Control
              name="petType"
              as="select"
              onChange={handleChange}
            >
              <option> </option>
              <option>Cat</option>
              <option>Dog</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="currentWeight">
            <Form.Label>Current Weight: </Form.Label>
            <Form.Control
              name="currentWeight"
              type="number"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>
          <Form.Group controlId="IdealWeight">
            <Form.Label>Ideal Weight: </Form.Label>
            <Form.Control
              name="idealWeight"
              type="number"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">Please enter in lb</Form.Text>
          </Form.Group>
      <Form.Group controlId="mealsPerDay">
            <Form.Label>Meals per day: </Form.Label>
            <Form.Control
              name="mealsPerDay"
              type="number"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">How many times a day do you feed this pet?</Form.Text>
          </Form.Group>
    
          <Button
            disabled={!(form.petType && form.petName && form.currentWeight && form.idealWeight)}
            type="button"
            onClick={handleFormSubmit}
          > Submit</Button>

        </Form>
      </Col>
    </Row>
  );
}