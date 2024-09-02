import React from 'react'

function Button({icon:Icon, text, fontSize, width, arrow:Arrow, disabled}) {
    const style ={
        fontSize: fontSize || "16px",
        width: width
    } 
  return (
    <div >
      <button disabled={disabled} type="submit" style={style}  className="w-24 h-14 btnColor rounded-sm text-white flex items-center justify-center font-bold cursor-pointer focus:outline-none  disabled:opacity-25  lg:w-48">
        {Icon && <Icon className="pr-2" size={22}/>}
        {text}
        {Arrow && <Arrow className="pl-2 pt-1" size={21}/>}
      </button>
    </div>
  )
}

export default Button
