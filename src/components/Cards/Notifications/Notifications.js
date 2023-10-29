import './Notifications.css'
import Card from "../Notification/Notification";
import DropDown from "../../DropDown/DropDown"
import {useState,useEffect} from 'react'



export default function Notifications (props) {
  const [filterFor, setFilterFor ] = useState('All');

  const handleChangeInDropDown=(value)=>{
    setFilterFor(value)
  }

  const content=props.dataP.map((data,index)=>{
    return(
        <Card  filterForP={filterFor} key={index} dataP={data}  handleClickOnViewButtonP={props.handleClickOnViewButtonP} />
    )
  })

  useEffect(()=>{
   
      console.log(filterFor)
  },[filterFor])


  return (
    <div className='Notifications'>

        <div className='dropDownContainer'>
          <div className='dropDown'>
              <DropDown  handleChangeInDropDownP={handleChangeInDropDown}/>
          </div>
        </div>

        {content}
    </div>
  )
}