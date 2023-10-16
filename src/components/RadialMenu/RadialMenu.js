import React,{useEffect,useState } from 'react';
import "./radialMenu.css"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SettingsVoiceOutlinedIcon from '@mui/icons-material/SettingsVoiceOutlined';
/**https://codepen.io/demavia/pen/MaVLOE */

export default function RadialMenu(props) {

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    
    setOpen(props.openP)

  },[props.openP])


  return (
    <div className='radialMenu'>

        <div id="container">
            <div>
                <AttachFileIcon/>
            </div>
        </div>

        <div className='circle-container'>
            <span  className={open===true? 'deg0 open':'deg0 hidden' }  onClick={()=>{props.isRecordingHndleP(false); props.handleIconClickP()}}><AttachFileOutlinedIcon/></span>
            <span  className={open===true? 'deg30 open':'deg30 hidden' } onClick={()=>{ /* props.isRecordingHndleP(true);  props.startRecordingHandlerP() */}} ><VideoCameraBackOutlinedIcon/></span>
            <span  className={open===true? 'deg60 open':'deg60 hidden' }><SettingsVoiceOutlinedIcon/></span>
        </div>
    </div>
  )
}


