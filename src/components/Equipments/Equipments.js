import React from 'react'
import "./Equipments.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image from "../../images/imageInUse/equipment/image1.jpeg"
import image2 from "../../images/imageInUse/equipment/image2.jpg"


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
export default function Equipments() {
  return (
   <div className='Equipments'>
     <Carousel responsive={responsive}   arrows={true} infinite={true} autoPlay={true}  autoPlaySpeed={4000}  containerClass="carousel-container2">
        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>

        <div className='Container'>
            <div className='image-Container'>
            <img src={image} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>


        <div className='Container'>
            <div className='image-Container'>
            <img src={image2} alt=""/>
            </div>
            <p className='text'> cleaning sharp objects within </p>
        </div>
      
      </Carousel>
   </div>
  )
}
