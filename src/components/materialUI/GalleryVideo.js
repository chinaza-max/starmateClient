import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CardMedia,useMediaQuery } from '@mui/material';



export default function StandardImageList(props) {
  const matches = useMediaQuery('(min-width:600px)');


  return (
    <>
    <ImageList  cols={matches ? 3 : 2} >
      {props.itemDataP2.map((item,index ) => (
        <ImageListItem key={index}>
            <CardMedia
                component='video'
                className={"classes"}
                image={item}
                controls
                loading="lazy"
            />
        </ImageListItem>
      ))
      
    }
    </ImageList>

    
  </>
  );
}
