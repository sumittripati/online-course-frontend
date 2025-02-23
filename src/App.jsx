import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Errorpage from './pages/Errorpage'
import Logout  from './pages/Logout'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>} />
           <Route path="/service" element={<Service/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/logout" element={<Logout/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="*" element={<Errorpage/>} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

