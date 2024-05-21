import React from "react";
import ProjectBox from "./ProjectBox";

import CateringServices from "../images/cateringlogo.jpeg";
import TranspImage from "../images/companybuslogo.jpg";
import manpoweImage from "../images/manpowerlogo.jpeg";
import TrainningImage from "../images/traininglogo.png";
import PrintingImage from "../images/flexi.jpg";
import LaboratoryImage from "../images/Industrial.jpg";
import MaterialImage from "../images/stationary.jpeg";




const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        Our <b>Service's</b>
      </h1>
      <div className="project">
      <ProjectBox projectPhoto={manpoweImage} projectName="Manpower supply" />

        <ProjectBox projectPhoto={TranspImage} projectName="Transport Services" />
        <ProjectBox projectPhoto={CateringServices} projectName="Cattering services" />

        <ProjectBox projectPhoto={TrainningImage} projectName="Training's" />

        <ProjectBox projectPhoto={LaboratoryImage} projectName="Industrial Laboratory and Environmental services" />
        <ProjectBox projectPhoto={MaterialImage} projectName="Material Supply" />
        
        <ProjectBox projectPhoto={PrintingImage} projectName="Printing Services" />

      </div>
    </div>
  );
};

export default Projects;
