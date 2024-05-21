import React, { useRef } from "react";
import Skills from "./Skills.jsx";
// import ProfilePDF from "../assets/SevenHillsProfile.pdf"
// import { FaFileDownload } from "react-icons/fa";
const About = () => {
  const ref=useRef(null)
  const handleDownload=()=>{
    if(ref.current){
      ref.current.click()
    }
  }
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            {/* Get to <b>know</b> me! */}
            About us
          </h1>
          <p><b>SEVENHILLS ENTERPRISES</b> is a one of the fast rising, registered manpower staffing,
                 recruiting, payroll and consulting Company based at <b>Tirupati, Andhra Pradesh.</b><br/>
                  <br/> It was started by <b>Senior Human Resource Professional.</b><br />
                {/* <br/>To know more about us please download the profile. */}
                </p>

            {/*  */}
            {/* <><button title="click here to download profile" onClick={handleDownload} >
              Download Profile <FaFileDownload/>
            </button><a href="../assets/SevenHillsProfile.pdf" download="seven.pdf" style={{display:"none"}} ref={ref}></a></> */}
          {/* </a> */}
        </div>

      </div>

      <h1 className="SkillsHeading"> OUR CLIENTS</h1>
      <div className="skills">
        <Skills skill="Flipcart" />
        <Skills skill="Amber"/>
        <Skills skill="Vihari" />
        <Skills skill="AshokLeyLand" />
        <Skills skill="Addeco" />
        <Skills skill="InnovSource" /> 
        <Skills skill="Quess" />        
      </div>
    </>
  );
};

export default About;
