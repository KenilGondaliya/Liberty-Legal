import React from "react";
import logo from "../assets/svg/libertyDark.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full footerBg h-full md:h-full lg:h-96">
        <div className="flex flex-col  gap-6 items-center justify-center lg:flex-row md:justify-evenly ">
          <div className="max-w-64 flex flex-col items-start pl-2">
            <div className="w-44 mb-0">
              <img src={logo} alt="logo" />
            </div>
            <p className="headerColor text-base mb-4">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into.
            </p>
            <div className="flex items-center gap-4">
              <FaFacebook size={15} color="#b1976b" />
              <FaLinkedin size={15} color="#b1976b" />
              <FaXTwitter size={15} color="#b1976b" />
              <FaInstagram size={15} color="#b1976b" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items max-w-64">
            <div>
              <h1 className="text-white font-bold text-xl">Contact Info</h1>
            </div>
            <div>
              <p className="headerColor">
                Box 3233 <br /> 1810 Kings Way <br /> King Street, 5th Avenue,
                New York
              </p>
            </div>
            <div>
              <p className="text-white font-semibold font-xl">+1-2355-3345-5</p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Contact@LibertyLegalsite.co
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-white font-bold font-xl text-xl lg:pt-11">
                Practice Areas
              </p>
            </div>
            <div className="flex flex-col gap-2 pr-10 pb-10">
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Family Violence
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Car Accident Insurance
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Public Company Fraud
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Privacy Matter
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Failure of Apple Acquisition
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-col gap-2 pt-8">
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Giving Million Air Its Wings
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Making Sure It’s Closed
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                Nighmare on Wall Street
              </p>
              <p className="text-orange-200 font-xl hover:text-white duration-500 cursor-pointer">
                MaTix Tax Invation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-32 headerColor bg-stone-950 flex flex-col items-center justify-center md:flex-row md:justify-between md:h-24 ">
        <div className="md:ml-28">
          <p className="text-xs sm:text-sm md:text-lg">
            Copyright 2019 Liberty Legal Associates, All Right Reserved
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="hidden lg:flex items-center gap-4 text-2sm lg:text-lg font-semibold mr-10">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">Case</li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer">Legal</li>
            <li className="cursor-pointer">Privacy & Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
