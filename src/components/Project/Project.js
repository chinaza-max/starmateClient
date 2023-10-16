
import {useState,useEffect} from "react";
import Card from "../../components/Cards/multiPurposeCards/multiPurposeCards"
import Tabs, {Tab} from 'react-best-tabs';
import {Alert,AlertTitle} from '@mui/material';
import ProjectDetails from  "../ProjectDetails/ProjectDetails"
import Report from  "../Report/Report"
import Pagination from '@mui/material/Pagination';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import 'react-best-tabs/dist/index.css';
import "./Project.css"


export default function Project() {
  const [activeProject,setActiveProject]=useState('k');
  const [pendingProject,setPendingProject]=useState('l');
  const [completedProject,setCompletedProject]=useState('h');
  const [projectDetails,setProjectDetails]=useState(false);
  const [projectDetailsReport,setProjectDetailsReport]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);



  const data=[{data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"2000"},
            {data1:"big joe house",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"9000"},
            {data1:"tery builging",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"2200"},
            {data1:"big joe house",data2:"1/3/2022",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"lodo plaza",data2:"2/3/2022",data3:"fumigation",data4:"9000",data5:"200"},
            {data1:"plaza",data2:"5/3/2022",data3:"fumigation",data4:"9000",data5:"300"}]
  
  const data1=[{data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"1/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"2/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"},
            {data1:"2/3/2022",data2:"5/3/2022",data3:"big joe house",data4:"fumigation",data5:"NGN 9000"}]
          

    const handleClickOnViewButton=(value)=>{
      localStorage.setItem("details_page_display_status",value)
      setProjectDetails(value)
    }

    const handleClickOnViewButton2=(value)=>{
     // localStorage.setItem("details_page_display_status",value)
      setProjectDetailsReport(value)
    }


    const handlePageChange = (event, page) => {

      console.log(page)
      setCurrentPage(page);
    };

    

    useEffect(()=>{
        let details_page_display_status=localStorage.getItem("details_page_display_status")

        if(details_page_display_status===null||details_page_display_status==="false"){
          setProjectDetails(false)
        }
        else{
          setProjectDetails(true)
        }
        
    },[projectDetails,projectDetailsReport])


  return (
    <div className='Project'> 


    {projectDetailsReport ?
    
      <Report  handleClickOnViewButton2P={handleClickOnViewButton2} /> 
    :

    <> 

        {projectDetails ?
              <ProjectDetails handleClickOnViewButton2P={handleClickOnViewButton2}  handleClickOnViewButtonP={handleClickOnViewButton}/> 
              :
              <Tabs
              activeTab="1"
              className=""
              ulClassName=""
              activityClassName="bg-success"
              onClick={(event, tab) => console.log(event, tab)}
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
                        <Card dataP={data1} typeP="Pending" />



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

                              <div className="datePicker">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Basic date picker" />
                                  </DemoContainer>
                                </LocalizationProvider>
                              </div>

                              
                              <Card dataP={data1} typeP="Pending" />
                               

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
//npm i @mui/x-date-pickers