import './multiPurposeCards.css'
import React from 'react'
import MultiPurposeCard from "../multiPurposeCard/multiPurposeCard"



export default function MultiPurposeCards(props) {


  const content=props.dataP.map((data,index)=>{
      return(
          <MultiPurposeCard dateFilterP={props.dateFilterP} key={index} dataP={data}  projectDetailsP={props.projectDetailsP} handleClickOnViewButtonP={props.handleClickOnViewButtonP} typeP={props.typeP}/>
      )
  })  

  
  return (
    <div className='multiPurposeCards'>
      {content}
    </div>
  )
}
