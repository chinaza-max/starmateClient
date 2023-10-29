import React,  {useState}  from 'react'
import "./HomeButton.css"
import Button from "../../components/styledComponent/Button.style";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import {useTheme}  from "../../themeContext";
import CloseIcon from '@mui/icons-material/Close';

export default function HomeButton() {
    const [videoIsView, setVideoIsView] = useState(false);
    const darkTheme =useTheme()

    const buttonTheme={
        backgroundColor:darkTheme?'black':"rgba(40,89,69,0.6)",
        color:darkTheme?'black':"green",
    }



  return (
    <div  className='HomeButton'>
        
        <div id="button">
              <ul>
                <li>
                  <span id="call">
                    <Button  id="callButton" ColorP="white" buttonColorP={buttonTheme.backgroundColor} borderColorP={buttonTheme.color} >
                    
                    <h5>
                      <PhoneIcon className="icons"/>
                      <span>
                        call us
                      </span>
                    </h5>
                    </Button>
                  </span>
                </li>
                <li>
                <span id="video" onClick={()=>setVideoIsView((value)=>!value)} >
                    <Button    id="videoButton" ColorP="white" buttonColorP="transparent" borderColorP={buttonTheme.color}>
                    <h5>
                      <PlayCircleOutlineIcon  className="icons"/>
                      <span>
                      watch video
                      </span>
                    </h5>
                    </Button>
                  </span>
                </li>
              </ul>
        </div>


        
        {
          videoIsView===true?
          <div  className="introVideoContainer">
              <div  className="introVideoContainer2">
                  <span  className="close"  onClick={()=>setVideoIsView((value)=>!value)}>
                    <CloseIcon/>
                  </span>
              </div>

              <video controls width="640" height="360" src="https://res.cloudinary.com/dvznn9s4g/video/upload/v1697809004/video/zc1rwdiibsmufubpolom.mp4" type="video/mp4">
              </video>

          </div>
          :
          <div>

          </div>
        }
    </div>
  )
}
