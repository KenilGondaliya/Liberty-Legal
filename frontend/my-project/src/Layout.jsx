import React, {useState, useEffect}from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Loader from "./Components/UI/Loader";

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    },); // You can adjust this delay as needed
  }, []);
  return (
    <>
    {loading && <div className=" flex w-full h-screen items-center justify-center"> <Loader width="200px" height="200px" /></div>} 
      
    {!loading && ( 
        <div>
      <Info />
      <Header />
      <Outlet />
      <Footer/>
      </div>)}
    </>
  );
}

export default Layout;
