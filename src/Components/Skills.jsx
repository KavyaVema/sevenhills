import React from "react";
import FlipcartLogo from "../images/FlipcartLogo.png"
import AmberLogo from "../images/amberLogo.png"
import VihariLogo from "../images/viharilogo.jpg"
import AshokLeyLand from "../images/ashokleylandlogo.png"
import AddecoLogo from "../images/adecco.png"
import InnovSource from "../images/innovlogo.jpeg"
import Quess from  "../images/quesslogo.png"



import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,  
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const clients={
    Vihari:<img src={VihariLogo} height="100px" width="160px"></img>,
    Flipcart:<img src={FlipcartLogo} height="100px" width="160px"></img>,
    Amber:<img src={AmberLogo} height="100px" width="160px"></img>,
    AshokLeyLand:<img src={AshokLeyLand} height="100px" width="160px"></img>,
    Addeco:<img src={AddecoLogo} height="100px" width="160px"></img>,
    InnovSource:<img src={InnovSource} height="100px" width="160px"></img>,
    Quess:<img src={Quess} height="100px" width="160px"></img>,
  }
  // const icon = {
  //   HTML: <FaHtml5 />,
  //   CSS: <FaCss3 />,
  //   Javascript: <DiJavascript1 />,
  //   Bootstrap: <FaBootstrap />,
  //   Tailwind: <SiTailwindcss />,
  //   "C++": <CgCPlusPlus />,
  //   React: <FaReact />,
  //   Git: <FaGitAlt />,
  //   Github: <FaGithub />,
  //   Npm: <FaNpm />,
  //   Figma: <FaFigma />,
  // };

  return (
    <div title={skill} className="SkillBox">
      {clients[skill]}
    </div>
  );
};

export default Skills;
