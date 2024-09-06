import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "./UI/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      // Send POST request to the registration API
      const response = await axios.post("/api/v1/users/register", data);

      console.log(response);

      // Update the response message state
      setResponseMessage(response.data.message);

      // Show success toast notification
      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Optionally, reset the form or redirect the user
      // e.g., reset(); or navigate('/login');
    } catch (error) {
      // Handle errors from the API
      if (error.response && error.response.data && error.response.data.message) {
        setResponseMessage(error.response.data.message);
        // Show error toast notification with the message from the server
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000, // 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // Handle generic errors
        setResponseMessage("An error occurred during registration");
        toast.error("An error occurred during registration", {
          position: "top-right",
          autoClose: 5000, // 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Toast Container should be placed once in your app, preferably at the root */}
      <ToastContainer />
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Register</h2>
        
        {/* Display response message if any */}
        {responseMessage && (
          <div className="mb-4 text-center text-sm text-red-500">
            {responseMessage}
          </div>
        )}

        {/* Show Loader while submitting */}
        {isSubmitting && (
          <div className="mb-4 flex justify-center">
            <Loader width="50px" height="50px" />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              {...register("FullName", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Enter at least 3 characters",
                },
              })}
              type="text"
              id="fullName"
              className={`mt-1 p-2 w-full border ${
                errors.FullName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
              placeholder="Full Name"
            />
            {errors.FullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.FullName.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              id="email"
              className={`mt-1 p-2 w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Enter at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Enter no more than 10 characters",
                },
              })}
              type="text"
              id="username"
              className={`mt-1 p-2 w-full border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Enter at least 3 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Enter no more than 8 characters",
                },
              })}
              type="password"
              id="password"
              className={`mt-1 p-2 w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Mobile Number Field */}
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No
            </label>
            <input
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: 10,
                  message: "Enter a valid mobile number (e.g., 123-456-7890)",
                },
              })}
              type="tel"
              id="mobile"
              className={`mt-1 p-2 w-full border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm`}
              placeholder="123-456-7890"
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
