import React from "react";
export const FinalCalculation = (props) => {
  let weight = 20;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let name = "Frank";
  let inputFood = "Merrick Something or other";
  let petType = "dog";
  let caloriesPerPackage = "500";
  let ozPerPackage = 10;
  let mealNumber = 3;
  let totalHighEndAmount = 0;
  let totalLowEndAmount = 0;

  let caloriesPerOz = caloriesPerPackage / ozPerPackage;


  if (petType === "cat") {
    lowEndCalories = weight * 20;
    totalLowEndAmount = lowEndCalories/caloriesPerOz;
    highEndCalories = weight * 35;
    totalHighEndAmount = highEndCalories/caloriesPerOz;
  } else {
    lowEndCalories = (weight * 25);
    totalLowEndAmount = lowEndCalories/caloriesPerOz;
    highEndCalories = weight * 30;
    totalHighEndAmount = highEndCalories/caloriesPerOz;

  }

  return (
    <div>
      <h1>{name}</h1>
      <p>
  Your {petType} will need between {lowEndCalories} and {highEndCalories} calories per day.
      </p>
  <p>Using {inputFood} they will need between {totalLowEndAmount} and {totalHighEndAmount} oz per day to maintain their current weight.</p>
  <p>That is between {parseFloat(totalLowEndAmount/mealNumber).toFixed(2)} and {parseFloat(totalHighEndAmount/mealNumber).toFixed(2)} oz per meal.</p>
    </div>
  );
};
