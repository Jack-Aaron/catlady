import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import BrowserRouter, { Link } from "react-router-dom";

export default function PetFoodDropdown({currentPet, results, handleOnChange}){

return(
    <>
          <Form.Group>
          <Form.Control as="select"
            onChange={handleOnChange}
          >
            <option value="0">Choose...</option>
            {results.length > 0
              ? results
                .filter((food) => {
                  //Remove petfood that do not match the current petType
                  return food.petType.indexOf(currentPet.petType) >= 0;
                })
                .map((food, index) => {
                  return <option key={index} value={food._id}>{food.name}</option>;
                })
              : "No Foods Found"}
          </Form.Control>
        </Form.Group>
        <Form.Text className="text-muted">
    Your food not listed? <Link to = "/petfood">Click here to add it!</Link>
  </Form.Text>
  </>
)
            }