import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Loader from "./Components/UI/Loader";
import axios from "axios";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const response = await axios.post("/api/v1/users/refresh-token", {
          refreshToken: refreshToken,
        });
  
        // Update tokens
        localStorage.setItem("accessToken", response.data.accessToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
      }
    } catch (error) {
      console.log("Unable to refresh token", error);
      
      navigate("/login");
    }
  };
  

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      axios
        .post("/api/v1/users/refresh-token")
        .then((response) => {})
        .catch((error) => {
          refreshAccessToken();
        });
    }
  }, []);
  return (
    <>
      {loading && (
        <div className=" flex w-full h-screen items-center justify-center">
          {" "}
          <Loader width="200px" height="200px" />
        </div>
      )}

      {!loading && (
        <div>
          <Info />
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
