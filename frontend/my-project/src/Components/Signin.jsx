import React from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/svg/liberty.svg";
import Loader from "./UI/Loader";


function Signin() {
  const {
    register,
    handleSubmit,
    watch, 
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img alt="law firm" src={logo} className="mx-auto h-40 w-full" />
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Log In
          </h2>
        </div>

        {isSubmitting && <div className="m-auto"><Loader height="150px" width="150px"/></div>}
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
                  className="block w-full rounded-md border-0 pl-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                {errors.email && <div>{errors.email.message}</div>}
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
                  <a
                    href="#"
                    className="font-semibold theme hover:text-red-700"
                  >
                    Forgot password?
                  </a>
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
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
                 {errors.password && <div>{errors.password.message}</div>}
              </div>
            </div>

            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                value="Submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-slate-800 focus-visible:outline disabled:opacity-75 "
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
