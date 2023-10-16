import "./Table.css"
import Button from '../../../components/styledComponent/ButtonNoIcon.styled';

export default function Table(props) {
  return (
    <ul className="Table">
        <li>{props.dataP.data1}</li>
        <li>{props.dataP.data2}</li>
        <li>{props.dataP.data3}</li>
        <li>{props.dataP.data4}</li>
        <li>{props.dataP.data5}</li>
        <li className="button">
            <Button  borderColorP="green" buttonColorP="green" ColorP="white">
                <h5>view</h5>
            </Button>
        </li>
        <li className="button">
            <Button borderColorP="green" buttonColorP="green" ColorP="white">
                <h5>renew</h5>
            </Button>
        </li> 
    </ul>
  )
}

/**<li>
            <Button  borderColorP="gold" buttonColorP="gold" ColorP="white">
                <h5>view</h5>
            </Button>
        </li>
        <li>
            <Button borderColorP="gold" buttonColorP="gold" ColorP="white">
                <h5>renew</h5>
            </Button>
        </li> */