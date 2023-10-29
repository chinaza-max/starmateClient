import React from 'react'
import "./SubnavBar.css"
import ArrowBack from '@mui/icons-material/ArrowBack';



export default function SubnavBar(props) {


    return (
    <div className='SubnavBar'>
         <ul>
                <li>
                    
                    <span  onClick={ 
                        
                        ()=>{

                            if(props.whatIsInViewP==="report"){
                                props.handleSetProjectDetailsReportP(false)

                            }
                            else{
                                props.handleClickOnViewButtonP(false)
                            }
                           
                        }
                        }> <ArrowBack   className="ArrowBack"/>   </span>
                    
                    </li>
                <li>
                    
                    {props.rightContentP ?
                        <h2>{props.nameP}</h2>
                        :
                        ''
                    }


                    </li>
                <li>


                    {
                        props.projectDetailsDataP?.type==="pending"?
                            ''
                        :

                        <div onClick={()=>props.handleSetProjectDetailsReportP(true)}>
                            {props.rightContentP ?
                                <> 
                                    Report<span>3 </span>
                                </>
                                    :
                                props.nameP
                            }

                        </div>

                    }
                 

                </li>
            </ul>
    </div>
  )
}
