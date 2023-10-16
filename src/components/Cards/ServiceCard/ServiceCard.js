import React from 'react'
import "./ServiceCard.css"

export default function ServiceCard(props) {
  return (
    <ul className='ServiceCard'>
        <li>
            <props.serviceDescrptionP.icon className="icons"/>
        </li>
        <li>
            <h2>{props.serviceDescrptionP.type}</h2>
            <p>
                {props.serviceDescrptionP.description}
            </p>
        </li>
    </ul>
  )
}
