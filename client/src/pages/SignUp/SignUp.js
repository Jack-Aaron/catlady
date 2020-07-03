import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import API from "../../utils/API";
import LoginSignupForm from "../../components/LoginSignupForm/LoginSignupForm";
import './SignUp.css'

function SignUp() {
    const initalForm = { username: "", password: "" }
    const [formObject, setFormObject] = useState(initalForm)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } };

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
                .catch(err => {
                    setFormObject({...formObject, err: err.response.status})
                });
        }
    };

    return (
        <div className="container">
            <LoginSignupForm
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
                {formObject.err === 422 ? <div className="alert-danger">Error: Username already exists</div> : null}
                {formObject.err === 500 ? <div className="alert-danger">Error: Sorry we are currently experiencing issues</div> : null}
            </LoginSignupForm>
        </div>
    )
}

export default SignUp