import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";

export const FinalCalculation = ({ petState, form }) => {
  let name = petState.petName;
  let inputFood = form.name;
  let mealNumber = 3;
  let petType = petState.petType;
  let totalHighEndAmount = 0;
  let totalLowEndAmount = 0;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let weight = petState.currentWeight;
  let caloriesPerPackage = form.calPer;
  let ozPerPackage = form.ozPer;
  let caloriesPerOz = caloriesPerPackage / ozPerPackage;

  if (petType === "Cat") {
    lowEndCalories = weight * 20;
    highEndCalories = weight * 35;
    totalLowEndAmount = lowEndCalories / caloriesPerOz;
    totalHighEndAmount = highEndCalories / caloriesPerOz;
  } else {
    lowEndCalories = weight * 25;
    totalLowEndAmount = lowEndCalories / caloriesPerOz;
    highEndCalories = weight * 30;
    totalHighEndAmount = highEndCalories / caloriesPerOz;
  }

  const [state, setState] = useState({
    results: [],
  });

  useEffect(() => {
    API.getPetFood().then((food) => {
      setState({
        ...state,
        results: food.data,
      });
    });
  }, []);


  return (
    <div>
      <h1>{name}</h1>
      <p>
        Your {petType} will need between {lowEndCalories} and {highEndCalories}
        calories per day.
      </p>
      <p>
        Using {inputFood} they will need between
        {parseFloat(totalLowEndAmount).toFixed(2)} and
        {parseFloat(totalHighEndAmount).toFixed(2)} oz per day to maintain their
        current weight.
      </p>
      <p>
        That is between {parseFloat(totalLowEndAmount / mealNumber).toFixed(2)}
        and {parseFloat(totalHighEndAmount / mealNumber).toFixed(2)} oz per
        meal.
      </p>

      <Form.Group>
        <Form.Control as="select">
          {state.results.length > 0
            ? state.results.map((food, index) => {
            return <option>{food.name}</option>;
              })
            : "No Foods Found"}
        </Form.Control>
        <br />
      </Form.Group>
    </div>
  );
};
