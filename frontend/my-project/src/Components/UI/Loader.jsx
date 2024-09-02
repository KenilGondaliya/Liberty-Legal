import React from 'react'
import Lottie from "lottie-react";
import animationData from "../../assets/WebAnimation.json"

function Loader({height, width}) {
  return (
    <>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true} 
        style={{ height: height, width: width }} 
      />
    </>
     
    
  )
}

export default Loader
