
import {useState,useEffect} from "react";
import Card from "../Cards/multiPurposeCards/MultiPurposeCards"
import Tabs, {Tab} from 'react-best-tabs';
import {Alert,AlertTitle} from '@mui/material';
import ProjectDetails from  "../ProjectDetails/ProjectDetails"
import Report from  "../Report/Report"
import Pagination from '@mui/material/Pagination';

import 'react-best-tabs/dist/index.css';
import "./Project.css"
import MDatePicker from "../MDatePicker/MDatePicker";


export default function Project() {
  const [activeProject,setActiveProject]=useState('k');
  const [pendingProject,setPendingProject]=useState('l');
  const [completedProject,setCompletedProject]=useState('h');
  const [projectDetails,setProjectDetails]=useState(false);
  const [projectDetailsData,setProjectDetailsData]=useState({});
  const [whatIsInView,setWhatIsInView]=useState("projects");
  const [projectDetailsReport,setProjectDetailsReport]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState("2022/02/02");
  const [activeTab, setActiveTab] = useState(1);


  const data=[{data1:"big joe house",data2:"2022/02/01",data3:"fumigation",data4:"9000",data5:"2000"},
            {data1:"big joe house",data2:"2022/02/02",data3:"fumigation",data4:"9000",data5:"9000"},
            {data1:"tery builging",data2:"2022/02/03",data3:"fumigation",data4:"9000",data5:"2200"},
            {data1:"big joe house",data2:"2022/02/04",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"lodo plaza",data2:"2022/02/05",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"plaza",data2:"2022/02/06",data3:"fumigation",data4:"9000",data5:"300"}]
  
  const data1=[{data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"1/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"5/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"}]
          
    


            
    const handleSetActiveTab=(val)=>{
      setActiveTab(val)  
    }
    const handleDateChange=(val)=>{
      setDateFilter(val)  
    }


    const handleSetProjectDetailsReport=(value)=>{

      setWhatIsInView("report")
      setProjectDetailsReport(value)
      if(value===false){
        setWhatIsInView("project")
      }

    }


    const handleClickOnViewButton=(value)=>{
      localStorage.setItem("details_page_display_status",value)
      setProjectDetailsData({type:"active"})
      setProjectDetails(value)
      if(value===false){
        setWhatIsInView("project")
      }
      else{
        setWhatIsInView("projectDetails")

      }
    }

    const handleClickOnViewButton2=(value)=>{
      localStorage.setItem("details_page_display_status",value)
      setProjectDetailsData({type:"pending"})
      setProjectDetails(value)
    } 

    const handleClickOnViewButton3=(value)=>{
      localStorage.setItem("details_page_display_status",value)
      setProjectDetailsData({type:"completed"})
      setProjectDetails(value)
    }


    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };

    

    useEffect(()=>{
        let details_page_display_status=localStorage.getItem("details_page_display_status")

        if(details_page_display_status===null||details_page_display_status==="false"||details_page_display_status==="undefined"){
          setProjectDetails(false)
        }
        else{
          setProjectDetails(true)
        }
        
    },[projectDetails,projectDetailsReport,activeTab])


  return (
    <div className='Project'> 


    {projectDetailsReport ?
    
      <Report    handleSetProjectDetailsReportP={handleSetProjectDetailsReport} whatIsInViewP={whatIsInView}  /> 
    :
   
    <> 

        {projectDetails ?
              <ProjectDetails projectDetailsDataP={projectDetailsData} 
                handleSetProjectDetailsReportP={handleSetProjectDetailsReport} 
                handleClickOnViewButtonP={handleClickOnViewButton} whatIsInViewP={whatIsInView}   /> 
              :
              <Tabs
              activeTab={activeTab}
              className=""
              ulClassName=""
              activityClassName="bg-success"
              onClick={(event, tab) =>  handleSetActiveTab(tab)}
            >
                <Tab title="Active" className="mr-3">
                    <div className="mt-3">
      
                      {activeProject?
                          <div className='projectMobile'>
                            <h1 className="cardHead">Active project</h1>

                            <Card dataP={data} typeP="active" projectDetailsP={projectDetails} handleClickOnViewButtonP={handleClickOnViewButton}  />

                            <div className="Pagination">


                              { data.length>10

                                ?
                                <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                                :
                                <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                              }

                            </div>

                          </div> 
                      :
                      <Alert severity="info" className="empty">
                      <AlertTitle>Info</AlertTitle>
                      Project — <strong>you have no active project!</strong>
                      </Alert>
                      }
                        
                    </div>
                </Tab>
                <Tab title="Pending" className="mr-3">
                      <div className="mt-3">
                      {pendingProject?
                        <div className='projectMobile'>
                        <h1 className="cardHead">Pending project</h1>
                        <Card dataP={data1} typeP="Pending"  handleClickOnViewButtonP={handleClickOnViewButton2}  />

                        <div className="Pagination">

                          { data1.length>10

                            ?
                            <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                            :
                            <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                          }

                        </div>
                       

                        </div> 
                      :
                      <Alert severity="info" className="empty">
                      <AlertTitle>Info</AlertTitle>
                        Project — <strong>you have no pending project!</strong>
                      </Alert>
                      }
                        
                      </div>
                </Tab>
                <Tab title="Completed" className="mr-3">
                    <div className="mt-3">
                      {completedProject?
                              <div className='projectMobile'>
                              <h1 className="cardHead">Completed project

                              </h1>

                              <div className="datePickerContainer">
                                <div className="datePickerContainerPosition">
                                  <MDatePicker handleDateChangeP={handleDateChange} className="datePicker"/>
                                </div>
                              </div>

                              <Card dataP={data} typeP="Completed" dateFilterP={dateFilter}  handleClickOnViewButtonP={handleClickOnViewButton3}  />
                               

                              <div className="Pagination">

                                { data1.length>10

                                  ?
                                  <Pagination count={10} page={currentPage} onChange={handlePageChange}  color="primary"   />

                                  :
                                  <Pagination count={10} page={currentPage} disabled onChange={handlePageChange}  color="primary"   />

                                }

                              </div>
                      
                            </div> 
                      :
                        <Alert severity="info" className="empty">
                        <AlertTitle>Info</AlertTitle>
                          Project — <strong>you have no completed project!</strong>
                        </Alert>
                      }    
                    </div>
                </Tab>
              </Tabs>
        }
    </> 

    }


      
  </div>
  )
}
