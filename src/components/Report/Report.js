import React,{useState,useEffect,useRef} from 'react';
import "./Report.css"
import SubnavBar from "../SubnavBar/SubnavBar";
import MediaController from "../MediaController/MediaController";
import RadialMenu from "../RadialMenu/RadialMenu.js";
import Swal from 'sweetalert2'
import  randomstring from  "randomstring";


import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";


import SendIcon from "@mui/icons-material/Send";

export default function Report(props) {
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const scrollBoxRef = useRef(null);
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  
 


  const handleIconClick = () => {
    fileInputRef.current.click();
  };


  const [chats, setChats] = useState([
    { id: 1, text: "Hi there!", sender: "bot",type: "text" },
    { id: 2, text: "Hello!", sender: "user",type: "text"  },
    { id: 3, text: "How can I assist you today?", sender: "bot",type: "text"  },
    { id: 4, text: "Hello!", sender: "user",type: "text"  },
    { id: 5, text: "How can I assist you today?", sender: "bot",type: "text"  },
  ]);

  const scrollToBottom = () => {
    if (scrollBoxRef.current) {
      const scrollHeight = scrollBoxRef.current.scrollHeight;
      scrollBoxRef.current.scrollTop = scrollHeight;
    }
  }


  const handleSend = () => {
    if (input.trim() !== "") {

      setChats([...chats,{ id: 16, text: input, sender: "bot",type: "text" }])
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const startRecordingHandler = () => {

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startRecording();

    chunksRef.current = [];
    mediaRecorderRef.current.start();
  };

  const isRecordingHndle = (value) => {
    setIsRecording(value)
  };

  

  function handlefileUplaod(event) {
    const selectedFile = event.target.files[0];

    if(selectedFile.type.split("/").includes("image")){
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
          Swal.fire({
            imageUrl: `${ e.target.result}`,
            imageWidth: 400,
            imageHeight: "auto",
            imageAlt: 'Custom image',
            confirmButtonColor: 'green',
            confirmButtonText: 'upload',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              let i= randomstring.generate({
                length: 5,
                charset: 'alphabetic'
              });

              
              setChats([...chats,{ id: i, url:e.target.result, sender: "bot",type: "image"}])
            
            }
          })
        }
        reader.readAsDataURL(selectedFile);
      }
    }
    else if(selectedFile.type.split("/").includes("video")){
      const reader = new FileReader();
      reader.onload = function (e) {

        const videoURL = URL.createObjectURL(selectedFile);
        Swal.fire({
          html:
    `<iframe width="auto" height="315" src="${videoURL}" frameborder="0" autoPlay="false"  allowfullscreen></iframe>`,
          confirmButtonColor: 'green',
          confirmButtonText: 'upload',
          cancelButtonText: 'Cancel',
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            let i= randomstring.generate({
              length: 5,
              charset: 'alphabetic'
            });
            setChats([...chats,{ id: i, url:videoURL, sender: "bot",type: "video"}])
            
          }
        })
      }
      reader.readAsDataURL(selectedFile);
    }
    else{
      Swal.fire({
        icon: 'info',
        html:
          'File type not supported  ' ,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        focusConfirm: false,
        
      })
    }


    /*
    else if(selectedFile.type.split("/").includes("pdf")){
      const reader = new FileReader();
      reader.onload = function (e) {


        console.log("pdf pdf pdf pdf pdf ")
        const videoURL = URL.createObjectURL(selectedFile);
        Swal.fire({
          html:
    `<iframe width="auto" height="315" src="${e.target.result}" ></iframe>`,
          confirmButtonColor: 'green',
          confirmButtonText: 'upload',
          cancelButtonText: 'Cancel',
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            let i=9
            setChats([...chats,{ id: i, url:videoURL, sender: "bot",type: "video"}])
            i++
          }
        })
      }
      reader.readAsDataURL(selectedFile);
    }
*/
    event.target.value = ""; 
 
  }

  useEffect(()=>{
    scrollToBottom()

  },[chats,open])

  return (
    <div className='Report'>

      <SubnavBar   handleSetProjectDetailsP={props.handleSetProjectDetailsP}
              nameP={"Name of building"} rightContentP={false}    
              handleViewReportP={""} whatIsInViewP={props.whatIsInViewP}
              handleSetProjectDetailsReportP={props.handleSetProjectDetailsReportP} /> 

      {
        isRecording===true?
        <div className='video'>
            <video ref={videoRef} autoPlay playsInline muted />
            <MediaController/>
        </div>
          :''
      }
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handlefileUplaod}
      />


      <div className='ReportContainer'>
        <Box   
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "grey.200",
        }}>

          <Box  ref={scrollBoxRef} sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
            {chats.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </Box>
        
          <Box className='inputSection' sx={{ p: 2, backgroundColor: "background.default" }}>
            <Grid container spacing={2} >
              <Grid item xs={2}>
                <div className='fileIcon' onClick={()=>{setOpen((value)=>!value)}}>
                  <RadialMenu isRecordingHndleP={isRecordingHndle} startRecordingHandlerP={startRecordingHandler} handleIconClickP={handleIconClick}  openP={open}/>
                </div>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Type a message"
                  variant="outlined"
                  value={input}
                  onChange={handleInputChange}
                />
              </Grid>
              
              <Grid item xs={2}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handleSend}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </div>
    </div>
  )
}


const Message = ({ message }) => {

  const viewImage = (event) => {
    const clickedImageSrc = event.target.src;
    Swal.fire({
      imageUrl: `${clickedImageSrc}`,
      imageWidth: 400,
      imageHeight: "auto",
      imageAlt: 'Custom image',
      confirmButtonColor: 'green',
      confirmButtonText: 'ok',
    })
  }
  const isBot = message.sender === "bot";
  const type = message.type

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? "primary.main" : "secondary.main" }}>
          {isBot ? "B" : "U"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "primary.light" : "secondary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          {
            type==='text'?
              <Typography variant="body1">{message.text}</Typography>
                :
              type==='image'?       
                <div className="imageContainer">
                  <img  onClick={(event)=>viewImage(event)} src={message.url} alt="report file"/>
                </div>       
                :
                type==='video'?  
                  <div className="videoContainer">
                      <video controls={true} >
                        <source src={message.url} type="video/mp4" />
                      </video>
                  </div>  
                 :
                  <div className="imageContainer">
                    <iframe src={message.url}
                      title="image"
                      ></iframe>
                  </div>       

          }
        </Paper>
      </Box>
    </Box>
  );
};



