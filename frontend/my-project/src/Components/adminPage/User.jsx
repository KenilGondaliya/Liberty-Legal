import React, { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 
  const [formData, setFormData] = useState({ username: "", FullName: "" }); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/v1/users");
        setUsers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user); 
    setFormData({ username: user.username, FullName: user.FullName }); 
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); 
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.put(
        `/api/v1/users/${editingUser._id}`,
        formData
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editingUser._id ? response.data.data : user
        )
      );
      setEditingUser(null); 
      setFormData({ username: "", FullName: "" }); 
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

 
    
    const handleDelete = async (userId) => {

      try {
        const response = await axios.delete(`/api/v1/users/${userId}`);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id !== userId
          )
        );
        window.location.reload(); 
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };

  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">User Management</h1>
      <div className="bg-white shadow rounded-lg overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">FullName</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b ">
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.FullName}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                  <button
                      onClick={() => handleEditClick(user)}
                      className="bg-blue-500 text-white px-4 py-1 rounded"
                    >
                      Update
                    </button>
                    <button 
                    onClick={() => handleDelete(user._id)}
                     className="bg-red-500 text-white px-4 py-1 rounded ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {editingUser && ( 
          <form onSubmit={handleUpdate} className="mt-4">
            <h2 className="text-xl mb-4">Edit User</h2>
            <div className="flex flex-col">
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="border p-2 mt-1"
                  required
                />
              </label>
              <label className="mt-4">
                Full Name:
                <input
                  type="text"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  className="border p-2 mt-1"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 mt-4"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default User;
