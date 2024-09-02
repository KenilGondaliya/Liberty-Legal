import React from 'react'

function PatnerCard({image, name,}) {
  return (
    <>
    
    <div className='w-80  bg-white rounded-md shadow-xl cursor-pointer'>
        <div className='overflow-hidden bg-black rounded-t-md'>
      <img src={image} alt="image" className=' duration-300 hover:scale-110 hover:opacity-70 ' />
        </div>

      <div className='w-80 h-24 flex flex-col items-center justify-center gap-1 tracking-widest'>
            <p className='font-semibold'>{name}</p>
            <p className='text-sm text-stone-400 font-bold'>PARTNER</p>
      </div>
    </div>
    
    </>
  )
}

export default PatnerCard
