import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function FinalCalculation({ currentPet,form,setForm }) {
  const [state, setState] = useState({
    results: [],
  });
  const [selectedFood, setSelectedFood] = useState([]);

  let name = currentPet.petName;
  let mealNumber = currentPet.mealsPerDay;
  let petType = currentPet.petType;
  let weight = currentPet.currentWeight[currentPet.currentWeight.length - 1];
  let idealWeight = currentPet.idealWeight;
  let inputFood = selectedFood.name;
  let ozPerPackage = selectedFood.ozPerPackage;
  let caloriesPerPackage = selectedFood.caloriesPerPackage;
  let totalHighEndAmount = 0;
  let totalLowEndAmount = 0;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let packagesPerMonthLow = 0;
  let packagesPerMonthHigh = 0;
  let caloriesPerOz = caloriesPerPackage / ozPerPackage;
  let weightlossCal = (weight / 2.2) * 30 + 70;

  if (petType === "Cat") {
    lowEndCalories = weight * 20;
    highEndCalories = weight * 35;
    totalLowEndAmount = lowEndCalories / caloriesPerOz;
    totalHighEndAmount = highEndCalories / caloriesPerOz;
    calculatePackagesPerMonth();
  } else {
    lowEndCalories = weight * 25;
    totalLowEndAmount = lowEndCalories / caloriesPerOz;
    highEndCalories = weight * 30;
    totalHighEndAmount = highEndCalories / caloriesPerOz;
    calculatePackagesPerMonth();
  }

  function calculatePackagesPerMonth() {
    packagesPerMonthLow = (lowEndCalories / caloriesPerPackage) * 30;
    packagesPerMonthHigh = (highEndCalories / caloriesPerPackage) * 30;
  }

  useEffect(() => {
    API.getPetFood().then((food) => {
      setState({
        ...state,
        results: food.data,
      });
    });
  }, []);

  const handleOnChange = (event) => {
    const foodId = event.target.value;

    API.getCurrentFood(foodId)
      .then((res) => {
        setSelectedFood(res.data);
      })
      .catch((err) => console.log(err));
  };

  function handleChange(event) {
    const { name, value } = event.target;
        setForm({ ...form, [name]: value })
  };

  function handleSubmit(event) {
    event.preventDefault()

  }

  const noFood = <><h4>Select a Food to See Feeding Recomendation</h4></>

  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-6 col-md-offset-3">
        <div
          className="card p-4"
          id="card"
          style={{ borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc" }}
        >
          <h1>{name}</h1>
          <p>
            Your {petType} will need between {lowEndCalories} and{" "}
            {highEndCalories} calories per day.
          </p>
          {selectedFood.length === 0 ? (
            noFood
          ) : (
            <>
              <p>
                Using {inputFood} they will need between{" "}
                {parseFloat(totalLowEndAmount).toFixed(2)} and{" "}
                {parseFloat(totalHighEndAmount).toFixed(2)} oz per day to
                maintain their current weight.
              </p>
              <p>
                That is between{" "}
                {parseFloat(totalLowEndAmount / mealNumber).toFixed(2)} and{" "}
                {parseFloat(totalHighEndAmount / mealNumber).toFixed(2)} oz per
                meal.
              </p>
              <p>
                In a 30 day period you will need between{" "}
                {Math.ceil(packagesPerMonthLow)} and{" "}
                {Math.ceil(packagesPerMonthHigh)} packages of {inputFood}.
              </p>
              <p>
                For weightloss aim for {parseFloat(weightlossCal).toFixed(2)}{" "}
                calories per day.
                <OverlayTrigger
                trigger="click"
                  overlay={
                    <Popover id={`popover`}>
                      <Popover.Title as="h3">Why are the calories higher than the low end suggestion?</Popover.Title>
                      <Popover.Content>
                      Pet weightloss should always be a slow process for your pet's saftey. Gradually decreasing your pet's food will prevent complications that could lead to more serious illnesses.
                      For more information please tallk to your vet before starting a weightloss regimen. 
                      </Popover.Content>
                      </Popover>
                  }
                >
                  <button>?</button>
                </OverlayTrigger>
              </p>
            </>
          )}
          <Form.Group>
            <Form.Control as="select"
              onChange={handleOnChange}
            >
              <option value="0">Choose...</option>
              {state.results.length > 0
                ? state.results
                  .filter((food) => {
                    //Remove petfood that do not match the current petType
                    return food.petType.indexOf(currentPet.petType) >= 0;
                  })
                  .map((food, index) => {
                    return <option key={index} value={food._id}>{food.name}</option>;
                  })
                : "No Foods Found"}
            </Form.Control>
            <br />
          </Form.Group>
          <p >
            {name}'s last recorded weight is {weight} lb's.
      </p>
          <Form>
            <Row >
              <Col md={6}>
                <Form.Control
                  onChange={handleChange}
                  name="currentWeight"
                  type="text"
                  className="form-control"
                  placeholder="Update weight"
                />
              </Col>
              <Col xs={2}>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary">Submit
            </Button>
              </Col>
            </Row>
          </Form>

        </div>
      </div>
    </div>
  );
}
