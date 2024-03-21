import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper'
import DeliveryCard from './DeliveryCard';

function ProductCarousel() {
    const items = [
        {
            image:"https://media.istockphoto.com/id/1473646712/photo/young-asian-woman-wearing-dress-on-background.jpg?s=2048x2048&w=is&k=20&c=1dT0KSK5tE90oIk2vuq4vgZgVUoDT0gJKxUU-IcM-5c=",
            title:"Dresses"
        },
        {
            image:"https://media.istockphoto.com/id/1411104614/photo/stylish-young-woman-walking-outside.jpg?s=2048x2048&w=is&k=20&c=p2rQSGitNGSpXYDXm7yKB1KLEF7tK0OyhLghV-DuesM=",
            title:"Skirts"
        },
        {
            image:"https://media.istockphoto.com/id/1450574123/photo/happy-young-woman-dancing-and-having-fun-while-wearing-a-crop-top-and-jeans-in-a-studio.jpg?s=2048x2048&w=is&k=20&c=8fcA7UmomzlO4SpPPew2SaqKnJ0pG2c5tPn5_fTGFLQ=",
            title:"Crop Tops"
        },
        {
            image:"https://media.istockphoto.com/id/1331967655/photo/shot-of-a-young-woman-posing-against-a-grey-background.jpg?s=2048x2048&w=is&k=20&c=B_7b4SDcaDwNJAc03jrHuKk4e2kTXBog_r9kzrKw3pw=",
            title:"Denims"
        },
        {
            image:"https://media.istockphoto.com/id/1484821599/photo/brown-haired-young-model-wearing-autumn-concept-clothes.jpg?s=2048x2048&w=is&k=20&c=4BnorRvEhBb4ta7so5rSFG5MQ-_uur3d8eRDLaOPSxI=",
            title:"Blouses"
        },
        {
            image:"https://media.istockphoto.com/id/1301605740/photo/young-indian-woman-smiling.jpg?s=2048x2048&w=is&k=20&c=C9I6ZivkVDM_NwiUmJwq6zLGFWi_EwictcJqnXiBVWU=",
            title:"Kurtha"
        },
        {
            image:"https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Suites"
        },
        {
            image:"https://media.istockphoto.com/id/1283388381/photo/photo-of-positive-girl-holding-old-audio-player-in-her-hand-and-dancing.jpg?s=2048x2048&w=is&k=20&c=0-OlhhMPcKxz4nYXkrkTfKGqvcnO3_Azvr2rX7KCGgw=",
            title:"Pants"
        },
        {
            image:"https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"T-shirts"
        },
         
    ]
    const slideConfig = {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
      };

  return (
    <div>
        <h5 className='font-semibold text-2xl py-2 lg:px-16 md:px-8 px-4'>Explore Our Collections</h5>
            <div className='px-2.5 py-5 md:hidden flex items-center justify-center gap-2.5 flex-wrap'>
                {items.map((item)=>(
                    <DeliveryCard {...item} key={item.title}></DeliveryCard>
                ))}
            </div>
        <div className='hidden md:flex py-5'>
            <Swiper {...slideConfig}>
                {items.map((item,index) =>(
                    <SwiperSlide key={index}>
                        <DeliveryCard {...item}></DeliveryCard>
                    </SwiperSlide>
                ))}
            </Swiper>
      </div>
    </div>
  )
}

export default ProductCarousel