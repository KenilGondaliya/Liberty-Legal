import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { isAuthenticated } from "../../auth.js"; 

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {

      navigate("/sing-in");
    }
  }, [navigate]); 

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}

export default Profile;
