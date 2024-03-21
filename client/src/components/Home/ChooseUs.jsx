import React from 'react'
import { Fade } from 'react-awesome-reveal'

function ChooseUs() {
  
  return (
    <div className=" mx-auto py-5 bg-gray-100 " style={{ fontFamily: 'Candara, sans-serif' , fontStyle: 'italic'}}>
      <h1 className="text-black font-mono text-center text-xl sm:text-3xl" style={{ fontFamily: 'Candara, sans-serif' }}>WHY TAILOR FIT HUB?</h1>
      <div className="card grid grid-cols-1 my-5 mx-4  sm:grid-cols-1 sm:grid lg:grid lg:grid-cols-2 gap-6 md:px-8 px-2" >
        <Fade direction='left'>
          <div className='border-2 border-gray-600 rounded-md grid sm:grid-cols-2' style={{borderRadius:'0px'}}>
            <img src="https://media.istockphoto.com/id/1570014593/photo/woman-starting-small-business-with-tailor-shop.jpg?s=2048x2048&w=is&k=20&c=yTo_wcN0l6RPmS6rsIV6ZIY2ZuQKo3U8m7nsQxKBFmg=" alt="image1" className='w-auto order-1 h-full' />
            <h1 className="text-center text-2xl py-5 order-2 sm:flex sm:justify-center sm:items-center " style={{margin:'20px'}}>Let's elevate the unsung heroes of tailoring,<br/> empowering our local artisans <br/>whose talent knows no limits.</h1>
          </div>
        </Fade>
        <Fade direction='right'>
          <div className='border-2 border-gray-600 rounded-md grid sm:grid-cols-2' style={{borderRadius:'0px'}}>
            <img src="https://media.istockphoto.com/id/1570013491/photo/woman-starting-small-business-with-tailor-shop.jpg?s=2048x2048&w=is&k=20&c=X_39_b04Z3gBqw_mpdwJGK4MFz0yoMjEajz6dFB1CDU=" alt="image1" className='w-auto sm:order-2 lg:order-1 h-full' />
            <h1 className="text-center text-2xl py-5 px-1 sm:order-1 lg:order-2 sm:flex sm:justify-center sm:items-center " style={{margin:'20px'}}>Create a garment tailored specifically for you, skillfully crafted by our talented craftsmen.</h1>
          </div>
        </Fade>
        <Fade direction = 'left'>
          <div className='border-2 border-gray-600 rounded-md grid sm:grid-cols-2' style={{borderRadius:'0px'}}>
            <img src="https://media.istockphoto.com/id/961231176/photo/fashion-designer-studio-with-sketch-on-table.jpg?s=2048x2048&w=is&k=20&c=CTYPUmzNKKvFkf1PBt2pmU__PjSAqDWzimfyBMRIrZw=" alt="image1" className='w-auto md:order-1 lg:order-2 h-full' />
            <h1 className="text-center text-2xl py-5 sm:order-2 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center " style={{margin:'20px'}}>Explore a variety of stunning designs expertly crafted by our talented tailors.</h1>
          </div>
        </Fade>
        <Fade direction='right'>
          <div className='border-2 border-gray-600 rounded-md grid sm:grid-cols-2' style={{borderRadius:'0px'}}>
            <img src="https://media.istockphoto.com/id/639223110/photo/woman-shopping-on-internet.jpg?s=2048x2048&w=is&k=20&c=NVE_ANSVHueP8bAsI_E9aigTWrSQHjI_tg6LbwtTdds=" alt="image1" className='w-full sm:order-2 lg:order-2 ' style={{ height: "230px" }} />
            <h1 className="text-center text-2xl py-5 sm:order-1 lg:order-1 px-1 sm:flex sm:justify-center sm:items-center " style={{margin:'20px'}}>The Most Convenient Way to Order from Home Tailors Around You.</h1>
          </div>
        </Fade>
      </div>


    </div>

  )
}

export default ChooseUs
