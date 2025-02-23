// import React, { useState } from 'react';
// import "./contact.css";
// import { useAuth } from '../store/auth';

// const Contact = () => {

//   const [contact, setContact] = useState({
//     username: '', // Changed from `name` to `username`
//     email: '',
//     message: ''
//   });

//   const [userData, setUserData] = useState(true);
//   const { user } = useAuth();

//   if(userData && user){
//     setContact({
//       username: userData.username, // Changed from `name` to `username`
//       email: user.email,
//       message: ''
//     })
//     setUserData(false);
//   } 
  
//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setContact({
//       ...contact,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(contact)
//   };

//   return (
//     <>
//       <div className="contact-us">
//         <div className="contact-container">
//           <div className="contact-left">
//             <h2 className="contact-title">Contact Us</h2>
//             <div className="contact-image">
//               <img src="../src/assets/images/istockphoto.jpg" alt="Contact Illustration" className="contact-image"/>
//             </div>
//           </div>

//           <div className="contact-form">
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="username">Name :</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"  // Changed from `name` to `username`
//                   required
//                   placeholder="Enter your name"
//                   autoComplete="off"
//                   value={contact.username} // Controlled input
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email">Email :</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   placeholder="Enter your Email"
//                   autoComplete="off"
//                   value={contact.email} // Controlled input
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message">Message :</label>
//                 <textarea
//                   id="message"
//                   rows={10}
//                   cols={30}
//                   name="message"
//                   required
//                   placeholder="Enter your message"
//                   autoComplete="off"
//                   value={contact.message}
//                   onChange={handleInput}
//                 />
//               </div>
//               <br />
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <section className="map">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.47635462906!2d76.82526769385703!3d28.42280384487054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2z4KSX4KWB4KSw4KWB4KSX4KWN4KSw4KS-4KSuLCDgpLngpLDgpL_gpK_gpL7gpKPgpL4!5e0!3m2!1shi!2sin!4v1738764999316!5m2!1shi!2sin"
//           frameBorder="1"
//           width="100%"
//           height="200"
//           loading="lazy"
//           allowFullScreen
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </section>
//     </>
//   );
// };

// export default Contact;





import React, { useState, useEffect } from 'react';
import "./contact.css";
import { useAuth } from '../store/auth';

const Contact = () => {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  });

  const { user, loading } = useAuth();

  console.log("User in Contact component:", user, "Loading:", loading);

  // Pre-fill form with user data when user is available and loading is complete
  useEffect(() => {
    if (!loading && user && user.username && user.email) {
      console.log("Updating contact with user data:", user);
      setContact({
        username: user.username,
        email: user.email,
        message: ''
      });
    }
  }, [user, loading]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/backend/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(contact)
      })
      if( response.ok ){
        setContact({
          username: '',
          email: '',
          message: ''
        });
        const data = await response.json();
        console.log("Contact form submitted successfully:", data);
        alert("Contact form submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error); 
    }
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-image">
              <img src="../src/assets/images/istockphoto.jpg" alt="Contact Illustration" className="contact-image"/>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name :</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter your name"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  rows={10}
                  cols={30}
                  name="message"
                  required
                  placeholder="Enter your message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.47635462906!2d76.82526769385703!3d28.42280384487054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2z4KSX4KWB4KSw4KWB4KSX4KWN4KSw4KS-4KSuLCDgpLngpLDgpL_gpK_gpL7gpKPgpL4!5e0!3m2!1shi!2sin!4v1738764999316!5m2!1shi!2sin"
          frameBorder="1"
          width="100%"
          height="200"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;