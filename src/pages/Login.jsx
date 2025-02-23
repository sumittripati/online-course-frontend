import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './login.css';

let URL = "http://localhost:3000/api/backend/login";

const Login = () => {

  const navigate = useNavigate();
  
  let [loginuser, setLoginuser] = useState({
    email: "",
    password: ""
  });

  const { storetokenInLS } = useAuth();

   // Handle input values
   let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginuser({
      ...loginuser,
      [name]: value
    });
  };
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginuser)
      });
  
      let data = await response.json(); // Convert response to JSON
      console.log("Login Response Data:", data);
  
      if (response.ok) {
        if (data.token) {  // Ensure token exists before storing
          storetokenInLS(data.token);
          console.log("Token stored successfully:", data.token);
        } else {
          console.error("Token is missing in response:", data);
        }
  
        alert("Login successful");
        setLoginuser({ email: "", password: "" }); // Reset form
        navigate('/');
      } else {
        alert("Login failed: " + (data.message || "Unknown error"));
      }
  
    } catch (error) {
      console.error("Error in the login react page:", error);
    }
  };  

  return (
    <>
      <section className="login-page">
        <div className="image">
          <img src="../src/assets/images/login.jpg" alt="login-image" />
        </div>
        <div className="login-form">
          <div>
            <h2>Login Form</h2>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  autoComplete="off"
                  value={loginuser.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password">Password :</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  autoComplete="off"
                  value={loginuser.password}
                  onChange={handleInput}
                />
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login