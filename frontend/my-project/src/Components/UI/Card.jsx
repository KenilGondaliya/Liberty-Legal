import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card({ heading, btn, image, to }) {
  return (
    <>
      <div className="border border-stone-300 rounded-lg  w-80 h-80 ">
        <div className="flex flex-col items-center justify-center gap-3 max-w-70 pt-10">
          <img src={image} alt="img" />
          <h1 className="text-lg font-medium">{heading}</h1>
          <div className="flex flex-col items-center">
            <p className="text-stone-400 text-2sm ">
              We can provide corporate governance,
            </p>
            <p className="text-stone-400 text-2sm pl-2 text-wrap">
              helping clients manage the responsi
            </p>
            <p className="text-stone-400 text-2sm pl-2 text-wrap">
              bilities of running a corporation in
            </p>
            <p className="text-stone-400 text-2sm pl-2 text-wrap">
              financial field.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm theme font-bold pt-2">
            <Link to={to}>
            <button type="submit">LEARN MORE</button>
            </Link>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
