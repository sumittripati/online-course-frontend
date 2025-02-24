import React, { useEffect } from 'react'
import { useAuth } from '../store/auth'
import { useState } from 'react'
import "./adminContacts.css";
import { toast } from 'react-toastify';

const AdminContacts = () => {

  const [contactData, setContactData] = useState([])
 const {authorizationToken} = useAuth()

 const getContactsData = async()=>{
  try {
    const response = await fetch("http://localhost:3000/api/admin/contacts",{
    method: "GET",
    headers:{
      Authorization : authorizationToken
    }
    })
    let data = await response.json()
    console.log("contact data", data)
    if(response.ok){
      setContactData(data)
    }
  } catch (error) {
    console.log("error in the admincontacts not show data", error)
  }
 }

// define the function delete

const deleteContactById = async (id)=>{
  try {
    const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`,{
    method : "DELETE",
    headers : {
      Authorization : authorizationToken
    }
    })
    if(response.ok){
      getContactsData()
      toast.success("deleted successfully")
    }else{
      toast.error("Not deleted")
    }
  } catch (error) {
    console.log("errorn in the contact delete function", error)
  }
}

 useEffect(()=>{
   getContactsData()
 },[])

  return (
    <>
      <div className="admin-contact-section">
        <h1>Admin Contact Data</h1>
        <div className="admin-users">
            
            {
              contactData.map((curContactData, index)=>{
                const {username, email, message, _id} = curContactData
                return (
                  <div key={index}>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                    <button className='btn' onClick={()=>deleteContactById(_id)}>Delete</button>
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  )
}

export default AdminContacts

