import React from 'react'
import logo from "../assets/svg/liberty.svg"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import Button from './UI/Button';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div className='hidden lg:block'>
      <div className='flex items-center gap-12 popins justify-around border-b border-borderBottom'>
        <div >
          <Link to="/">
            <img src={logo} alt="logo" className='w-44' />
          </Link>
        </div>
        <div className='flex items-center gap-6'>
        <div>
            <div className="flex gap-3 font-bold cursor-pointer">
              <BsFillTelephoneFill size={20} color="#b1976b" />
              <h3>Phone</h3>
            </div>
            <span className='pl-7 text-stone-500'>+1-2344-2345-23</span>
          </div>
        <div>
            <div className="flex gap-3 font-bold cursor-pointer">
            <IoMail size={22} color="#b1976b" />
            <h3>Contact Email</h3>
            </div>
            <span className='pl-9 text-stone-500 cursor-pointer'>contact@attfirm.co</span>
          </div>
        <div>
            <div className="flex gap-3 font-bold cursor-pointer">
            <MdOutlineWatchLater size={22} color="#b1976b" />
            <h3>Working Hours</h3>
            </div>
            <span className='pl-9 text-stone-500'>Mon - Fri : 09:00-17:00</span>
          </div>
          <Link to="free-consultant">
        <Button text="FREE CONSULTANT" icon={BiMessageRounded} fontSize="13px"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Info
