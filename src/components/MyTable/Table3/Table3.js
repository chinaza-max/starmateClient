import "./Table3.css"
import Button from '../../styledComponent/ButtonNoIcon.styled';
import Modal1 from "../../materialUI/Modal/PendingJob/PendingJob"
import React,{useState} from 'react'


export default function Table3(props) {

    const [modalStatus, setModalStatus]=useState(false)

    function handleClick(){
      setModalStatus(true)
    }
    function handleCoseModal(){
      setModalStatus(false)
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "900",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        maxHeight: 700,
        pt: 2,
        px: 4,
        pb: 3,
      };
      


  return (
    <> 
    <Modal1 modalStatusP={modalStatus} styleP={style}   modalStatusFuncP={handleCoseModal}/> 
    <ul className="Table3">
        <li>{props.dataP.data1}</li>
        <li>{props.dataP.data2}</li>
        <li>{props.dataP.data3}</li>
        <li>{props.dataP.data4}</li>
        <li>{props.dataP.data5}</li>
        <li className="button">
            <Button  borderColorP="green" buttonColorP="green" ColorP="white" onClick={()=>handleClick()}>
                <h5>view</h5>
            </Button>
        </li>
        <li className="button">
            <Button borderColorP="green" buttonColorP="green" ColorP="white">
                <h5>pay</h5>
            </Button>
        </li> 
    </ul>
    </> 
  )
}
