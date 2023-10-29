import React from 'react'
import "./Others.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Button from '@mui/material/Button';


export default function Others() {
  return (
    <div className='Others'>
        <Button className='logOutButton' variant="outlined">Log out</Button>
    </div>
  )
}


/*

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function ColumnsGrid(props) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item className='item'>xs=8</Item>
          </Grid>

          <Grid item xs={8}>
            <Item  className='item'>  

                {

                }                       
                <props.iconP  className="notificationOff"   style={{color:"red"}}/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
}
*/