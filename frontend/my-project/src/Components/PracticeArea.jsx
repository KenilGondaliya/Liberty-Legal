import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import Card from "./UI/Card";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon44.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon6.png";


function PracticeArea() {
  return (
    <div className='py-20'>
      <section className="w-full h-full bg-white flex flex-col items-center">
          <div className="mt-20 text-center">
            <p className="lg:text-2sm tracking-widest font-bold text-stone-400 pb-4	">
              WHAT WE ARE EXPERT AT
            </p>
            <p className="lg:text-4xl font-bold">Legal Practices Area</p>
          </div>
          <MdOutlineHorizontalRule size={50} color="#b6a188" />
          <div className="w-fit grid lg:grid-cols-3 lg:row-span-3 lg:col-span-2 gap-8 pt-10">
          <Card image={icon1} heading="Coporate & Securities" to="/coporate" />
            <Card image={icon2} heading="Real Estate Law" to="/realEstate"/>
            <Card image={icon3} heading="Health Care Law" to="/health"/>
            <Card image={icon4} heading="Insurance Law" to="/insurance"/>
            <Card image={icon5} heading="Construction & Engineering" to="/construction"/>
            <Card image={icon6} heading="Ecommerce Law" to="/ecommerce"/>
          </div>
        </section>
    </div>
  )
}

export default PracticeArea
