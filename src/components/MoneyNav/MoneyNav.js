import "./MoneyNav.css";
import { useState, useEffect } from "react"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RefreshIcon from '@mui/icons-material/Refresh';
import Flex from "../../components/styledComponent/Flexrow.styled"


export default function MoneyNav() {
  const [Visibility, setVisibility] = useState("true")

  function visible() {
    if (Visibility === "true") {
      window.localStorage.setItem('Visibility', "false");
      setVisibility("false")
    }
    else {
      window.localStorage.setItem('Visibility', "true");
      setVisibility("true")
    }
  }

  function refresh() {
    let element = document.querySelectorAll(".amountConatainer_load")
    element.forEach(element => {
      element.classList.toggle("refresh")
    });
  }

  let money = 200
  let width = String(money).length * 7.2;

  useEffect(() => {
    setVisibility(window.localStorage.getItem('Visibility'))
  }, [])
  return (
    <ul className="MoneyNav">
        <li>
          {Visibility !== "false" ?
            <span onClick={() => visible()}><RemoveRedEyeIcon style={{ "fontSize": "13px" }} /></span>
            :
            <span onClick={() => visible()}><VisibilityOffIcon style={{ "fontSize": "13px" }} /></span>
          }
        </li>
        <li>
          <Flex>
            <li>NGN </li>
            <li>
              <input type={Visibility !== "false" ? "text" : 'password'} style={{ "width": `${width}px` }}
                value={money} className="MoneyNavInput" readOnly />
            </li>
          </Flex>
        </li>
        <li><span className="amountConatainer_load" onClick={() => { refresh() }}><RefreshIcon style={{ "fontSize": "13px" }} /></span></li>
    </ul>
  )
}
