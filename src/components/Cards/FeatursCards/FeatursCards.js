import React from 'react'
import {useEffect,useState} from "react";
import {useTransition,animated}  from "react-spring"
import handleViewport from 'react-in-viewport';
import "./FeatursCards.css"



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
      setItems(props.featureDescrptionP)
    }
  },[inViewport, props.featureDescrptionP] )

  return (
    <ul  className='FeatursCards'  ref={forwardedRef}>
          {
            transition((style,item)=>
            item?
              <animated.li style={style} className={item.data2}>
                
                  <div>
                    <div><item.icon className="icons"/></div>
                    <h2>{item.type}</h2>
                    <p>{item.description}</p>
                  </div>

              </animated.li>
            :""
           )
          }  
    </ul>
  )
}

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export default function FeatursCards(props) {

  
  return (
    <>
      <ViewportBlock featureDescrptionP={props.featureDescrptionP} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    </>
  )
}
