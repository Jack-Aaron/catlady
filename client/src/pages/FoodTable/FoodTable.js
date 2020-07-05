import React, { useEffect, useState } from "react";
import "./foodtable.css"
import API from "../../utils/API"
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


function FoodTable() {
    const [foodState, setFoodState] = useState([]);

    function handleChange(event) {
        const foodType = (event.target.value)

        API.getPetFood().then((food) => {
            const allFood = food.data;
            const selectedFoodType = allFood.filter(food => food.petType === foodType)
            setFoodState(selectedFoodType);
        });

    }

    const noFoods = <h3> Choose A Pet Food Type From The Dropdown</h3>;

    return (
        <Container>
            <Row>
                <Col >
                    <h2>Pet Food List and Nutrition Info</h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col lg={3}>
                    <Form.Group>
                        <Form.Control as="select"
                            onChange={handleChange}
                        >
                            <option value="0">Search By Food Type</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </Form.Control>
                        <br />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>

                    {
                        foodState.length !== 0 ?
                            <Table striped id="petFoods" style={{border:"solid", borderColor:"#B5838D"}}>
                                <tbody>
                                    <tr>
                                        <th>Food Name</th>
                                        <th>Food Type</th>
                                        <th>Ingredients</th>
                                        <th>Protein</th>
                                        <th>Fat</th>
                                        <th>Carbs</th>
                                    </tr>
                                    {foodState.map((food) => (
                                        <tr key={food._id}>
                                            <td>{food.name}</td>
                                            <td>{food.petType} Food</td>
                                            <td>{food.ingredients}</td>
                                            <td>{food.protein}</td>
                                            <td>{food.fat}</td>
                                            <td>{food.carbs}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </Table>
                            : noFoods}

                </Col>
            </Row>
        </Container>

    )


}



export default FoodTable