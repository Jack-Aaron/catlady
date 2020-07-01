import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import { Input } from '../../components/Form/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PetFoodForm(props) {
    const initalForm = {
        name: "",
        caloriesPerPackage: "",
        ozPerPackage: "",
        ingredientsRating: "",
        nutritionRating: ""
    }
    const [formObject, setFormObject] = useState(initalForm)
    const [userData, setUserData] = useState({
        username: "",
        id: "",
    })

    useEffect(() => {
        API.getUser()
            .then(res => {
                setUserData(res.data);
                props.setUserData(res.data);
            })
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefalt();
    };

    return (
        <Row className="justify-content-center">
            <Col lg={6}>
                <h2>Enter a Pet Food</h2>
                <form className="login">
                    <div className="form-group">
                        <Input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder="Food Brand" />
                        <Input
                            onChange={handleChange}
                            name="caloriesPerPackage"
                            type="text"
                            placeholder="Cal Per Package" />
                        <Input
                            onChange={handleChange}
                            name="ozPerPackage"
                            type="text"
                            placeholder="Oz Per Package" />
                        <Input
                            onChange={handleChange}
                            name="ingredientsRating"
                            type="text"
                            placeholder="Ingredient Rating" />
                        <Input
                            onChange={handleChange}
                            name="nutritionRating"
                            type="text"
                            placeholder="Nutrition Rating" />
                    </div>

                    <button
                        onClick={handleFormSubmit}
                        type="submit"
                        className="btn btn-default">Submit</button>
                </form>
            </Col>
        </Row>
    )
}

export default PetFoodForm;
