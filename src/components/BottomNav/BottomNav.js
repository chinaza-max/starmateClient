import "./BottomNav.css";
import {NavLink} from "react-router-dom";
import FlexRow from "../styledComponent/Flexrow.styled"
import FlexColumn  from "../styledComponent/Flexcolumn.styled"
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function BottomNav(props) {

  
  return (
      <footer className="HomeBottomNavContainer">
        <FlexRow className="HomeBottomNav">
          <li>
            <NavLink  to='/' className="HomeBottomNavAncho"  activeclassname="active">
              <FlexColumn>
                <li><HomeIcon/></li>
                <li><span>Home</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Home/Dashboard'  className="HomeBottomNavAncho">
              <FlexColumn onClick={()=>{props.funcP()}}>
                <li><DashboardIcon/></li>
                <li><span >Dashboard</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Home/Project'  className="HomeBottomNavAncho" >
              <FlexColumn onClick={()=>{props.funcP()}}>
                <li><AssignmentIcon/></li>
                <li><span>Project</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Home/Transaction'  className="HomeBottomNavAncho" >
              <FlexColumn onClick={()=>{props.funcP()}}>
                <li><ReceiptIcon/></li>
                <li><span>Transaction</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Home/Notification'  className="HomeBottomNavAncho" >
              <FlexColumn onClick={()=>{props.funcP()}}>
                <li>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon  />
                </Badge>
                </li>
                <li><span>Notification</span></li>
              </FlexColumn>
            </NavLink>
          </li>
          <li>
            <NavLink  to='/Home/Settings'  className="HomeBottomNavAncho" >
              <FlexColumn onClick={()=>{props.funcP()}}>
                <li><SettingsIcon/></li>
                <li><span>Settings</span></li>
              </FlexColumn>
            </NavLink>
          </li>
        </FlexRow>
      </footer>
  )
}


