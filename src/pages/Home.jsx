import React from 'react'
import Analitycs from '../components/Analitycs'
import "./home.css"

const Home = () => {
  return (
    <>
      <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <p className="subtitle">We are the World Best IT Company</p>
          <h1 className="title">Welcome to Web Development</h1>
          <p className="description">
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Thapa Technical, we
            specialize in providing innovative IT services and solutions
            tailored to meet your unique needs.
          </p>
          <div className="herobuttons">
            <button className="connect">Connect Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="../src/assets/images/home-page.jpg" alt="IT Solutions" />
        </div>
      </div>
  
<Analitycs/>

      {/* section-two */}

      <div className="container-two">
      <div className="hero-section">
        <div className="hero-image">
          <img src="../src/assets/images/home-page.jpg" alt="IT Solutions" />
        </div>
        <div className="hero-content">
            <p className="subtitle">We are the World Best IT Company</p>
            <h1 className="title">Welcome to Web Development</h1>
            <p className="description">Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Thapa Technical, we
                  specialize in providing innovative IT services and solutionstailored to meet your unique needs.</p>
            <div className="herobuttons">
              <button className="connect">Connect Now</button>
              <button className="learn">Learn More</button>
           </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
