import React from 'react'
import "./service.css"
import {useAuth} from '../store/auth'

const Service = () => {
  const {services} = useAuth()
  return (
    <>
      <div className="service-section">
      <div className="containerservice">
      <h1 className="title">
        Services
        <span className="underline"></span>
     </h1>
      <div className="card-container">

{
    services.map((curElem, index) => {
        const {price, description, provider, service} = curElem
        return (
            <div className="card" key={index}>
            <img src=""alt="Illustration of people working on a computer and various digital tools" className="card-image"/>
            <div className="card-info">
                <span>{provider}</span>
                <span>{price}</span>
            </div>
            <h2 className="card-title">{service}</h2>
            <p className="card-description">{description}</p>
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
