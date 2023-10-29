import React from 'react';
import Button from '@mui/material/Button';
import {useEffect,useState } from 'react';
import { AlertTitle,Alert  } from '@mui/material';
import "./PendingJob.css"



export default function PendingJob(props) {
  const [modalStyle, setModalStyle]=useState([])
  const [open, setOpen] =useState(false);
 

  const handleClose = () => {
    setOpen(false);
    props.modalStatusFuncP(false)
  };

  useEffect(()=>{
    setModalStyle(props.styleP)
    setOpen(props.modalStatusP);
    
  },[props.modalStatusP,props.styleP])

    
  return (

    <>


    {
      
    }
             <div className='PendingJob'>
            kkkk
            </div>
    </>

 
  )
}


/**
 *   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        
      >
        <Box sx={{ ...modalStyle, width: 400 }}>
          <h2 id="parent-modal-title" style={{"textAlign":"center"}}>Text in a modal</h2>
          <div id="parent-modal-description"  style={{...content}}>


          <Alert variant="outlined" severity="success">
            <AlertTitle>Service</AlertTitle>
            Fumigation
          </Alert>
          <Alert variant="outlined" severity="success">
            <AlertTitle>Service Type</AlertTitle>
            Subscription
          </Alert>

          <Alert variant="outlined" severity="success">
            <AlertTitle>No of staff</AlertTitle>
            10
          </Alert>


          <Alert variant="outlined" severity="success">
            <AlertTitle>No of building</AlertTitle>
            2
          </Alert>

          <Alert variant="outlined" severity="success">
            <AlertTitle>Job description</AlertTitle>
            fumigate all the room and barkyard
          </Alert>

          <Alert variant="outlined" severity="success">
            <AlertTitle>Amount</AlertTitle>
            NGN 200000
          </Alert>

          <Alert variant="outlined" severity="success">
            <AlertTitle>Start date </AlertTitle>
            2/12/2022
          </Alert>


          <Alert variant="outlined" severity="success">
            <AlertTitle>End date  </AlertTitle>
            2/12/2022
          </Alert>


          </div>
          <ChildModal />
        </Box>
      </Modal>
 */