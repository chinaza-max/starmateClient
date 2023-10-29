import './Notification.css'
import Button from '../../styledComponent/ButtonNoIcon.styled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function Notification(props) {
  return (
        <>

            {
                props.filterForP==="All"?
                        
                        props.dataP.type==="pending"?
                        <ul className='Notification'  style={{backgroundColor:"rgb(255, 244, 229)"}}> 
                            <li className='first'>

                                <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                                <p> {props.dataP.data3}</p>
                                <p className='date'> {props.dataP.data4}</p>

                                <span className='icon'> 
                                    <WarningAmberIcon  style={{color:"rgb(251 145 0)"}}/>
                                </span>

                            </li>
                            <li className='second'>
                                {props.dataP.data6!=="New message"?
                                    <ul> 
                                        <li>
                                            {"NGN "+ props.dataP.data5}
                                        </li>
                                        <li>
                                            <div>
                                            <Button onClick={()=>props.handleClickOnViewButtonP(true)}   ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                                <h5>
                                                    view
                                                </h5>
                                            </Button>
                                            </div>
                                        </li>
                                    </ul>
                                :
                                <ul> 
                                    <li>
                                        
                                    </li>
                                    <li>
                                        <div className='message'>
                                        <Button    ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                            <h5>
                                                view
                                            </h5>
                                        </Button>
                                        </div>
                                    </li>
                                </ul>
                                }
                            
                            </li>
                        </ul>
                        :
                        props.dataP.type==="completed"?
                        <ul className='Notification'  style={{backgroundColor:"rgb(237, 247, 237)"}}> 
                            <li className='first'>

                                <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                                <p> {props.dataP.data3}</p>
                                <p className='date'> {props.dataP.data4}</p>

                                <span className='icon'> 
                                    <CheckCircleOutlineIcon style={{color:"rgb(0 241 0)"}}/>
                                </span>
                            </li>
                            <li className='second'>
                                {props.dataP.data6!=="New message"?
                                    <ul> 
                                        <li>
                                            {"NGN "+ props.dataP.data5}
                                        </li>
                                        <li>
                                            <div>
                                            <Button  onClick={()=>props.handleClickOnViewButtonP(true)}  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                                <h5>
                                                    view
                                                </h5>
                                            </Button>
                                            </div>
                                        </li>
                                    </ul>
                                :
                                <ul> 
                                    <li>
                                    
                                    </li>
                                    <li>
                                        <div className='message'>
                                        <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                            <h5>
                                                view
                                            </h5>
                                        </Button>
                                        </div>
                                    </li>
                                </ul>
                                }
                            
                            </li>
                        </ul>
                        :
                        <ul className='Notification' style={{backgroundColor:"rgb(229, 246, 253)"}}> 
                            <li className='first'>

                                <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                                <p> {props.dataP.data3}</p>
                                <p className='date'> {props.dataP.data4}</p>

                                <span className='icon'> 
                                    <InfoOutlinedIcon style={{color:"rgb(10 183 255)"}}/>
                                </span>
                            </li>
                            <li className='second'>
                                {props.dataP.data6!=="New message"?
                                    <ul> 
                                        <li>
                                            {"NGN "+ props.dataP.data5}
                                        </li>
                                        <li>
                                            <div>
                                            <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                                <h5>
                                                    view
                                                </h5>
                                            </Button>
                                            </div>
                                        </li>
                                    </ul>
                                :
                                <ul> 
                                    <li>
                                    
                                    </li>
                                    <li>
                                        <div className='message'>
                                        <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                            <h5>
                                                view
                                            </h5>
                                        </Button>
                                        </div>
                                    </li>
                                </ul>
                                }
                            
                            </li>
                        </ul>
                        
                :
                props.filterForP==="Completed"?

                    props.dataP.type==="completed"?
                    <ul className='Notification'  style={{backgroundColor:"rgb(237, 247, 237)"}}> 
                        <li className='first'>

                            <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                            <p> {props.dataP.data3}</p>
                            <p className='date'> {props.dataP.data4}</p>

                            <span className='icon'> 
                                <CheckCircleOutlineIcon style={{color:"rgb(0 241 0)"}}/>
                            </span>
                        </li>
                        <li className='second'>
                            {props.dataP.data6!=="New message"?
                                <ul> 
                                    <li>
                                        {"NGN "+ props.dataP.data5}
                                    </li>
                                    <li>
                                        <div>
                                        <Button  onClick={()=>props.handleClickOnViewButtonP(true)}  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                            <h5>
                                                view
                                            </h5>
                                        </Button>
                                        </div>
                                    </li>
                                </ul>
                            :
                            <ul> 
                                <li>
                                
                                </li>
                                <li>
                                    <div className='message'>
                                    <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                        <h5>
                                            view
                                        </h5>
                                    </Button>
                                    </div>
                                </li>
                            </ul>
                            }
                        
                        </li>
                    </ul>
                    :
                                ''
                :
                props.filterForP==="Pending"?
                        props.dataP.type==="pending"?
                            <ul className='Notification'  style={{backgroundColor:"rgb(255, 244, 229)"}}> 
                                <li className='first'>

                                    <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                                    <p> {props.dataP.data3}</p>
                                    <p className='date'> {props.dataP.data4}</p>

                                    <span className='icon'> 
                                        <WarningAmberIcon  style={{color:"rgb(251 145 0)"}}/>
                                    </span>

                                </li>
                                <li className='second'>
                                    {props.dataP.data6!=="New message"?
                                        <ul> 
                                            <li>
                                                {"NGN "+ props.dataP.data5}
                                            </li>
                                            <li>
                                                <div>
                                                <Button onClick={()=>props.handleClickOnViewButtonP(true)}   ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                                    <h5>
                                                        view
                                                    </h5>
                                                </Button>
                                                </div>
                                            </li>
                                        </ul>
                                    :
                                    <ul> 
                                        <li>
                                            
                                        </li>
                                        <li>
                                            <div className='message'>
                                            <Button    ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                                <h5>
                                                    view
                                                </h5>
                                            </Button>
                                            </div>
                                        </li>
                                    </ul>
                                    }
                                
                                </li>
                            </ul>
                        :
                        ''
                    :

                    props.dataP.type===""?

                    <ul className='Notification' style={{backgroundColor:"rgb(229, 246, 253)"}}> 
                        <li className='first'>

                            <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>

                            <p> {props.dataP.data3}</p>
                            <p className='date'> {props.dataP.data4}</p>

                            <span className='icon'> 
                                <InfoOutlinedIcon style={{color:"rgb(10 183 255)"}}/>
                            </span>
                        </li>
                        <li className='second'>
                            {props.dataP.data6!=="New message"?
                                <ul> 
                                    <li>
                                        {"NGN "+ props.dataP.data5}
                                    </li>
                                    <li>
                                        <div>
                                        <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                            <h5>
                                                view
                                            </h5>
                                        </Button>
                                        </div>
                                    </li>
                                </ul>
                            :
                            <ul> 
                                <li>
                                
                                </li>
                                <li>
                                    <div className='message'>
                                    <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                                        <h5>
                                            view
                                        </h5>
                                    </Button>
                                    </div>
                                </li>
                            </ul>
                            }
                        
                        </li>
                    </ul> 
                    :

                        ''
                
            }


        </>
      
  )
}

