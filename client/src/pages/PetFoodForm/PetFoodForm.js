import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom"
import API from '../../utils/API';
import { Input } from '../../components/Form/Form';
import Form from "react-bootstrap/Form";

function PetFoodForm({form, setForm}) {
   

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/finalcalculation" } };


    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(event)
        if (form.name && form.calPer && form.ozPer) {
            API.savePetFood({
                name: form.name,
                caloriesPerPackage: form.calPer,
                ozPerPackage: form.ozPer,
                ingredientsRating: form.ing,
                nutritionRating: form.nut
            })
                .then(res => {
                    console.log(form)
                    // setForm(initalForm)
                    history.replace(from)
                })
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
                                type="text"
                                value={form.name || ""} />
                            <Form.Label>Cal Per Package: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="calPer"
                                type="text"
                                value={form.calPer || ""} />
                            <Form.Label>Oz Per Package: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ozPer"
                                type="text"
                                value={form.ozPer || ""} />
                            <Form.Label>Ingredient Rating: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="ing"
                                type="text"
                                placeholder="(Optional)"
                                value={form.ing || ""} />
                            <Form.Label>Nutrition Rating: </Form.Label>
                            <Input
                                onChange={handleChange}
                                name="nut"
                                type="text"
                                placeholder="(Optional)"
                                value={form.nut || ""} />
                        </div>
                        <button
                            disabled = {!(form.name && form.calPer && form.ozPer)}
                            onClick={handleFormSubmit}
                            type="submit"
                            className="btn btn-dark">Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PetFoodForm;
