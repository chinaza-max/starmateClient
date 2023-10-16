import './Notifications.css'
import Card from "../Notification/Notification";




export default function Notifications (props) {
      

  const content=props.dataP.map((data,index)=>{
    return(
        <Card key={index} dataP={data} />
    )
})
  return (
    <div className='Notifications'>
        {content}
    </div>
  )
}