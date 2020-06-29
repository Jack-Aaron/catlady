import React, { useState } from "react";
import {useHistory, useLocation} from "react-router-dom"
import API from "../../utils/API";
import LoginSignupForm from "../../components/LoginSignupForm/LoginSignupForm";
import './Login.css'

function SignUp() {
    const initalForm ={username: "", password: ""}
    const [formObject, setFormObject] = useState(initalForm)
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
            }).then(setFormObject(initalForm))
                .then(res => history.replace(from))
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <LoginSignupForm
                formname={"Login Form"}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                buttonText={"Login"}
                formUser={formObject.username}
                formPass={formObject.password}
                uValue={formObject.username || ""}
                pValue={formObject.password || ""}
            >
                <p>Or Sign Up <a href="/signup">Here</a></p>
            </LoginSignupForm>
        </div>
    )
}

export default SignUp