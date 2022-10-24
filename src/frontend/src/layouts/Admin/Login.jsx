import React, {useState} from 'react'
import Dashboard from "./Dashboard";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "admin",
            password: "admin"
        }
    ];

    const errors = {
        uname: "Invalid Username !",
        pass: "Invalid Password !"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "uname", message: errors.uname});
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" name="uname" required/>
                            {renderErrorMessage("uname")}
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" required/>
                            {renderErrorMessage("pass")}
                        </div>
                        <div className="button-container">
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <div className="App">
            {isSubmitted ? <Dashboard/> : renderForm}
        </div>
    );
}

export default Login;