import React from "react";
import pageTitle from "../../assets/pageTitle.jpg";

function Heading({title, text}) {
  return (
    <div
      className="w-full h-80 flex items-center justify-center"
      style={{ backgroundImage: `url(${pageTitle})` }}
    >
      <div className="text-white font-bold flex flex-col items-center gap-6 tracking-wider">
        <h1 className="text-5xl">{title}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default Heading;
