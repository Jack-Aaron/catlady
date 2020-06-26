import React from "react";
export const FinalCalculation = (props) => {
  let weight = 10;
  let lowEndCalories = 0;
  let highEndCalories = 0;
  let name = "Linus";
  let inputFood = "Holistic Select Ocean Fish & Tuna Pate Recipe Grain-Free Canned Cat & Kitten Food";
  let petType = "cat";
  let caloriesPerPackage = 496;
  let ozPerPackage = 13;
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
  <p>Using {inputFood} they will need between {parseFloat(totalLowEndAmount).toFixed(2)} and {parseFloat(totalHighEndAmount).toFixed} oz per day to maintain their current weight.</p>
  <p>That is between {parseFloat(totalLowEndAmount/mealNumber).toFixed(2)} and {parseFloat(totalHighEndAmount/mealNumber).toFixed(2)} oz per meal.</p>
    </div>
  );
};
