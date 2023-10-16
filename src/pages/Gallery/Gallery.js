
import './Gallery.css';
import Button from "../../components/styledComponent/Button.style";
import React,{useState,useEffect} from 'react'
import {useTheme}  from "../../themeContext"
import MyGallery from '../../components/materialUI/Gallery';
import MyVideo from "../../components/materialUI/GalleryVideo"

import img1 from "../../images/imageInUse/galleryImage/imageG1.jpg"
import img2 from "../../images/imageInUse/galleryImage/imageG2.jpg"
import img3 from "../../images/imageInUse/galleryImage/imageG3.jpg"
import img4 from "../../images/imageInUse/galleryImage/imageG4.jpg"
import img5 from "../../images/imageInUse/galleryImage/imageG5.jpg"
import img6 from "../../images/imageInUse/galleryImage/imageG6.jpg"
import img7 from "../../images/imageInUse/galleryImage/imageG7.jpg"
import img8 from "../../images/imageInUse/galleryImage/imageG8.jpg"
import img9 from "../../images/imageInUse/galleryImage/imageG9.jpg"
import img10 from "../../images/imageInUse/galleryImage/imageG10.jpg"
import img11 from "../../images/imageInUse/galleryImage/imageG11.jpg"
import img12 from "../../images/imageInUse/galleryImage/imageG12.jpg"
import img13 from "../../images/imageInUse/galleryImage/imageG13.jpg"
import img14 from "../../images/imageInUse/galleryImage/imageG14.jpg"
import img15 from "../../images/imageInUse/galleryImage/imageG15.jpg"
import img16 from "../../images/imageInUse/galleryImage/imageG16.jpg"
import img17 from "../../images/imageInUse/galleryImage/imageG17.jpg"
import img18 from "../../images/imageInUse/galleryImage/imageG18.jpg"
import img19 from "../../images/imageInUse/galleryImage/imageG19.jpg"
import img20 from "../../images/imageInUse/galleryImage/imageG20.jpg"
import img21 from "../../images/imageInUse/galleryImage/imageG21.jpg"
import img22 from "../../images/imageInUse/galleryImage/imageG22.jpg"
import img23 from "../../images/imageInUse/galleryImage/imageG23.jpg"




const video1 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294733/video/dy1qhewq69tklqa1ue3o.mp4"
const video2 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294693/video/t1y7brdafyu3noqr7yte.mp4"
const video3 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294590/video/nfdeah27f1mvwlfz2z5e.mp4"
const video4 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294537/video/wa8ujqtyuvz28uccgzpi.mp4"
const video5 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294523/video/n266e2ubka9iyovfgzsx.mp4"
const video6 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294482/video/e15oxipeuvphlgw8xmj1.mp4"
const video7 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294477/video/ck1ylhjkfcxn8fxsx3q9.mp4"
const video8  ="https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294470/video/fwekwmsbcisbavnfbi0g.mp4"
const video9  ="https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294435/video/tfwk8eadqvi1uvbrmq4n.mp4"
const video10 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294423/video/roib4titujgqut4iitsx.mp4"
const video11 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294388/video/zeb87erzrph29suatxzi.mp4"
const video12 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294279/video/dswhxatvvtvubyr4clau.mp4"
const video13 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294255/video/exgsin6b2doa4tzjfvxe.mp4"
const video14 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294227/video/np5qhe9viv5q9c9pqnyy.mp4"
const video15 = "https://res.cloudinary.com/dvznn9s4g/video/upload/v1697294197/video/za1lovtkqvitz8mlsgxs.mp4"



export default function Gallery() {
  const darkTheme =useTheme()
  const [view,setView] =useState("image")

  function selectView(val){
    setView(val)
  }

  const buttonTheme={
    backgroundColor:darkTheme?'black':"rgba(40,89,69,0.6)",
    color:darkTheme?'black':"green",
  }

  useEffect(()=>{

  },[view])
  return (
    <>
      <div className='Gallery'>
          <div className='section1'>
            <ul className='buttonContainer'>
              <li>
                <Button  id="callButton" ColorP="white" onClick={()=>{selectView("image")}} buttonColorP={view==="image"?buttonTheme.backgroundColor:"transparent"} borderColorP={buttonTheme.color} >     
                  <h5>
                    
                    <span>
                      Image
                    </span>
                  </h5>
                </Button>
              </li>

              <li>
                  <Button  id="callButton" ColorP="white" onClick={()=>{selectView("video")}}  buttonColorP={view==="video"?buttonTheme.backgroundColor:"transparent"} borderColorP={buttonTheme.color} >     
                      <h5>
                      
                      <span>
                        Video
                      </span>
                    </h5>
                  </Button>
              </li>
            </ul>
          </div>

        {view==="image"?
            <div className='section2'>
              <MyGallery itemDataP={itemData}  itemDataP2={itemDataUrl} />
            </div>:
            <div className='section2'>
            <MyVideo itemDataP={itemData}  itemDataP2={videos} />
          </div>
          }
          
      </div>
    </>
    
  )
}

const itemData = [
  {
    img:img1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
     img:img2,
    title: 'Burger',
  },
  {
     img:img3,
    title: 'Camera',
  },
  {
     img:img4,
    title: 'Coffee',
    cols: 2,
  },
  {
     img:img5,
    title: 'Hats',
    cols: 2,
  },
  {
     img:img6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
     img:img7,
    title: 'Basketball',
  },
  {
     img:img8,
    title: 'Fern',
  },
  {
     img:img9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
     img:img10,
    title: 'Tomato basil',
  },
  {
     img:img11,
    title: 'Sea star',
  },
  {
     img:img12,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img13,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img14,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img15,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img16,
    title: 'bb',
   
  },
  {
     img:img17,
    title: 'ooo',
  },
  {
     img:img18,
    title: 'Biiiike',
    
  },
  {
     img:img19,
    title: 'Bikoooe',
    
  },
  {
     img:img20,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img21,
    title: 'Bipke',
    rows: 2,
    cols: 2
  },
  {
     img:img22,
    title: 'Bike',
    cols: 2,
  },
  {
     img:img23,
    title: 'Bike',
    cols: 2,
  }
];

const videos = [video1,video2,video3,video4,video5,video6,video7,video8,video9,video10,
  video11,video12,video13,video14,video15
];

const itemDataUrl = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
    img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23
];

