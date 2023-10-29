import React from 'react'
import "./ProjectDetailsBody.css"
import Button from '../styledComponent/ButtonNoIcon.styled'
import Image from '../../images/download.jpg'
import Image2 from '../../images/download (1).jpg'




export default function ProjectDetailsBody(props) {



  return (
    <div  className='ProjectDetailsBody'>
        <ul>
            <li> 
            <h4>Status : </h4>
            </li>
            <li>
                {
                    props.projectDetailsDataP.type==="active"?   
                        <div className='active'>On going</div>
                    :
                    props.projectDetailsDataP.type==="pending"?
                        <div className='pending'>Pending</div>
                    :
                        <div className='complete'>Completed</div>

                }
            </li>
        </ul>
        <ul>
            <li>
                
                <h4>Service : </h4>

            </li>
            <li>
                <p>
                  fumigation
                </p>
            </li>
        </ul> <ul>
            <li>
                <h4>Service Type : </h4>

                </li>
            <li>
                <p>
                    Subscription
                </p>
            </li>
        </ul> <ul>
            <li>
                <h4>Job description : </h4>
            </li>
            <li>
                <p> 
                    Lorem ipsum is simply dummy text of the printing and type setting 
                    industry. Lorem ipsum has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand  has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                </p>
            </li>

        </ul>
         <ul>
            <li> 
                <h4>Amount :</h4>
            </li>
            <li>
                <p>
                    $2000
                </p>
            </li>
        </ul> 
        <ul>
            <li>
                <h4>Amount Remaining :</h4>
            </li>
            <li> 
                <p>
                 $2000
                </p>
            </li>
        </ul>
        
        <ul>
            <li>
                <h4>Ending date :</h4>
            </li>
            <li> 
                <p>
                 2/22/2020
                </p>
            </li>
        </ul>
            

        <div className='buttons'>

            {
                props.projectDetailsDataP.type==="active"
                
                ?
                <ul>
                    <li>
                        <Button borderColorP={"red"} buttonColorP={"red"}  ColorP={"white"}> quote</Button>
                    </li>
                    <li> 
                        <Button borderColorP={"blue"} buttonColorP={"blue"}  ColorP={"white"}> invoice</Button>
                    </li>
                    <li> 
                        <Button borderColorP={"green"} buttonColorP={"green"}  ColorP={"white"}> receipt</Button>
                    </li>  
                    <li> 
                        <Button borderColorP={"gold"} buttonColorP={"gold"}  ColorP={"white"}> pay now</Button>
                    </li>
                </ul>
                :

                props.projectDetailsDataP.type==="pending"
                    
                ?
                <ul>
                <li>
                    <Button borderColorP={"red"} buttonColorP={"red"}  ColorP={"white"}> quote</Button>
                </li>
                <li> 
                    <Button borderColorP={"blue"} buttonColorP={"blue"}  ColorP={"white"}> invoice</Button>
                </li>
                
                <li> 
                    <Button borderColorP={"gold"} buttonColorP={"gold"}  ColorP={"white"}> pay now</Button>
                </li>
            </ul>
                :
                <ul>
                <li>
                    <Button borderColorP={"red"} buttonColorP={"red"}  ColorP={"white"}> quote</Button>
                </li>
                <li> 
                    <Button borderColorP={"blue"} buttonColorP={"blue"}  ColorP={"white"}> invoice</Button>
                </li>
                <li> 
                    <Button borderColorP={"green"} buttonColorP={"green"}  ColorP={"white"}> receipt</Button>
                </li>  
                <li> 
                    <Button borderColorP={"gold"} buttonColorP={"gold"}  ColorP={"white"}> pay now</Button>
                </li>
            </ul>
            }
           
        </div>


        <div className='slideContainer'>
            <h4>Assigned staff from starmate</h4>
            
            <div className='scroller'>
                <ul>
                    <li>
                        <span>
                            <img   src={Image} alt='#'/>
                        </span>
                        <h4>lida haruna</h4>
                    </li>
                    <li> 
                        <span>
                            <img   src={Image2} alt='#'/>
                        </span>
                        <h4>james nalis</h4>
                    </li>
                    <li>
                        <span>
                            <img   src={Image} alt='#'/>
                        </span>
                        <h4>fatma haji</h4> 
                    </li>  
                    <li> 
                        <span>
                            <img   src={Image2} alt='#'/>
                        </span>
                        <h4>listel  merabel</h4>
                    </li>
                    <li>
                        <span>
                            <img   src={Image} alt='#'/>
                        </span>
                        <h4>tallist takno</h4> 
                    </li>  
                    <li> 
                        <span>
                            <img   src={Image2} alt='#'/>
                        </span>
                        <h4>denis daniel</h4>
                    </li>
                    <li>
                        <span>
                            <img   src={Image} alt='#'/>
                        </span>
                        <h4>Austine fins</h4> 
                    </li>  
                    <li> 
                        <span>
                            <img   src={Image2} alt='#'/>
                        </span>
                        <h4>rango portalis</h4>
                    </li>
                    <li>
                        <span>
                            <img   src={Image} alt='#'/>
                        </span>
                        <h4>angel lookman</h4> 
                    </li>  
                    <li> 
                        <span>
                            <img   src={Image2} alt='#'/>
                        </span>
                        <h4>faruk lisda</h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
