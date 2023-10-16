import React,{useEffect,useState} from 'react'
import mopStick from "../../images/imageInUse/mop.svg"
import "./AutoTyping.css"






export default function AutoTyping(props) {


    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorIsVisible, setCursorIsVisible] = useState(true);


    useEffect(()=>{
    
    
        const timer = setTimeout(() => {
          if (currentIndex < props.textP.length) {
            setDisplayedText(props.textP.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }else{
            console.log("done")
            setCursorIsVisible(false)
          }
        }, 200);
    
        return () => {
          clearTimeout(timer);
        };
    
    },[currentIndex,cursorIsVisible, props.textP])
    
  return (
    <> {displayedText}


    {cursorIsVisible===true&&
        <span className="cursor">
        <img src={mopStick} alt="mop stick"/>
            </span>
    }
        
    </>
  )
}
