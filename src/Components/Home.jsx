import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import CompanyLogo from "../images/interviewLogo.webp"
import { CgColorBucket, CgPhone } from "react-icons/cg";
import { FaHandPointLeft } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Welcome</h1>
          <h1>
            We are Seven Hills Enterprises
          </h1>
          <Type />
          {/* <Link to="/About"> */}
            <button><a href="https://linktr.ee/sevenhillsenterprises" target="_blank" style={{color:"white",width:"150px"}}> Job vacancies</a>
            <FaHandPointLeft /> 
            </button>
          {/* </Link> */}

          {/* <Link to="/Contact"> */}
            <button><a href="https://forms.gle/H8f4yGbhLb5cXsqR7" target="_blank" style={{color:"white",width:"150px"}}> Apply for job</a>
            <FaHandPointLeft />            </button>            

          {/* </Link> */}
          
        </div>
        <Tilt>
          <img className="Avatar" src={CompanyLogo} width={"100px"} height={"100px"}       
          alt="logo here" />
        </Tilt>
      </div>
      <marquee 
      >< a style={{color:"white",fontSize:"20px"}} href="https://chat.whatsapp.com/HIXJAUgKGM770F2V0FTIeF" target="_blank">Click & join in free job alert's whatsapp group</a></marquee>

    </div>
  );
};

export default Home;
