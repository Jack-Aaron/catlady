import React, { useState } from "react";
import {useHistory, useLocation} from "react-router-dom"
import API from "../../utils/API";
import Login_Signup from "../../components/Login_Signup/Login_Signup";
import './Login.css'

function SignUp() {
    const [formObject, setFormObject] = useState({})
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };


    function handleChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.login({
                username: formObject.username,
                password: formObject.password
            }).then(setFormObject({}))
                .then(res => history.replace(from))
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <Login_Signup
                formname={"Login Form"}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                buttonText={"Login"}
                formUser={formObject.username}
                formPass={formObject.password}
            >
                <p>Or Sign Up <a href="/signup">Here</a></p>
            </Login_Signup>
        </div>
    )
}

export default SignUp