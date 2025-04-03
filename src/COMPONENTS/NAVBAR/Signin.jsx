import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signin = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Validate user login
        if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
            alert("Login successful!");
            localStorage.setItem("authToken", "true"); // Simulate authentication token
            navigate("/"); // Redirect to Home page
        } else {
            alert("Invalid email or password!");
        }
        alert("Login successful!");
        navigate("/");
    };

    return (
        <div className="auth-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
        </div>
    );
};

export default Signin;
