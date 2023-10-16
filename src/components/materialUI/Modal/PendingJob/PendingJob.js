import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import Button from '@mui/material/Button';
import {useEffect,useState } from 'react';
import { AlertTitle,Alert  } from '@mui/material';
import "./PendingJob.css"






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function PendingJob(props) {
  const [modalStyle, setModalStyle]=useState([])
  const [open, setOpen] =useState(false);
 
  const content={
    padding: 12,
    overflow: 'scroll'
  }
 /*
  const handleOpen = () => {
    setOpen(true);
    props.modalStatusFuncP(false)

  };*/

  const handleClose = () => {
    setOpen(false);
    props.modalStatusFuncP(false)
  };

  useEffect(()=>{
    setModalStyle(props.styleP)
    setOpen(props.modalStatusP);
    
  },[props.modalStatusP,props.styleP])

    
  return (
    <div>
      <Modal
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
    </div>
  )
}
