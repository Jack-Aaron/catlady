import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import API from "../../utils/API";
import Login_Signup from "../../components/Login_Signup/Login_Signup";
import './SignUp.css'

function SignUp() {
    const initalForm = { username: "", password: "" }
    const [formObject, setFormObject] = useState(initalForm)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    function handleChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.username && formObject.password) {
            API.saveUser({
                username: formObject.username,
                password: formObject.password
            }).then(setFormObject(initalForm))
                .then(res => history.replace(from))
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <Login_Signup
                formname={"Sign Up Form"}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
                buttonText={"Sign Up"}
                formUser={formObject.username}
                formPass={formObject.password}
                uValue={formObject.username || ""}
                pValue={formObject.password || ""}
            >
                <p>Or Login <a href="/">Here</a></p>
            </Login_Signup>
        </div>
    )
}

export default SignUp