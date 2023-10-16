import './Container2.css'
import Nav from "../../components/MainNav/MainNav"
import BottomNav from '../../components/BottomNav/BottomNav'
import Footer from '../../components/Footer/Footer'
import {useTheme}  from "../../themeContext"
import {Outlet} from "react-router-dom";
import TextAnimation from "react-text-animations";

export default function Container2() {
  const darkTheme =useTheme()

  //THEMES
  const FooterTheme={
    backgroundColor:darkTheme?'black':"#214c3b",
    color:darkTheme?'black':"white",
  }


  const NavlinksLogin=[{x:0,data:"Instant Request",data2:"SelectedLink2",data3:0,delay:100,data4:"/Home/Instant",data5:""},
                        {x:0,data:"Subscribe Now",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Subscription",data5:""},
                        {x:0,data:"Affiliate",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Affiliate",data5:""}]
  
  const NavlinksNotLogin=[{x:0,data:"Instant Request",data2:"SelectedLink2",data3:0,delay:100,data4:"/Home/Instant",data5:""},
                        {x:0,data:"Subscribe Now",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Subscription",data5:""},
                        {x:0,data:"Affiliate",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Affiliate",data5:""}]

  return (
    <div className='Container2'>
        <div className='Container2Section1'>
                <Nav NavlinksLoginP={NavlinksLogin}  NavlinksNotLoginP={NavlinksNotLogin}/>
        </div>
        <div className='Container2Section2'>
          <div className='imgContainer'>
            <div className='formContainer'>
              <Outlet/>
            </div>
          </div>
          <div className='info'>
              <TextAnimation.Zoom target="neighbour" text={['neighbour', 'friends', 'father','mother','community']}  animation={{
                            duration:3000,
                            delay:5000,
                            timingFunction:'ease-out',
                        }}>
                         Book for your neighbour
              </TextAnimation.Zoom>
          </div>
        </div>
        <div className='Container2Section3'>
          <BottomNav/>
        </div>
      <div className='Container2Section4'  style={FooterTheme}>
          <Footer/>
      </div>
    </div>
  )
}
