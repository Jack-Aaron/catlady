import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom"
import API from "../../utils/API";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container';
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
                    setFormObject({ ...formObject, err: err.response.status })
                });
        }
    };

    return (
        <div className="container-fluid" style={{width:"100%"}}>
            <Jumbotron style={{ backgroundColor: '#FFB4A2', width:"100%" }} fluid>
                <h1 style={{
                    textAlign: 'center',
                    color: '#6D6875',
                    fontFamily: 'Lato'
                }}>Manage The Diets Of All Your Pets</h1>
            </Jumbotron>
            <Container>
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
            </Container>
        </div>
    )
}

export default SignUp