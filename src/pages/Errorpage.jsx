import React from 'react'
import { NavLink } from 'react-router-dom'
import "./error.css"

const Errorpage = () => {
  return (
    <>
    <div className="container">
      <h1 className="error-code">404</h1>
      <p className="error-message">SORRY! PAGE NOT FOUND</p>
      <p className="error-description">
        Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
      </p>
      <div className="button-group">
      <NavLink to="/"><button className="button">Back to Home</button></NavLink>
      <NavLink to="/contact"><button className="button">REPORT PROBLEM</button></NavLink>
      </div>
    </div>
    </>
  )
}

export default Errorpage
