import React from "react";
import { clearTokens } from "../../auth.js"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send logout request to the backend
      await axios.post("/api/v1/users/logout", null, {
        withCredentials: true, // Include credentials (cookies)
      });

      // Clear tokens from local storage
      clearTokens();

      // Redirect to login page after logout
      navigate("/sing-in");

      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md"
    >
      Log Out
    </button>
  );
};

export default Logout;
