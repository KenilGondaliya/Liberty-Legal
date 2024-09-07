import React from "react";
import { clearTokens } from "../../auth.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/users/logout", null, {
        withCredentials: true,
      });

      clearTokens();

      navigate("/sing-in");

      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
<>

    <div className="h-screen w-full flex items-center justify-center">
    <button
      onClick={handleLogout}
      className="px-4 py-2 flex items-center justify-center w-32 bg-stone-800 hover:bg-blue-700 text-white rounded-md"
    >
      Log Out
    </button>
    </div>
</>
  );
};

export default Logout;
