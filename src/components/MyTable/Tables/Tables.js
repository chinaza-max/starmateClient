import "./Tables.css"
import Table from "../Table/Table"



export default function Tables(props) {

  const content=props.dataP.map((data,index)=>{
                            return(
                              <Table key={index} dataP={data}/>
                            )
  })

  return (
    <div className="Tables">
        <ul className="head">
          <li><h4>Title</h4></li>
          <li><h4>Date</h4></li>
          <li><h4>Service</h4></li>
          <li><h4>Amount</h4></li>
          <li><h4>Payment</h4></li>
          <li><h4>Action</h4></li>
        </ul>
        {content}
    </div>
  )
}
