import React from 'react'
import "./Notification.css";
import Card from "../../components/Cards/Notifications/Notifications"

export default function Notification() {

  const data=[{data1:"big joe house",data2:"pending payment",data3:"cleaning",data4:"2/2/2022",data5:"4000",data6:""},
            {data1:"big joe house",data2:"pending payment",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:""}
            ,
            {data1:"New message",data2:"",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:"New message"}
            ,
            {data1:"big joe house",data2:"pending payment",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:""}
            ,
            {data1:"big joe house",data2:"pending payment",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:""}]
  
  
  
  return (
    <div>
        <Card dataP={data}/>
    </div>
  )
}
