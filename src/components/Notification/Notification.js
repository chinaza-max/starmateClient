import React,{useState,useEffect} from 'react'
import "./Notification.css";
import Card from "../../components/Cards/Notifications/Notifications"
import Pagination from '@mui/material/Pagination';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

export default function Notification() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectDetails,setProjectDetails]=useState(false);
  const [projectDetailsData,setProjectDetailsData]=useState({});
  const [whatIsInView,setWhatIsInView]=useState("Notification");


//for viewing project details
  const handleClickOnViewButton = (value) => {
    setWhatIsInView("projectDetails")
    setProjectDetails(value)
    setProjectDetailsData({type:"pending"})
  }
  
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const data=[{data1:"big joe house",data2:"pending payment",data3:"cleaning",data4:"2/2/2022",data5:"4000",data6:"",type:"pending"},
            {data1:"big joe house",data2:"pending payment",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:"",type:"pending"}
            ,
            {data1:"New message",data2:"",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:"New message" ,type:""}
            ,
            {data1:"big joe house",data2:"completed",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:"",type:"completed"}
            ,
            {data1:"big joe house",data2:"pending payment",data3:"fumigation",data4:"2/2/2022",data5:"4000",data6:"",type:"pending"}]
  
   


    useEffect(()=>{
   
      
  },[whatIsInView,projectDetailsData,projectDetails])
  
  return (
    <div className='Notifications'>
   
        {projectDetails===true ?
            <ProjectDetails projectDetailsDataP={projectDetailsData} 
            handleSetProjectDetailsReportP={''} 
            handleClickOnViewButtonP={handleClickOnViewButton} whatIsInViewP={whatIsInView}   /> 
          :
          <>
            <Card dataP={data}  handleClickOnViewButtonP={handleClickOnViewButton}/>
                
                <div className="Pagination">
    
                  { data.length>10
    
                    ?
                    <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />
    
                    :
                    <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />
    
                  }
    
                </div>
          </>

        }
        
    </div>
  )
}
