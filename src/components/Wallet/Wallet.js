import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Form from "../../components/Form2/Form2";
import img from "../../images/image20.jpg"
import {useState} from 'react';
import "./Wallet.css";



export default function Wallet() {
    const [disiplayForm,setDisiplayForm]=useState(false)


    function ToggleOverlay(val){
        setDisiplayForm(val)
    }


  return (
    <div className='wallet'>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Balance:  NGN   5000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Money from wallet cant be withdrawn to avoid money laundering
                </Typography>
               
                </CardContent>
                
            </CardActionArea>
            <div className='buttonContainer'>
            <Button variant="outlined" className='button'  onClick={()=>ToggleOverlay(true)}>Fund</Button>
            </div>
            </Card>
            <Form dataP={disiplayForm}  funcP={ToggleOverlay} typeP="wallet"/>
    </div>
  )
}


//https://www.istockphoto.com/search/2/image?alloweduse=availableforalluses&phrase=fund%20wallet&page=2