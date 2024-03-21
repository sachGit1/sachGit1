import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal';

function Info() {
  const navigate = useNavigate();
  return (
    <div className='flex w-full sm:flex-row flex-col md:gap-6 gap-2 lg:px-12 md:px-8  px-2 my-8'>
      <Fade direction = 'left'>
        <div className=' w-full rounded overflow-hidden '>
          <img src="https://media.istockphoto.com/id/1699973945/photo/tailoring-business-concept-bespoke-fashion-outfit-asian-lady-designer-talking-consulting.jpg?s=2048x2048&w=is&k=20&c=hD32vZju4HuA52w7ihwNRmJCAmUWTnv5DOWYevtoqGY=" className='w-full h-full' alt="Info" />
        </div>
      </Fade>
      <Fade direction='right'>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
          <h2 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl md:w-2/3 text-center text-slate-900 font-semibold font-mono' style={{fontFamily:'Candara,sans-serif'}}>The Most Convenient Way to Order from Home Tailors Around You</h2>
          <button className='md:w-2/3 px-2 bg-slate-800 rounded-md text-white py-2 md:text-lg md:font-semibold' onClick={() => navigate("/provider")}>Book Your Design</button>
        </div>
      </Fade>
    </div>
  )
}

export default Info
