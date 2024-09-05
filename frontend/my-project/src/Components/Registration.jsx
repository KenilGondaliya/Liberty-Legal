import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "./UI/Loader";
import axios from 'axios';


const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  const delay = (d) => {
      return new Promise((resolve, reject)=> {
        setTimeout(()=>{
          resolve()
        }, d* 1000)
      })
  }

  const onSubmit = async(data) => {
    axios({
      method: 'post',
      url: 'http://localHost:8000/api/v1/users/register',
      data
    });
    console.log(data)
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Register</h2>
        {isSubmitting && <div><Loader width="100px" height="100px"/></div>}
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              {...register("FullName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength :{
                  value:3,
                  message: "Enter atleast minimum 3 character "
                }
              })}
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm "
              placeholder="Full Name"
             
            />
            {errors.FullName && <div>{errors.FullName.message}</div>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength :{
                value:3,
                message: "Enter atleast minimum 3 character "
              }
            })}
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm "
              placeholder="you@example.com"
            
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
            {...register("username", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength :{
                value:3,
                message: "Enter atleast minimum 3 character "
              },
              maxLength :{
                value:10,
                message: "Enter atleast maximum 10 character "
              }
            })}
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Username"
            />
            {errors.username && <div>{errors.username.message}</div>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
               {...register("password", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength :{
                  value:3,
                  message: "Enter atleast minimum 3 character "
                },
                maxLength :{
                  value:8,
                  message: "Enter atleast maximum 8 character "
                }
              })}
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm "
              placeholder="••••••••"
            />
            {errors.password && <div>{errors.password.message}</div>}
          </div>

          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No
            </label>
            <input
             {...register("mobile", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength :{
                value:3,
                message: "Enter atleast minimum 3 character "
              },
              maxLength :{
                value:10,
                message: "Enter atleast maximum 10 character "
              }
            })}
              type="tel"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm "
              placeholder="123-456-7890"
            />
            {errors.mobile && <div>{errors.mobile.message}</div>}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-2 px-4 btnHover text-white font-semibold rounded-md shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-75"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
