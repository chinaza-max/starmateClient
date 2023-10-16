import "./ProjectDetails.css";
import React  from 'react';
import ProjectDetailsBody from "../ProjectDetailsBody/ProjectDetailsBody"
import SubnavBar from "../SubnavBar/SubnavBar"


function ProjectDetails(props){

    const handleBackArrow=()=>{
        props.handleClickOnViewButtonP(false)
    }
    const handleViewReport=()=>{
        props.handleClickOnViewButton2P(true)
    }


    return (
      <div className="ProjectDetails">
            <SubnavBar  nameP={"Name of building"} rightContentP={true}    handleBackArrowP={handleBackArrow} handleViewReportP={handleViewReport}/> 
            <ProjectDetailsBody/> 
      </div>
    )
  
}

export default ProjectDetails