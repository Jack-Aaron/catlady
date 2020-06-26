import React, { useState } from "react";
import API from "../../utils/API";
import './SignUp.css'

function SignUp() {
    const [formObject, setFormObject] = useState({})

    function handleChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
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
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-md-offset-3">
                    <div className="card p-4" id="card" style={{borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc"}}>
                        <h2>Sign Up Form</h2>
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                onChange={handleChange}
                                name="username"
                                type="email" 
                                className="form-control" 
                                placeholder="Email (required)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                onChange={handleChange}
                                name="password"
                                type="password" 
                                className="form-control" 
                                placeholder="Password" />
                            </div>
                            <button 
                            disabled={!(formObject.username && formObject.password)}
                            onClick={handleFormSubmit}
                            type="submit" 
                            className="btn btn-default">Sign Up</button>
                        </form>
                        <br />
                        <p>Or Log in <a href="./signup.html">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp