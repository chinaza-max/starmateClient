import './Notification.css'
import Button from '../../styledComponent/ButtonNoIcon.styled';





export default function Notification(props) {
  return (
        <ul className='Notification'> 
            <li className='first'>
                <h2> {props.dataP.data1} {" "+props.dataP.data2}</h2>
                <p> {props.dataP.data3}</p>
                <p className='date'> {props.dataP.data4}</p>
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
  )
}
