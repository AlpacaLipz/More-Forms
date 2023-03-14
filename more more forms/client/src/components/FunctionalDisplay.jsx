import React, { useState } from "react";

const FunctionalDisplay = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    
    const makeForm = (e) => {
        console.log(e)
        e.preventDefault();
        const user = {firstname, lastname, email, password, confirmpassword};
        setHasBeenSubmitted( true );
    };

// setState ({...state,firstname, lastname, email, password, confirmpassword})

    const handleFirstName = (e) => {
        const newFirstName = e.target.value.length;
        setFirstName(e.target.value);

        if (newFirstName < 1) {
            setFirstNameError("You must provide a first name.");
        }else if(newFirstName < 3){
            setFirstNameError("You must provide a first name longer then 3 characters ");
        }else{
            setFirstNameError("");
        }
    };
    const handleLastName = (e) => {
        const newLastName = e.target.value.length;
        setLastName(e.target.value);

        if (newLastName < 1) {
            setLastNameError("You must provide a last name.");
        }else if(newLastName < 3){
            setLastNameError("You must provide a last name longer then 3 characters ");
        }else{
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        const newEmail = e.target.value.length;
        setEmail(e.target.value);
        if (newEmail < 1) {
            setEmailError("You must provide an Email.");
        }else if(newEmail < 5){
            setEmailError("You must provide a Email longer then 5 characters ");
        }else{
            setEmailError("");
        }
    };
    const handlePassword = (e) => {
        const newPassword = e.target.value.length;
        setPassword(e.target.value);
        if (newPassword < 1) {
            setPasswordError("You must provide a password.");
        }else if(newPassword < 5){
            setPasswordError("You must provide a password longer then 8 characters ");
        }else{
            setPasswordError("");
        }
    };
    const handleConfirmPassword = (e) => {
        const newConfirmPassword = e.target.value.length;
        const newConfirmPasswords = e.target.value;
        setConfirmPassword(e.target.value);
        if (newConfirmPassword < 1) {
            setConfirmPasswordError("You must provide the a password.");
        }else if(newConfirmPassword < 5){
            setConfirmPasswordError("You must provide a password longer then 8 characters ");
        }else if(newConfirmPasswords != password){
            setConfirmPasswordError("You must provide the same password")
        }else{
            setConfirmPasswordError("");
        }
    };




    return (
        <div>
            <form onSubmit= { makeForm }>
                {
                    hasBeenSubmitted ?
                    <h1>Thank you for submitting to my authoritay!</h1>  :
                    <h1>Welcome, please submit the form.</h1>
                }
                <div>
                    <label>First Name:</label>
                    <input value={firstname} onChange={ handleFirstName } />
                    {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input value={lastname} onChange={ handleLastName } />
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input value={email} onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input value={password} onChange={ handlePassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input value={confirmpassword} onChange={ handleConfirmPassword } />
                    {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                    }
                </div>
                <button>Submit</button>
            </form>
            <div>
                <p>First Name: {firstname} </p>
                <p>Last Name:  {lastname} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirmpassword} </p>
            </div>
        </div>
    )
}

export default FunctionalDisplay