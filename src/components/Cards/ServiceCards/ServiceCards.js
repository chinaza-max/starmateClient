import React from 'react';
import "./ServiceCards.css";
import Card from "../../Cards/ServiceCard/ServiceCard";
import {useTransition,animated}  from "react-spring";
import {useEffect,useState} from "react";
import handleViewport from 'react-in-viewport';



function Block(props) {
  const { inViewport, forwardedRef } = props;
  const [items,setItems]=useState([]);
  const transition=useTransition(items,{
    from:{x:0,y:900,opacity:0},
    enter:item=>(next)=>(
      next({x:item.x,y:0,opacity:1,delay:item.delay})
    ), 
    leave:{x:0,y:0,opacity:0},
  })


  useEffect(()=>{

    if(inViewport){
      setItems(props.serviceDescrptionP)
    }
  },[inViewport, props.serviceDescrptionP] )
  return (
    <ul className='ServiceCards'   ref={forwardedRef}>

          {
            transition((style,item)=>
            item?
              <animated.li style={style} >
                   <Card  serviceDescrptionP={item}/>
              </animated.li>
            :""
           )
          }  
    </ul>
  )
}




const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export default function ServiceCards(props) {

   return (
    <>
      <ViewportBlock serviceDescrptionP={props.serviceDescrptionP} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    </>
   )
 }
