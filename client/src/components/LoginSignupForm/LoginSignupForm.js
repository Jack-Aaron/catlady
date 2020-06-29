import React from "react"

function LoginSignupForm(props) {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-md-offset-3">
                <div className="card p-4" id="card" style={{ borderRadius: "2em", boxShadow: "0px 0px 4px 4px #ccc" }}>
                    <h2>{props.formname}</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                onChange={props.handleChange}
                                name="username"
                                type="email"
                                className="form-control"
                                placeholder="Email (required)"
                                value={props.uValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                onChange={props.handleChange}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                value={props.pValue} />
                        </div>
                        <button
                            disabled={!(props.formUser && props.formPass)}
                            onClick={props.handleFormSubmit}
                            type="submit"
                            className="btn btn-default">{props.buttonText}</button>
                    </form>
                    <br />
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LoginSignupForm