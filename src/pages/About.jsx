import React from 'react'
import Analitycs from '../components/Analitycs'
// import { useAuth } from '../store/auth'

const About = () => {

  return (
    <>
      <div className="about-container" style={{ padding: '2rem' }}>
      <div className="hero-section">
        <div className="hero-content" style={{padding:"1rem"}}>
          {/* <p className="subtitle">We are the World Best IT Company</p> */}
          {/* <p>Welcome {user ? `${user.username} to our website` : `to our website`} </p> */}
          <h1 className="title">Why choose Us</h1>
          <p className="description" style={{maxWidth:"550px"}}>
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Thapa Technical, we
            specialize in providing 
          </p>
          <br />
          <p className="description">
            Are you ready to take your business to the next level with cutting-edge IT <br />
            solutions? Look no further! At Thapa Technical, we
            specialize in providing 
          </p>
          <p className="description">
            Are you ready to take your business to the next level with cutting-edge IT <br />
            solutions? Look no further! At Thapa Technical, we
            specialize in providing 
          </p>
          <p className="description">
            Are you ready to take your business to the next level with cutting-edge IT <br />
            solutions? Look no further! At Thapa Technical, we
            specialize in providing 
          </p>
          <p className="description">
            Are you ready to take your business to the next level with cutting-edge IT <br />
            solutions? Look no further! At Thapa Technical, we
            specialize in providing 
          </p>
          <div className="herobuttons">
            <button className="connect">Connect Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
        
        <div className="hero-image" style={{height:"600px"}}>
          <img src="../src/assets/images/home-page.jpg" alt="IT Solutions" />
        </div>
      </div>
      <Analitycs />
      </div>
    </>
  )
}

export default About

