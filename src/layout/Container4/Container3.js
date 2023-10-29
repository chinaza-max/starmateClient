import  './Container3.css'
import {Outlet} from "react-router-dom";
import Nav from "../../components/MainNav/MainNav"
import BottomNav from '../../components/BottomNav/BottomNav';
import {useTheme}  from "../../themeContext"
import {useSelector } from "react-redux";


export default function Container3() {
    const darkTheme =useTheme()
    const isLoggedIn=useSelector(state=> state.isLoggedIn)



    const NavlinksLogin=[{x:0,data:"Home",data2:"SelectedLink2",data3:0,delay:100,data4:"/",data5:"",data6:"active2"},
    {x:0,data:"Gallery",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Gallery",data5:"",data6:"active2"},
    {x:0,data:"Dashboard",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Dashboard",data5:"",data6:"active2"},
    {x:0,data:"Affiliate",data2:"SelectedLink2",data3:3,delay:400,data4:"/Home/Affiliate",data5:"",data6:"active2"}]

    const NavlinksNotLogin=[{x:0,data:"Home",data2:"SelectedLink2",data3:0,delay:100,data4:"/",data5:"",data6:"active2"},
    {x:0,data:"Gallery",data2:"SelectedLink2",data3:1,delay:200,data4:"/Home/Gallery",data5:"",data6:"active2"},
    {x:0,data:"Affiliate",data2:"SelectedLink2",data3:3,delay:400,data4:"/Home/Affiliate",data5:"",data6:"active2"}]


//THEMES
  const FooterTheme={
    backgroundColor:darkTheme?'black':"#214c3b",
    color:darkTheme?'black':"white",
  }

  return (
    <div className='Container3'>
        <div className='Container3Section1'>
            <Nav NavlinksLoginP={NavlinksLogin}  NavlinksNotLoginP={NavlinksNotLogin}/>
        </div>
        <div className='Container3Section2'>
            <Outlet/>
        </div>

        {isLoggedIn===true?
          <div className='Container3Section3'>
            <BottomNav/>
          </div>
          :
          ''
        }
       
       
    </div>
  )
}

/** <div className='Container3Section4' id='section7'  style={FooterTheme}>
            <Footer/>
        </div> */
