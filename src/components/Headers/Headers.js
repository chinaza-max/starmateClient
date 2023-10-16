import React from 'react'
import "./Headers.css"
import TextAnimation from "react-text-animations";


export default function Headers(props) {
  return (
    <div className='Headers'>
       <h2>
        <TextAnimation.Push 
         id="textAnimation__slide"
         cname="textAnimation"
        target="Cleaning" text={['Cleaning Service', 'Fumigation Service', 'Facility Maintenance']}  animation={{
                              duration:3000,
                              delay:5000,
                              timingFunction:'ease-out',
                          }}>
                          {props.titleP}
          </TextAnimation.Push>
       </h2>

       <p>{props.pagraphP}</p>
       <p>{props.pagraphP2}</p>
    </div>
  )
}
