import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./service.css"
import {useAuth} from '../store/auth'
import Header from '../components/Header'
import "../components/header.css"

const Service = () => {
  const {services} = useAuth()
  const navigate = useNavigate()

  const handleBookNow = (courseId) => {
    navigate(`/course/${courseId}`)
  }

  return (
    <>
      <Header />
      <div className="service-section">
      <div className="containerservice">
      <h1 className="title">
        Services
        <span className="underline"></span>
     </h1>
      <div className="card-container">

{
    services.map((curElem, index) => {
        const {price, description, provider, service, image, _id} = curElem
        return (
            <div className="card" key={index}>
              <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" alt="Illustration of people working on a computer and various digital tools" className="card-image"/>
            <div className="card-info">
                <span>{provider}</span>
                <span>{price}</span>
            </div>
            <h2 className="card-title">{service}</h2>
            <p className="card-description">{description}</p>
            <button className="book-now-btn" onClick={() => handleBookNow(_id)}>Book Now</button>
            </div>
        )
    })
} 
    </div>
    </div>
    </div>
    </>
  )
}

export default Service;
