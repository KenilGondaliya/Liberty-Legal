import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async (data) => {
      try {
        const response = await axios.get("/api/v1/users",data);
        setUsers(response.data.data); 
        
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-medium">Total Users</h2>
          <p className="mt-2 text-gray-500">{users.length}</p> {/* Correct length */}
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-medium">Total Consultants</h2>
          <p className="mt-2 text-gray-500">30</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-medium">Active Consultations</h2>
          <p className="mt-2 text-gray-500">50</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
