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
            
        </div>
    )
}

export default SignUp