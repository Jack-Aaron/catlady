import React, { useEffect, useState } from "react";
import "./foodtable.css"
import API from "../../utils/API"
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function FoodTable() {
    const [state, setState] = useState([]);

    useEffect(() => {
        API.getPetFood().then((food) => {
            setState(food.data);
        });
    }, []);

    const noFoods = <div> No Pet Foods Found</div>;

    return (
        <Container>
            <Row>
                <Col >

                    <h2>Pet Food List and Nutrition Info</h2>
                </Col>
            </Row>
            <Row>
                <Col>

                    {
                        state.length !== 0 ?
                            <Table id="petFoods">
                                <tbody>
                                    <tr>
                                        <th>Food Name</th>
                                        <th>Food Type</th>
                                        <th>Ingredients</th>
                                        <th>Protein</th>
                                        <th>Fat</th>
                                        <th>Carbs</th>
                                    </tr>
                                    {state.map((food) => (
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