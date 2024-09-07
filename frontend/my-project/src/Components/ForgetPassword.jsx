import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitted },
  } = useForm();
  const [responseMsg, setResponseMsg] = useState("");

  const onSubmit = async(data) => {
    try {
     const response =  await axios.post("/api/v1/users/change-password", data)

     setResponseMsg(response.data.message)

     toast.success(response.data.message, {
        position: "top-right",
        duration: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
         
      });
    } catch (error) {
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setResponseMsg(error.response.data.message);
    
            toast.error(error.response.data.message, {
              position: "top-right",
              autoClose: 5000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          } else {
            setResponseMsg("Email is not correct");
    
            toast.error("Email is not correct", {
              position: "top-right",
              autoClose: 5000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
          }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <ToastContainer />
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Forgot Password
        </h2>

        {submitted ? (
          <div className="text-center text-green-500">
            A reset link has been sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "password is required" })}
                className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="conPassword"
              >
                Confirm Password 
              </label>
              <input
                id="confPassword"
                type="confPassword"
                {...register("confPassword", { required: "Confirm Password is required" })}
                className="w-full px-3 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.confPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-stone-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="text-center">
          <Link to="/sing-in" className="text-stone-600 hover:underline hover:text-blue-700">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
