import {NavLink,Link} from "react-router-dom";
import "./NavLinks.css";


export default function NavLinks(props) {


    const content=props.NavDetailsP.map((data,index)=>{

        if(data==="outPage"){

            return(
                <li key={index}>
                    <Link to={data.data4} activeclassname={data.data2}>
                        <p> 
                            {data.data}
                        </p>  
                    </Link>
                </li>
            )  
        }else{

            console.log("ss")
            return(
                <li key={index}>
                    <NavLink to={data.data4} activeclassname={data.data2}>
                        <p> 
                            {data.data}
                            {
                                data.data==="Notification"?
                                    <span>{data.data6}</span>
                                :
                                    ""
                            }
                        </p>  
                    </NavLink>
                </li>
            )
            
        }
    })

  return (
    
    <ul className="NavLinks" role="navigation">
        {content}
    </ul>
  )
}
