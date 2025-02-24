import React from 'react'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { FaUser, FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { useAuth } from '../../store/auth';


// const Adminlayout = () => {
//   const {user, isLoading} = useAuth()
//   console.log("admin logout", user)

//   if(isLoading){
//     return <h1>Loading...</h1>
//   }

//   if(!user.isAdmin){
//     return <Navigate to="/"/>
//   }
//   return (
//     <>
//       <header className="admin-header">
//         <div className="admin-container">
//           <nav>
//             <ul>
//               <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
//               <li><NavLink to="/admin/contacts"><MdContactMail /> contacts</NavLink></li>
//               <li><NavLink to="/admin/services"><FaServicestack /> services</NavLink></li>
//               <li><NavLink to="/admin/home"><FaHome /> home</NavLink></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <Outlet/>
//     </>
//   )
// }

// export default Adminlayout




const AdminLayout = () => {
  const { user, loading } = useAuth(); // Fix typo (isLoading -> loading)

  console.log("AdminLayout user:", user);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Ensure user exists before checking user.isAdmin
  if (!user || !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="admin-header">
        <div className="admin-container">
          <nav>
            <ul>
              <li><NavLink to="/admin/users"><FaUser /> Users</NavLink></li>
              <li><NavLink to="/admin/contacts"><MdContactMail /> Contacts</NavLink></li>
              <li><NavLink to="/admin/services"><FaServicestack /> Services</NavLink></li>
              <li><NavLink to="/admin/home"><FaHome /> Home</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
