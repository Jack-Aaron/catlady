import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import question from "../../assets/questionmark.png";
import "./style.css";

import PetFoodDropdown from "../petFoodDropdown/petFoodDropdown";

export default function FinalCalculation({
  setCurrentPet,
  currentPet,
  form,
  setForm,
}) {
  const [state, setState] = useState({
    results: [],
  });
  const [selectedFood, setSelectedFood] = useState([]);

  //Pet Variables
  let name = currentPet.petName;
  let mealNumber = currentPet.mealsPerDay;
  let petType = currentPet.petType;
  let weight = currentPet.currentWeight[currentPet.currentWeight.length - 1];
  let idealWeight = currentPet.idealWeight;

  //Food Variables
  let inputFood = selectedFood.name;
  let ozPerPackage = selectedFood.ozPerPackage;
  let caloriesPerPackage = selectedFood.caloriesPerPackage;
  let caloriesPerOz = caloriesPerPackage / ozPerPackage;

  //General Calculation Variables
  let totalHighEndAmount = 0;
  let totalLowEndAmount = 0;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let packagesPerMonthLow = 0;
  let packagesPerMonthHigh = 0;

  //Diet Variables
  let weightlossCal = (weight / 2.2) * 30 + 70;
  let dietTotal = 0;
  let dietMealOz = 0;

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
  function dietCalculation() {
    console.log("test");
    dietTotal = weightlossCal / caloriesPerOz;
    dietMealOz = dietTotal / mealNumber;
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
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.updateWeight(currentPet._id, form).then((res) => {
      setCurrentPet(res.data);
    });
  }

  const noFood = (
    <>
      <h4>Select a Food to See Feeding Recomendation</h4>
    </>
  );

  const weightLossNot = "";

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
              {idealWeight >= weight ? (
                ""
              ) : (
                <>
                  <h4> Weightloss: </h4>
                  <p>
                    {dietCalculation()}
                    For weightloss aim for{" "}
                    {parseFloat(weightlossCal).toFixed(2)} calories per day.{" "}
                    {weightlossCal < lowEndCalories ? (
                      ""
                    ) : (
                      <>
                        <OverlayTrigger
                          trigger="click"
                          overlay={
                            <Popover id={`popover`}>
                              <Popover.Title as="h3">
                                Why are the calories higher than the low end
                                suggestion?
                              </Popover.Title>
                              <Popover.Content>
                                In some cases suggested calories for weightloss
                                maybe higher or lower than the base level
                                suggested low end. Pet weightloss should always
                                be a slow process for your pet's saftey.
                                Gradually decreasing your pet's food will
                                prevent complications that could lead to more
                                serious illnesses. For more information please
                                tallk to your vet before starting a weightloss
                                regimen.
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <img src={question} id="icon" alt="question" />
                        </OverlayTrigger>
                      </>
                    )}
                  </p>
                  <p>
                    This is about {parseFloat(dietTotal).toFixed(2)} oz per day
                    and {parseFloat(dietMealOz).toFixed(2)} oz per meal.
                  </p>
                </>
              )}
            </>
          )}
          <PetFoodDropdown
            results={state.results}
            currentPet={currentPet}
            handleOnChange={handleOnChange}
          />

          <p>
            {name}'s last recorded weight is {weight} lb's.
          </p>
          <Form>
            <Row>
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
                  className="btn btn-primary"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
