import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.css';
import Analitycs from '../components/Analitycs'
import { useAuth } from '../store/auth'

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    countries: 0
  });

  const { user } = useAuth();

  useEffect(() => {
    // Animate stats counting
    const targetStats = {
      students: 10000,
      courses: 200,
      instructors: 150,
      countries: 50
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const animate = () => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setStats({
          students: Math.floor((targetStats.students * currentStep) / steps),
          courses: Math.floor((targetStats.courses * currentStep) / steps),
          instructors: Math.floor((targetStats.instructors * currentStep) / steps),
          countries: Math.floor((targetStats.countries * currentStep) / steps)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    animate();
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About EduTech</h1>
        <p>Empowering learners worldwide through innovative education</p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="stats-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="stats-grid">
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>{stats.students}+</h2>
            <p>Active Students</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>{stats.courses}+</h2>
            <p>Courses</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>{stats.instructors}+</h2>
            <p>Expert Instructors</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>{stats.countries}+</h2>
            <p>Countries</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button 
            className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
          <button 
            className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`}
            onClick={() => setActiveTab('values')}
          >
            Our Values
          </button>
        </div>

        <motion.div 
          className="tab-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'mission' && (
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>To democratize education by providing accessible, high-quality learning experiences to students worldwide. We believe that education should be available to everyone, regardless of their background or location.</p>
              <ul>
                <li>Provide affordable education</li>
                <li>Foster a global learning community</li>
                <li>Deliver practical, industry-relevant skills</li>
                <li>Support lifelong learning</li>
              </ul>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>To become the world's leading platform for online education, transforming how people learn and acquire new skills. We envision a future where anyone can access world-class education at their fingertips.</p>
              <ul>
                <li>Global educational impact</li>
                <li>Innovative learning technologies</li>
                <li>Personalized learning experiences</li>
                <li>Industry partnerships</li>
              </ul>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="values-content">
              <h2>Our Values</h2>
              <p>Our core values guide everything we do at EduTech, from course development to student support.</p>
              <ul>
                <li>Excellence in education</li>
                <li>Student success first</li>
                <li>Continuous innovation</li>
                <li>Community building</li>
                <li>Integrity and transparency</li>
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[
            { name: 'John Smith', role: 'CEO', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
            { name: 'Sarah Johnson', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { name: 'Michael Chen', role: 'Head of Education', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
            { name: 'Emily Davis', role: 'Student Success', image: 'https://randomuser.me/api/portraits/women/68.jpg' }
          ].map((member, index) => (
            <motion.div 
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Analitycs />
    </div>
  );
};

export default About;

