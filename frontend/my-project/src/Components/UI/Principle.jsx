import React from 'react'
import sing1 from '../../assets/sign1.jpg'
import lawIcon1 from '../../assets/law-icon-1.png'
import lawIcon2 from '../../assets/law-icon2.png'
import lawIcon3 from '../../assets/law-icon3.png'

function Principle() {
  return (
    <div className=' bg-no-repeat w-full bg-cover lg:h-96 h-full flex flex-col items-center justify-center py-2' style={{backgroundImage: `url(${sing1})`}}>
      <div className='border w-11/12 h-5/6 border-stone-500 flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10 py-10'>
            <div className='flex flex-col items-center gap-4'>
            <div >
                <img src={lawIcon1} alt="image" />
            </div>
            <div className=' text-white md:text-sm text-xs font-bold tracking-widest'>
                <p>OUR PHILOSOPHY</p>
            </div>
            <div className='flex flex-col items-center text-stone-400 md:text-sm text-xs'>
                <p>A wonderful serenity has taken possession of my</p>
                <p>entire soul, like these sweet mornings of spring</p>
                <p>which I enjoy with my whole heart.</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
            <div>
                <img src={lawIcon2} alt="image" />
            </div>
            <div className='text-white text-sm font-bold tracking-widest'>
                <p>OUR PRINCIPLE</p>
            </div>
            <div className='flex flex-col items-center text-stone-400 md:text-sm text-xs'>
                <p>A wonderful serenity has taken possession of my</p>
                <p>entire soul, like these sweet mornings of spring</p>
                <p>which I enjoy with my whole heart.</p>
            </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
            <div>
                <img src={lawIcon3} alt="image" />
            </div>
            <div className='text-white text-sm font-bold tracking-widest'>
                <p>KEY OF SUCCESS</p>
            </div>
            <div className='flex flex-col items-center text-stone-400 md:text-sm text-xs'>
                <p>A wonderful serenity has taken possession of my</p>
                <p>entire soul, like these sweet mornings of spring</p>
                <p>which I enjoy with my whole heart.</p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Principle
