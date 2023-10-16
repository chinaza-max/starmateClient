import React from 'react'
import "./Menu.css"
import { scaleRotate as Menus } from 'react-burger-menu'
import image from "../../images/profile.jpg"
import {Link} from "react-router-dom";


export default function Menu(props) {
  return (
    <Menus {...props} className="menuContainer" width={ '62%' }  >
        <div className='profile'>
          <img src={image} alt='#'/>
        </div>
        <h3> chinaza</h3>
        <ul className='Links'>
          <li>
            <Link to={"#"}>Profile</Link>
          </li>
          <li>
            <Link to={"#"}>Profile</Link>
          </li>
          <li>
            <Link to={"#"}>Profile</Link>
          </li>
        </ul>

    </Menus>
  )
}