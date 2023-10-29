import "./MainNav.css";
import {useEffect,useState} from "react";
import {useTheme}  from "../../themeContext";
import img from "../../images/starmatelogo.png";
import {useTransition,animated}  from "react-spring"
import Button from "../styledComponent/ButtonLogin.styled";
import Nav2  from "../MainNav2/MainNav2"
import {Link ,useNavigate} from "react-router-dom";
import {useSelector,useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {selectSettingtab2} from "../../Redux/Action";



//import {useSelector } from "react-redux"
//import {DisplayJoinUsPage,DisplayLoginPage}  from "../../Redux/Action"

export default function MainNav(props) {
  const [items,setItems]=useState([]);
  const [items2,setItems2]=useState(false);
  const isLoggedIn=useSelector(state=> state.isLoggedIn)
  const Dispatch=useDispatch()

  const darkTheme =useTheme()
  const navigate=useNavigate()
  
 
  const transition2=useTransition(items2,{
    from:{x:0,y:0,opacity:0},
    enter:{x:0,y:0,opacity:1},
  })

  const NavBarTheme={
    backgroundColor:darkTheme?'black':"#285945",
    color:darkTheme?'white':"white",
  }

  const HandleMoveToWallet=()=>{
    Dispatch(selectSettingtab2())
    navigate("/Home/Settings")
  }
  const HandleMoveToProfile=()=>{
    Dispatch(selectSettingtab2())
    navigate("/Home/Settings")
 
  }

  const HandleMoveToSignIn=()=>{
    Dispatch(selectSettingtab2())
    navigate("/Sign-In")
  }

  const HandleMoveToSignUp=()=>{
    Dispatch(selectSettingtab2())
    navigate("/Sign-up")
  }
  useEffect(()=>{
    setTimeout(()=>{

      if(isLoggedIn){       
      
        setItems([{x:0,data:"Home2",data2:"SelectedLink  active",
        data3:0,delay:0},{x:0,data:"Gallery",data2:"SelectedLink",
        data3:1,delay:0},{x:0,data:"Dashboard",data2:"SelectedLink",
        data3:2,delay:0},{x:0,data:"Contact",data2:"SelectedLink",
        data3:3,delay:0}])

      }
      else{
/*
        setItems([{x:0,data:"Home",data2:"SelectedLink  active",
        data3:0,delay:110},{x:0,data:"Service",data2:"SelectedLink",
        data3:1,delay:130},{x:0,data:"Gallery",data2:"SelectedLink",
        data3:2,delay:150},{x:0,data:"Contact",data2:"SelectedLink",
        data3:3,delay:170}])
*/
      }
        setItems2(true)
  }
    ,1000)
  },[isLoggedIn])
  
  return (
    <>
    <nav className="MainNav" style={NavBarTheme}>
      
      <ul id="upNav">
        <li id="logo">
        
            {
                transition2((style,item)=>
                 item?
                  <animated.span style={style}>
                    <Link to={"/home"}>
                    <img src={img} alt="logo"/>
                    </Link>
                  </animated.span>
                 :""
                ) 
              } 
        </li>

        <li>        
          {isLoggedIn?
          <>
            <ul className="rightSide">
              <li> <span onClick={HandleMoveToWallet}>fund wallet</span>  </li>
              <li> <span onClick={HandleMoveToProfile} className="AccountCircleIcon"><AccountCircleIcon/></span>  </li>
            </ul>
          </>
          :
            <>
              <span id="first">
                <Button  onClick={HandleMoveToSignIn}>
                  <h5>
                    login
                  </h5>
                </Button>
              </span>

              <span id="second">
                <Button buttonColorp="true" onClick={HandleMoveToSignUp}>
                  <h5>
                   SignUp
                  </h5>
                </Button>
              </span>
            </>
          }
        </li>
      </ul>
      <Nav2 NavlinksLoginP={props.NavlinksLoginP}  NavlinksNotLoginP={props.NavlinksNotLoginP}/>
    </nav>
    </>
  )
}
