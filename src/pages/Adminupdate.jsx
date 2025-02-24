import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import "./adminupdate.css"

const Adminupdate = () => {
    const [data, setData] = useState({
        username : "",
        email: "",
        phone: ""
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            const data = await response.json();
            console.log('users single data:', data);
            setData(data); // Set user data to state
        } catch (error) {
            console.log("Error in Adminupdate:", error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken
                },
                body: JSON.stringify(data)
            });
    
            const updatedData = await response.json();
    
            if (response.ok) {
                toast.success("User updated successfully!");
                console.log("Updated User:", updatedData);
            } else {
                toast.error(updatedData.message || "Update failed");
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
    

    return (
        <>
            <div className="update-section-contant">
                <div className="contact-content">
                    <h1 className='main-heading'>Update User Data</h1>
                </div>
                <div className="form-container-update">
                    <div className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput} 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput} 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput} 
                                    required 
                                />
                            </div>
                            <div>
                                <button type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminupdate;

