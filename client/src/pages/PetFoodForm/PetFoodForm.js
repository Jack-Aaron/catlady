import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import { Input } from '../../components/Form/Form';

function PetFoodForm(props) {
    const [formObject, setFormObject] = useState({})
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
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-md-offset-3">
                    <div className="card p-4" id="card" style={{ borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc" }}>
                        <h2>{props.formname}</h2>
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <Input
                                    onChange={handleChange}
                                    name="name"
                                    type="text"
                                    placeholder="Food Brand" />
                            </div>

                            <button
                                disabled={!(props.formUser && props.formPass)}
                                onClick={handleFormSubmit}
                                type="submit"
                                className="btn btn-default">{props.buttonText}</button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PetFoodForm;
