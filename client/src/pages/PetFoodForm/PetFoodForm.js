import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import API from '../../utils/API';
import { Input } from '../../components/Form/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PetFoodForm(props) {
    const initalForm = {
        name: "",
        calPer: "",
        ozPer: "",
        ing: "",
        nut: ""
    }
    const [form, setForm] = useState(initalForm)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    useEffect(() => {
        API.getUser()
            .then(res => {
                props.setUserData(res.data);
            })
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(event)
        if (form.name && form.calPer && form.ozPer && form.ing && form.nut) {
            API.savePetFood({
                name: form.name,
                caloriesPerPackage: form.calPer,
                ozPerPackage: form.ozPer,
                ingredientsRating: form.ing,
                nutritionRating: form.nut
            })
                .then(res => {
                    setForm(initalForm)
                    history.replace(from)
                })
                .catch(err => console.log(err))
        }
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
                            placeholder="Food Brand"
                            value={form.name || ""} />
                        <Input
                            onChange={handleChange}
                            name="calPer"
                            type="text"
                            placeholder="Cal Per Package"
                            value={form.calPer || ""} />
                        <Input
                            onChange={handleChange}
                            name="ozPer"
                            type="text"
                            placeholder="Oz Per Package"
                            value={form.ozPer || ""} />
                        <Input
                            onChange={handleChange}
                            name="ing"
                            type="text"
                            placeholder="Ingredient Rating"
                            value={form.ing || ""} />
                        <Input
                            onChange={handleChange}
                            name="nut"
                            type="text"
                            placeholder="Nutrition Rating"
                            value={form.nut || ""} />
                    </div>
                    <button
                        onClick={handleFormSubmit}
                        type="submit"
                        className="btn btn-default">Submit
                    </button>
                </form>
            </Col>
        </Row>
    )
}

export default PetFoodForm;
