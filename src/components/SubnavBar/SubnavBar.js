import React from 'react'
import "./SubnavBar.css"
import ArrowBack from '@mui/icons-material/ArrowBack';



export default function SubnavBar(props) {


  return (
    <div className='SubnavBar'>
         <ul>
                <li><span  onClick={()=>props.handleBackArrowP()}> <ArrowBack   className="ArrowBack"/>   </span></li>
                <li>
                    
                    {props.rightContentP ?
                             <h2>{props.nameP}</h2>
                                :
                             ''
                    }


                    </li>
                <li>
                    <div onClick={()=>props.handleViewReportP()}>
                        {props.rightContentP ?
                            <> 
                                Report<span>3 </span>
                            </>
                                :
                            props.nameP
                        }
                    </div>
                </li>
            </ul>
    </div>
  )
}
