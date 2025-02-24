import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
// import { createContext, useContext } from "react";
import { toast } from 'react-toastify';

import "./register.css";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : ""
  })

  const { storetokenInLS } = useAuth();

  // handle input

  const handleInput = (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  
    try {
      let response = await fetch(`http://localhost:3000/api/backend/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      // console.log("Register Response:", response);
      let data = await response.json();
      console.log("Register Response:", data);

      if (response.ok) {
        storetokenInLS(response.token);
        // ✅ Correct way to reset form fields
        setUser({
          username: "",
          email: "",
          phone: "",
          password: ""
        });

        toast.success("Registration successful");
        navigate('/login');
      }else{
       toast.error(data.extraDetails ? data.extraDetails : data.message);
      }

      // let data = await response.json();
      // console.log("Register Response:", data);

    } catch (error) {
      console.error("Error:", error);
    }
};

  
  return (
    <div className="register-page">
      <div className="image">
        <img src= "../src/assets/images/registerImg.jpg" alt="Register" />
      </div>
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Name:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your Name" 
              autoComplete="off"
              value = {user.username}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your Email" 
              autoComplete="off" 
              value = {user.email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Enter your Phone Number" 
              autoComplete="off" 
              value = {user.phone}
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your Password" 
              autoComplete="new-password" 
              value = {user.password}
              onChange={handleInput}
            />
          </div>
          <br/>
          <button type="submit" className="btn">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;