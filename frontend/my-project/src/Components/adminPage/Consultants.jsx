import React, { useEffect, useState } from "react";
import axios from "axios";

function Consultants() {
  const [consultant, setConsultant] = useState([]);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await axios.get("/api/v1/consultant");
        setConsultant(response.data.data);
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };

    fetchConsultant();
  }, []);

  const handleDelete = async (consultantId) => {
    try {
      const response = await axios.delete(`/api/v1/consultant/${consultantId}`);
      setConsultant((prevUsers) => prevUsers.map((consultant) => consultant._id !== consultantId));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
    const handleAprrove = async (consultantId) => {
      try {
        const response = await axios.put(`/api/v1/consultant/${consultantId}`);
        setConsultant((prevUsers) => prevUsers.map((consultant) => consultant._id === consultantId));
        window.location.reload();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Consultant Management</h1>
      <div className="bg-white shadow rounded-lg overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Specialization</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultant.length > 0 ? (
              consultant.map((consultant) => (
                <tr key={consultant.id} className="border-b">
                  <td className="py-2 px-4">{consultant.fullName}</td>
                  <td className="py-2 px-4">{consultant.consultantInterest}</td>
                  <td className="py-2 px-4">{consultant.email}</td>
                  <td className="py-2 px-4">
                    <button 
                    onClick={() => handleAprrove(consultant._id)}
                     className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
                      Approve
                    </button>
                    <button
                      onClick={() => handleDelete(consultant._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded ml-2"
                    >
                      Decline
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
      </div>
    </div>
  );
}

export default Consultants;
