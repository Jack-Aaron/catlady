import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";

export const FinalCalculation = ({ petState, form, setPetState, setForm }) => {
  let name = petState.petName;
  let inputFood = form.name;
  let mealNumber = petState.mealsPerDay;
  let petType = petState.petType;
  let totalHighEndAmount = 0;
  let totalLowEndAmount = 0;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let packagesPerMonthLow = 0;
  let packagesPerMonthHigh = 0;
  let weight = petState.currentWeight;
  let caloriesPerPackage = form.calPer;
  let ozPerPackage = form.ozPer;
  let caloriesPerOz = caloriesPerPackage / ozPerPackage;

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

  function calculatePackagesPerMonth(){
    packagesPerMonthLow = (lowEndCalories/caloriesPerPackage) * 30;
    packagesPerMonthHigh = (highEndCalories/caloriesPerPackage) * 30;
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

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPetState({ ...petState, [name]: value });
    console.log(value);
  };


  return (
    <div>
      <h1>{name}</h1>
      <p>
        Your {petType} will need between {lowEndCalories} and {highEndCalories} calories per day.
      </p>
      <p>
        Using {inputFood} they will need between {parseFloat(totalLowEndAmount).toFixed(2)} and {parseFloat(totalHighEndAmount).toFixed(2)} oz per day to maintain their current weight.
      </p>
      <p>
        That is between {parseFloat(totalLowEndAmount / mealNumber).toFixed(2)} and {parseFloat(totalHighEndAmount / mealNumber).toFixed(2)} oz per meal.
      </p>
      <p>
        In a 30 day period you will need between {Math.ceil(packagesPerMonthLow)} and {Math.ceil(packagesPerMonthHigh)}. 
      </p>

      <Form.Group>
        <Form.Control as="select"
         name="name"
         value={form.name}
         onChange={handleOnChange}>
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
