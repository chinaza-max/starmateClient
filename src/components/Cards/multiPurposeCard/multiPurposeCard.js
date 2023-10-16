import './multiPurposeCard.css'
import React,{useState} from 'react'
import Button from '../../styledComponent/ButtonNoIcon.styled'
import Modal1 from "../../materialUI/Modal/PendingJob/PendingJob"

export default function MultiPurposeCard(props) {
  const [modalStatus, setModalStatus]=useState(false)

  function handleClick(){
    setModalStatus(true)
    props.handleClickOnViewButtonP(true)
  }
  function handleCoseModal(){
    setModalStatus(false)
  }


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  //handleClickOnViewButtonP
  return (
  <> 



    {
      props.projectDetailsP?
        "project details"
      :

      <> 
        <Modal1 modalStatusP={modalStatus} styleP={style}  modalStatusFuncP={handleCoseModal}/> 
        <ul className='multiPurposeCard'> 
            <li className='first'>
            
              {props.typeP==="Pending"?
                <>
                    <h3>{props.dataP.data3}</h3>
                    <p className='service'>{props.dataP.data4}</p>
                    <p className='position'>Created: {props.dataP.data1}</p>
                    <p>Expire: {props.dataP.data2}</p>
                </>
              :
              
              <>
                  {props.typeP==="active"?
                      <>
                      <h3>{props.dataP.data1}</h3>
                      <p className='service'>{props.dataP.data3}</p>
                      <p className='date'>{props.dataP.data2}</p>
                      </>
                    :
                    <>
                    <h3>{props.dataP.data4}</h3>
                    <p>{"ID: "+props.dataP.data2}</p>
                    <p className='date'>{props.dataP.data1}</p>
                    </>
                  }
                
              </>
              }
            
            </li>
            <li className='second'>

              {props.typeP==="Pending"?
                <>
                    <ul className='button'> 
                      <li>
                          <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} onClick={()=>handleClick()} >         
                            <h5>
                                view
                            </h5>
                          </Button>
                      </li>
                      <li>
                          <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >         
                            <h5>
                                pay
                            </h5>
                          </Button>
                      </li>
                  </ul>
                  <ul className='payment'> 
                      <li>
                        Amount:   
                      </li>
                      <li>
                      {props.dataP.data5}    
                      </li>
                  </ul>
                </>
              :
              <>
                  {props.typeP==="active"? 
                      <>
                      <ul className='button'> 
                        <li>
                            <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"}  onClick={()=>handleClick()}>         
                              <h5>
                                  view
                              </h5>
                            </Button>
                        </li>
                        <li>
                            <Button  ColorP="white" buttonColorP={"green"} borderColorP={"white"} >  
                            {props.dataP.data4===props.dataP.data5?
                              <h5>
                                renew
                              </h5>
                              :
                              <h5>
                                  pay
                              </h5>
                            }       
                              
                            </Button>
                        </li>
                    </ul>
                    <ul className='payment'> 

                        {props.dataP.data4===props.dataP.data5?
                          <>
                            <li>
                              Amount
                              </li>
                              <li>
                              {"NGN "+props.dataP.data4}    
                            </li> 
                          </>
                        :
                        <>
                          <li>
                            Amount
                            </li>
                            <li>
                            {"NGN " + props.dataP.data4}    
                          </li> 
                          <li>
                          Unpaid
                            </li>
                            <li>
                            {"NGN " + props.dataP.data5}    
                          </li> 
                        </>
                        }
                      
                    </ul>
                  </>
                  :
                  <>
                      <p className={props.dataP.data4==="project payment"?"changeColor p":"p pColor"}>{"NGN " +props.dataP.data3}</p>
                      <p className='p'>{props.dataP.data5}</p>
                  </>
                  }
                  
              </>
              }
              
            </li>
        </ul>
      </> 
    }





  </> 
  )
}
