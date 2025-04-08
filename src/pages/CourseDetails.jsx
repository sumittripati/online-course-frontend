import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './CourseDetails.css';
import Header from '../components/Header';
import '../components/header.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { services } = useAuth();
  const [expandedTopic, setExpandedTopic] = useState(null);

  // Find the course details
  const course = services.find(service => service._id === courseId);

  // Sample topics data - you should replace this with actual course topics
  const topics = [
    {
      id: 1,
      title: "Introduction to the Course",
      description: "Detailed introduction about the course content and objectives",
      duration: "2 hours"
    },
    {
      id: 2,
      title: "Getting Started",
      description: "Setting up your development environment and basic concepts",
      duration: "3 hours"
    },
    {
      id: 3,
      title: "Getting Started",
      description: "Setting up your development environment and basic concepts",
      duration: "3 hours"
    },
    {
      id: 4,
      title: "Getting Started",
      description: "Setting up your development environment and basic concepts",
      duration: "3 hours"
    },
    {
      id: 5,
      title: "Getting Started",
      description: "Setting up your development environment and basic concepts",
      duration: "3 hours"
    },
    // Add more topics as needed
  ];

  const handleBuyNow = () => {
    navigate(`/payment-method/${courseId}`);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-container">
      <Header />
      <div className="course-header">
        <img src={course.image} alt={course.service} className="course-image" />
        <div className="course-info">
          <h1>{course.service}</h1>
          <p className="provider">By {course.provider}</p>
          <p className="price">${course.price}</p>
          <p className="description">{course.description}</p>
          <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>

      <div className="course-content">
        <h2>Course Content</h2>
        <div className="topics-list">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-item">
              <div 
                className="topic-header"
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              >
                <h3>{topic.title}</h3>
                <span className="duration">{topic.duration}</span>
                <span className="arrow">{expandedTopic === topic.id ? '▼' : '▶'}</span>
              </div>
              {expandedTopic === topic.id && (
                <div className="topic-content">
                  <p>{topic.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 