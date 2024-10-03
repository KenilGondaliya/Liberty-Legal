import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../auth.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import emailjs from "emailjs-com";


function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/error");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    companyName: "",
    consultantInterest: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(
        "/api/v1/consultant/consultantation",
        formData
      );
      console.log(formData);

      emailjs
      .send(
        "service_6wpzgzi", // Replace with your Service ID
        "template_1txyri7", // Replace with your Template ID
        formData, // Send form data
        "gJTUbU5XjoNFr8sz-" // Add unique ID to the submission
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
      navigate("/success");
      
      
    } catch (error) {
      toast.error("Form doesn't send", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Free Consultation Appointment Form
          </h2>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phoneNo"
            >
              Phone No
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="consultantInterest"
            >
              Consultant Interest
            </label>
            <select
              id="consultantInterest"
              name="consultantInterest"
              value={formData.consultantInterest}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Interest</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Personal Law">Personal Law</option>
              <option value="Real Estate Law">Real Estate Law</option>
              <option value="Health Care Law">Health Care Law</option>
              <option value="Insurance Law">Insurance Law</option>
              <option value="Construction & Engineering Law">
                Construction & Engineering Law
              </option>
              <option value="Ecommerce Law">Ecommerce Law</option>
            </select>
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="appointmentDate"
            >
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="appointmentTime"
            >
              Appointment Time
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;