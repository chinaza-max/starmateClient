import React,{useState,useCallback} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import "./Gallery.css"



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
/*
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
*/
  return (
    <div className='Gallery'>
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {props.itemDataP.map((item,index) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img  
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            onClick={ () => openImageViewer(index) }
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}

      </ImageList>

      <PhotoSlider className="imagePreview"
      images={props.itemDataP2.map((item) => ({ src: item, key: item }))}
      visible={isViewerOpen}
      onClose={() => setIsViewerOpen(false)}
      index={currentImage}
      onIndexChange={setCurrentImage}
    />
    
    </div>
  );
}
