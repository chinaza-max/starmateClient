import './Container1.css';
import Nav from "../../components/MainNav/MainNav"
import {useTheme}  from "../../themeContext"
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/NavLinks/NavLinks';
import {Outlet} from "react-router-dom";
import img from "../../images/image8.jpg"
import BottomNav from "../../components/BottomNav/BottomNav"



export default function Container1() {
  const darkTheme =useTheme()

  //THEMES
  const FooterTheme={
    backgroundColor:darkTheme?'black':"#214c3b",
    color:darkTheme?'black':"white",
  }


  const NavDetails=[{x:0,data:"Home",data2:"",data3:0,delay:100,data4:"/",data5:"outPage",data6:""},
                        {x:0,data:"Dashboard",data2:"",data3:1,delay:200,data4:"/Home/Dashboard",data5:"",data6:""},
                        {x:0,data:"Project",data2:"",data3:2,delay:300,data4:"/Home/Project",data5:"",data6:""},
                        {x:0,data:"Transaction",data2:"",data3:3,delay:400,data4:"/Home/Transaction",data5:"",data6:""},
                        {x:0,data:"Notification",data2:"",data3:3,delay:400,data4:"/Home/Notification",data5:"",data6:"6"},
                        {x:0,data:"Settings",data2:"",data3:3,delay:400,data4:"/Home/Settings",data5:"",data6:""}]

  const NavlinksLogin=[{x:0,data:"Instant Request",data2:"SelectedLink2",data3:0,delay:100,data4:"/Home/Instant",data5:""},
                        {x:0,data:"Subscribe Now",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Subscription",data5:""},
                        {x:0,data:"Affiliate",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Affiliate",data5:""}]
  
  const NavlinksNotLogin=[{x:0,data:"Instant Request",data2:"SelectedLink2",data3:0,delay:100,data4:"/Home/Instant",data5:""},
                        {x:0,data:"Subscribe Now",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Subscription",data5:""},
                        {x:0,data:"Affiliate",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Affiliate",data5:""}]
  



    function moveUp(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }


  
    return (
        <div className='Container1'>
            <div id='Container1Section1'>
                <Nav NavlinksLoginP={NavlinksLogin}  NavlinksNotLoginP={NavlinksNotLogin}/>
            </div>
            <div id='Container1Section2'>
                <div className='navBar'>
                    <div className="avatar">
                        <img src={img} alt="#"/>
                    </div>
                    <Nav2 NavDetailsP={NavDetails}/>
                </div>
                <Outlet/>
            </div>
            <div id='Container1Section3'>
                
                <BottomNav funcP={moveUp}/>
            </div>
           
        
        </div>
    )
}

