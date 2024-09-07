import React from "react";
import libery2 from "../assets/libery2.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import Button from "./UI/Button";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Loader from "./UI/Loader";


function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div style={{ backgroundColor: "#a1a1a130" }}>
        <div
          className="w-full lg:h-screen h-96 flex items-center justify-center"
          style={{ backgroundImage: `url(${libery2})` }}
        >
          <div className="flex flex-col items-center gap-3 text-white font-bold">
            <p className="lg:text-8xl text-5xl">Contact Us</p>
            <p className="lg:text-3xl text-xl">Get Intouch</p>
          </div>
        </div>

        <div
          className="w-full lg:h-96 h-screen flex flex-col lg:flex-row gap-16 text-white items-center justify-center"
          style={{ backgroundColor: "#161616" }}
        >
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div>
              <BsFillTelephoneFill color="white" size={30} />
            </div>
            <div className=" font-bold md:text-xl">
              <h1>Phone</h1>
            </div>
            <div className="font-medium flex flex-col items-center lg:items-start text-sm md:text-base">
              <p>A wonderful serenity has taken possession</p>
              <p>of my entire soul, like these.</p>
            </div>

            <div className="theme text-sm md:text-lg">
              <p>+1-2345-2345</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div>
              <CiMail color="white" size={30} />
            </div>
            <div className=" font-bold md:text-xl">
              <h1>Email</h1>
            </div>
            <div className="font-medium flex flex-col items-center lg:items-start text-sm md:text-base">
              <p>A wonderful serenity has taken possession</p>
              <p>of my entire soul, like these.</p>
            </div>

            <div className="theme text-sm md:text-lg">
              <p>Contact@goodlayers.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div>
              <FaLocationArrow color="white" size={30} />
            </div>
            <div className=" font-bold md:text-xl ">
              <h1>Location</h1>
            </div>
            <div className="font-medium flex flex-col items-center lg:items-start text-sm md:text-base">
              <p>4 apt. Flawing Street. The Grand Avenue.</p>
              <p>Liverpool, UK 33342</p>
            </div>

            <div className="theme text-sm md:text-lg">
              <p>View On Google Map</p>
            </div>
          </div>
        </div>

        <div className=" pb-20">
          <div className="flex flex-col gap-3 items-center py-16">
            <h1 className="text-4xl font-bold">Leave us your info</h1>
            <p className="text-stone-400 text-lg">
              and we will get back to you.
            </p>
          {isSubmitting && <div><Loader width="100px" height="100px"/></div>}
          </div>

          
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            // className="hidden lg:block"
          >
            <div className=" flex flex-col items-center justify-center  gap-5">

              <div className="w-full flex flex-col items-center justify-center ">
                <input
                  className="md:w-4/5 lg:w-5/12 w-80 p-3 bg-white text-stone-400 h-14 focus:outline-none"
                  {...register("FullName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast minimum 3 character ",
                    },
                  })}
                  type="text"
                   spellCheck="false"
                  placeholder="Full Name*"
                  // style={{ width: "600px" }}
                 
                />
                {errors.FullName && <div className="">{errors.FullName.message}</div>}
              </div>

              <div className="w-full flex flex-col items-center justify-center ">
                <input
                  className="md:w-4/5 lg:w-5/12 w-80 p-3 bg-white text-stone-400 h-14 focus:outline-none"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast minimum 3 character ",
                    },
                  })}
                  type="email"
                   spellCheck="false"
                  placeholder="Email*"
                  // style={{ width: "600px" }}
                  
                />
                {errors.email && <div>{errors.email.message}</div>}
              </div>

              <div className="w-full flex flex-col items-center justify-center ">
                <input
                  className="md:w-4/5  lg:w-5/12 w-80  p-3 bg-white text-stone-400 h-14 focus:outline-none"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast minimum 3 character ",
                    },
                  })}
                  type="text"
                   spellCheck="false"
                  placeholder="Subject*"
                  // style={{ width: "600px" }}
                  
                  
                />
                {errors.subject && <div>{errors.subject.message}</div>}
              </div>

              <div className=" lg:col-span-2 md:w-4/5 lg:w-full flex flex-col items-center justify-center">
                <textarea 
                  {...register("message", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter atleast minimum 3 character ",
                    },
                  })}
                  cols="72"
                  rows="5"
                  spellCheck="false"
                  style={{ backgroundColor: "white" }}
                  placeholder="Message*"
                  className="p-4 md:w-full lg:w-5/12 w-80  text-stone-400 focus:outline-none"
                >
                </textarea>
                  {errors.message && <div>{errors.message.message}</div>}             
              </div>
     
              
              <div
                className=" hidden lg:block lg:col-span-2"
              >
                <Button disabled={isSubmitting} width="600px" text="SUBMIT NOW" />
              </div>
              <div
                className=" block lg:hidden lg:col-span-2"
              >
                <Button disabled={isSubmitting} width="200px" text="SUBMIT NOW" />
              </div>
            </div>
          </form>
          </div>
        </div>

        <section className="pb-20 bg-white">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39297.25520605687!2d-0.16174804564265624!3d51.51629700465517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2sin!4v1725108722815!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <div className=" flex items-center justify-center gap-6 bg-white pb-20 ">
          <div>
            <TbMailFilled size={21} />
          </div>
          <div>
            <FaFacebookF size={20} />
          </div>
          <div>
            <FaSkype size={21} />
          </div>
          <div>
            <BsTwitterX size={18} />
          </div>
        </div>
      
    </>
  );
}

export default Contact;
