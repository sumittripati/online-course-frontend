import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import Header from '../components/Header'
import "./home.css"
import "../components/header.css"

const Home = () => {
  const navigate = useNavigate()
  const { services } = useAuth()

  const handleExplore = () => {
    navigate('/service')
  }

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock Your Potential with
            <span className="highlight"> Expert-Led</span> Courses
          </h1>
          <p className="hero-description">
            Transform your skills and advance your career with our comprehensive online courses.
            Learn from industry experts and join a community of lifelong learners.
          </p>
          <button className="cta-button" onClick={handleExplore}>
            Explore Courses
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Expert Instructors</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Courses</span>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-grid">
          {services && services.slice(0, 3).map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image || "https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="} 
                   alt={course.service} 
                   className="course-image" />
              <div className="course-info">
                <h3>{course.service}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span className="course-provider">{course.provider}</span>
                  <span className="course-price">${course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-btn" onClick={handleExplore}>View All Courses</button>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Hands-on Projects</h3>
            <p>Build real-world projects to strengthen your portfolio</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace, anywhere, anytime</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Community Support</h3>
            <p>Join a community of learners and get peer support</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The courses here transformed my career. The instructors are amazing and the content is top-notch."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" />
              <div>
                <h4>John Smith</h4>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Flexible learning schedule and practical projects helped me transition into tech successfully."</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Data Analyst</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The community support and mentorship provided here is unmatched. Highly recommended!"</p>
            </div>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Student" />
              <div>
                <h4>Michael Chen</h4>
                <p>UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who are already transforming their careers</p>
          <button className="cta-button" onClick={handleExplore}>Get Started Today</button>
        </div>
      </section>
    </>
  )
}

export default Home
