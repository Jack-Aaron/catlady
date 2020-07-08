import React, { useState } from "react";
import "./foodtable.css"
import API from "../../utils/API"
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";



function FoodTable() {
    const [foodState, setFoodState] = useState([]);
    const [search, setSearch] = useState("");

    let filteredFoods = foodState.filter(food => JSON.stringify(food).toLowerCase().includes(search))

    function handleChange(event) {
        const foodType = (event.target.value)

        API.getPetFood().then((food) => {
            const allFood = food.data;
            const selectedFoodType = allFood.filter(food => food.petType === foodType)
            setFoodState(selectedFoodType);
        });
    }

    function handleSearch(event) {
        const { value } = event.target;
        setSearch(value)
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
                <Col lg={4}>
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

            {
                foodState.length !== 0 ?
                    <>
                        <Row className="justify-content-center">
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Control 
                                    type="text"
                                    name="search"
                                    placeholder={"Search Foods"}
                                    onChange={handleSearch}
                                    >
                                    </Form.Control>
                                    <br />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Table striped id="petFoods" style={{ border: "solid", borderColor: "#B5838D" }}>
                                    <tbody>
                                        <tr>
                                            <th>Food Brand</th>
                                            <th>Food Name</th>
                                            <th>Food Type</th>
                                            <th>Ingredients</th>
                                            <th>Protein</th>
                                            <th>Fat</th>
                                            <th>Carbs</th>
                                            <th>Ash</th>
                                            <th>Fiber</th>
                                            <th>Moisture</th>
                                        </tr>
                                        {filteredFoods.map((food) => (
                                            <tr key={food._id}>
                                                <td>{food.brand}</td>
                                                <td>{food.name}</td>
                                                <td>{food.petType} Food</td>
                                                <td>{food.ingredients}</td>
                                                <td>{food.protein}%</td>
                                                <td>{food.fat}%</td>
                                                <td>{food.carbs}%</td>
                                                <td>{food.ash}%</td>
                                                <td>{food.fiber}%</td>
                                                <td>{food.moisture}%</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </> : noFoods
            }

        </Container>

    )


}



export default FoodTable