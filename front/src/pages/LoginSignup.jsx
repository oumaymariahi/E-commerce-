import React, { useState } from 'react';
import './CSS/LoginSignup.css';

function LoginSignup() {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            methode: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
           body: JSON.stringify(formData),
        }).then(responseData => rasponse.json()).then(()=> responseData=data)
        if (rasponseData.success){
            localStorage.setItem('auth_token', responseData.tokon);
            window.location.replace("/");

        }
        else{
            alert(responseData.errors)
        }
    };

    const signup = async () => {
        console.log("Signup Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            methode: 'POST',
            headers:{
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
           body: JSON.stringify(formData),
        }).then(responseData => rasponse.json()).then(()=> responseData=data)
        if (rasponseData.success){
            localStorage.setItem('auth_token', responseData.tokon);
            window.location.replace("/");

        }
        else{
            alert(responseData.errors)
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup_fields">
                    {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />}
                    <input name='email' value={formData.email} type="email" onChange={changeHandler} placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                {state === "Sign Up" ? <p className='loginsignup-login'>Already have an account?<span onClick={() => { setState("Login") }}> login here</span></p> : <p className='loginsignup-login'>create an account?<span onClick={() => { setState("Sign Up") }}>Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='agree' id='agree' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
