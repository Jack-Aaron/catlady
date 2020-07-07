import React, { useState } from "react";
import './Login.css'
import { useHistory } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import API from "../../utils/API";
import LoginSignupForm from "../../components/LoginSignupForm/LoginSignupForm";
import Jumbotron from "react-bootstrap/Jumbotron";

function Login(props) {
    const initalForm = { username: "", password: "" }
    const [formObject, setFormObject] = useState(initalForm)
    let history = useHistory();

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
            }).then(res => {
                props.setUserData(res.data);
                setFormObject(initalForm)
            })
                .then(res => history.push("/"))
                .catch(err => {
                    setFormObject({ ...formObject, err: err.response.status })
                })
        }
    };

    return (
        <>
        <Jumbotron style={{ backgroundColor: '#FFB4A2' }} fluid>
            <h1 style={{
                textAlign: 'center',
                color: '#6D6875',
                fontFamily: 'Lato'
            }}>Manage The Diets Of All Your Pets</h1>
        </Jumbotron>
        <Container>
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
                {formObject.err === 401 ? <div className="alert-danger">Error: Username or password is incorrect</div> : null}
                {formObject.err === 500 ? <div className="alert-danger">Error: Sorry we are currently experiencing issues</div> : null}
            </LoginSignupForm>
        </Container>
    </>
    )
}

export default Login