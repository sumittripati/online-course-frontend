import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Header from './components/Header'
import Errorpage from './pages/Errorpage'
import Logout  from './pages/Logout'
import Footer from './components/Footer'
import Adminlayout from './components/layout/Adminlayout'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import Adminupdate from './pages/Adminupdate'
import CourseDetails from './pages/CourseDetails'
import PaymentMethod from './pages/PaymentMethod'
import PaymentInfo from './pages/PaymentInfo'
import './components/header.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>} />
           <Route path="/service" element={<Service/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/logout" element={<Logout/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/course/:courseId" element={<CourseDetails/>} />
           <Route path="/payment-method/:courseId" element={<PaymentMethod/>} />
           <Route path="/payment-info/:courseId/:paymentMethod" element={<PaymentInfo/>} />
           <Route path="*" element={<Errorpage/>} />

           <Route path="/admin" element={<Adminlayout/>}>
             <Route path="users" element={<AdminUsers/>} />
             <Route path="contacts" element={<AdminContacts/>} />
             <Route path="/admin/users/:id/edit" element={<Adminupdate />} />  
           </Route>
           
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

