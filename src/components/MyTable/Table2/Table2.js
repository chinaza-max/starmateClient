import "./Table2.css"

export default function Table2(props) {
  return (
    <ul className="Table2">
        <li>{props.dataP.data1}</li>
        <li>{props.dataP.data2}</li>
        <li className={props.dataP.data4==="project payment"?"changeColor":""}>{props.dataP.data3}</li>
        <li>{props.dataP.data4}</li>
        <li>{props.dataP.data5}</li>
    </ul>
  )
}
