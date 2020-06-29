import React, { useState } from "react";
import API from "../../utils/API";
import Login_Signup from "../../components/Login_Signup/Login_Signup";
import './SignUp.css'

function SignUp() {
    const [formObject, setFormObject] = useState({})

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
            }).then(setFormObject({}))
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
            >
                <p>Or Log in <a href="./signup.html">here</a></p>
            </Login_Signup>
        </div>
    )
}

export default SignUp