import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import img from "../../images/starmatelogo.png";
import img2 from "../../images/social1.jpg";
import img3 from "../../images/social2.jpg";
import img4 from "../../images/social4.png";



//icons
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';




export default function Footer() {
  return (
    <div className='Footer'>
        <ul>
            <li>
                <div className='image'>
                    <img src={img} alt="#"/>
                </div>
                <p>
                With our platform and everything we have put in place for your security and that of your valuables, you can be rest assured! Our platform allows you to meet, keep tabs and view the background information of the staff that have been assigned to your project. <br/>You can also assign supervisors to monitor your projects on the go.
                </p>

                <ul>
                    <li><a href='#'><img src={img2}/></a></li>
                    <li><a href='#'><img src={img3}/></a></li>
                    <li><a href='#'><img src={img4}/></a></li>
                </ul>

            </li>
            <li className='contactContainer'>
              <div>
                    <h2>Contacts</h2>
                    <ul> 
                        <li>
                            <PhoneIcon className='icon'/>
                        </li>
                        <li>
                            <h5>PHONES</h5>
                            <p>020203939939</p>
                        </li>
                    </ul>
                    <ul> 
                        <li>
                            <LocationOnIcon className='icon'/>
                        </li>
                        <li>
                            <h5>ADDRESS</h5>
                            <p>nO 2 DANso street</p>
                        </li>
                    </ul>
              </div>
            </li>
            <li className='Links'>
                <h2>Link</h2>
                <div> 
                    <Link to={"#"}> FAQs</Link>
                </div>
                <div> 
                    <Link to={"#"}> Terms of use</Link>
                </div>
                <div> 
                    <Link to={"#"}> Privacy Policy</Link>
                </div>
            </li>
        </ul>
        <div>
            <span> contact developer-081888889</span>
        </div>
    </div>
  )
}
