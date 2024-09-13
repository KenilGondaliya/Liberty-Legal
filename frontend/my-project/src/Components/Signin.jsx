import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/svg/liberty.svg";
import Loader from "./UI/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [responseMsg, setResponseMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/v1/users/login", data);

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setResponseMsg(response.data.message);

      toast.success("LogIn Successfully!!", {
        position: "top-right",
        duration: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
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
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setResponseMsg("User does not exists");

        toast.error("User does not exists", {
          position: "top-right",
          autoClose: 5000,
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
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <ToastContainer />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3">
          <img alt="law firm" src={logo} className="mx-auto h-40 w-full" />
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Log In
          </h2>
        </div>

        {responseMsg && (
          <div className="mb-4 text-center text-sm text-red-500">
            {responseMsg}
          </div>
        )}

        {isSubmitting && (
          <div className="m-auto">
            <Loader height="150px" width="150px" />
          </div>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast minimum 3 character",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 pl-2  ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                />
                {errors.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgetPassword"
                    className="font-semibold theme hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast miaxmum 3 character",
                    },

                    maxLength: {
                      value: 8,
                      message: "Enter atleast minimum 8 character",
                    },
                  })}
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className={`block w-full rounded-md border-0 pl-2  ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
                />
                {errors.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                value="Submit"
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold 
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-stone-900 hover:bg-indigo-700"
                  }
                      leading-6 text-white shadow-sm bg-slate-800 focus-visible:outline disabled:opacity-75`}
              >
                {isSubmitting ? "Login..." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
