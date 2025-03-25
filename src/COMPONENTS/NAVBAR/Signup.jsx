import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store user data in localStorage (for simple authentication simulation)
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Account created successfully!");
        navigate("/Logout");
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" placeholder="Create a password" onChange={handleChange} required />

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/signin">Sign In</a></p>
        </div>
    );
};

export default Signup;
