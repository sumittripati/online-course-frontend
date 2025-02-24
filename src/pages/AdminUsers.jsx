import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import './adminUsers.css'; // Assuming you have the CSS for styling
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authorizationToken } = useAuth();

  // Fetch all users data
  const getAllUsersData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/users', {
        method: 'GET',
        headers: {
          "Authorization": authorizationToken
        }
      });

      const data = await response.json();
      console.log("Fetched Users:", data); // Debugging output

      if (response.ok) {
        setUsers(data); // ✅ Corrected data assignment
      } else {
        console.error("Failed to fetch users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users data in dashboard", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete the user when delete button is clicked
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": authorizationToken
        }
      });

      const data = await response.json(); // Parse the response as JSON

      // Check for response status
      if (response.ok) {
        console.log("User Deleted Successfully:", data);
        getAllUsersData(); // Refresh the user data
      } else {
        console.error("Failed to delete user:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    if (authorizationToken) {
      getAllUsersData();
    }
  }, [authorizationToken]);

  console.log("Users State:", users); // ✅ Check if users state updates properly

  return (
    <div className="admin-user-section">
      <div className="admin-user-container">
        <h1>Admin Users Data</h1>
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="admin-users">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admin</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin ? "✅ Yes" : "❌ No"}</td>
                  <td>
                    <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                  </td>
                  <td>
                    <button className="delete" onClick={() => deleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
