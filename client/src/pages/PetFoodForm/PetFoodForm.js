import React from 'react';
import { useHistory, useLocation } from "react-router-dom"
import API from '../../utils/API';
import { Input } from '../../components/Form/Form';
import Form from "react-bootstrap/Form";

function PetFoodForm({ form, setForm }) {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (form.name && form.calPer && form.ozPer && form.petType) {
            API.savePetFood({
                name: form.name,
                petType: form.petType,
                caloriesPerPackage: form.calPer,
                ozPerPackage: form.ozPer,
                ingredientsRating: form.ing,
                nutritionRating: form.nut,
                ingredients: form.ingredients,
                protein: form.protein,
                fat: form.fat,
                carbs: form.carbs,
                ash: form.ash,
                fiber: form.fiber,
                moisture: form.moisture,
            })
                .then(res => history.replace(from))
                .catch(err => console.log(err))
        }
    };

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-md-6 col-md-offset-3">
                <div className="card p-4" id="card" style={{ borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc" }}>
                    <h2>Enter a Pet Food</h2>
                    <form className="login">
                        <div className="form-group">
                            <Form.Label>Pet Food Name: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="name"
                                type="text" />
                            <Form.Label className="mt-3">Pet Food Type: </Form.Label>
                            <Form.Control
                                name="petType"
                                as="select"
                                onChange={handleChange}
                            >
                                <option> </option>
                                <option>Cat</option>
                                <option>Dog</option>
                            </Form.Control>
                            <Form.Label className="mt-3">Cal Per Package: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="calPer"
                                type="text" />
                            <Form.Label className="mt-3">Oz Per Package: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ozPer"
                                type="text" />
                            <Form.Label className="mt-3">Ingredient Rating: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ing"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Nutrition Rating: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="nut"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Ingredients: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ingredients"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Protein: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="protein"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Fat: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="fat"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Carbs: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="carbs"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Ash: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ash"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Fiber: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="fiber"
                                type="text"
                                placeholder="(Optional)" />
                            <Form.Label className="mt-3">Moisture: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="moisture"
                                type="text"
                                placeholder="(Optional)" />
                        </div>
                        <button
                            disabled={!(form.name && form.calPer && form.ozPer && form.petType)}
                            onClick={handleFormSubmit}
                            type="submit"
                            className="btn btn-primary">Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PetFoodForm;
