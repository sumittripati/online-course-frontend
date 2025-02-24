import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from '../store/auth'
import './navbar.css'
const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className='nav-container'>
            <div>
                <h2>FullStack</h2>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    {isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink></li> : <>
                      <li><NavLink to="/register">Register</NavLink></li>
                      <li><NavLink to="/login">Login</NavLink></li>
                    </>}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar