import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";

export default function PetInfoForm({ form, setForm }) {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  useEffect(() => {
    API.getUser().then((res) => setUserData(res.data));
  }, []);

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

  return (
    <Row className="row justify-content-center pt-5">
      <Col className="col-md-6 col-md-offset-3">
        <Card className="card p-4" id="card" style={{ borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc" }}>
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
                type="text"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">Please enter in lb</Form.Text>
            </Form.Group>
            <Form.Group controlId="IdealWeight">
              <Form.Label>Ideal Weight: </Form.Label>
              <Form.Control
                name="idealWeight"
                type="text"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">Please enter in lb</Form.Text>
            </Form.Group>
            <Form.Group controlId="mealsPerDay">
              <Form.Label>Meals per day: </Form.Label>
              <Form.Control
                name="mealsPerDay"
                type="text"
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
        </Card>
      </Col>
    </Row>
  );
}