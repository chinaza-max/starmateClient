import "./ProjectDetails.css";
import React  from 'react';
import ProjectDetailsBody from "../ProjectDetailsBody/ProjectDetailsBody"
import SubnavBar from "../SubnavBar/SubnavBar"


function ProjectDetails(props){


    return (
      <div className="ProjectDetails">
            <SubnavBar  nameP={"Name of building"} rightContentP={true}
              handleClickOnViewButtonP={props.handleClickOnViewButtonP}
              handleSetProjectDetailsReportP={props.handleSetProjectDetailsReportP}  
              projectDetailsDataP={props.projectDetailsDataP}
              whatIsInViewP={props.whatIsInViewP} /> 

            <ProjectDetailsBody   projectDetailsDataP={props.projectDetailsDataP}/> 
      </div>
    )
  
}

export default ProjectDetails