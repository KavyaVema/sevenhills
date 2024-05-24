import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      
      <div style={{fontSize:"11px"}}>Address: M/s. SEVENHILLS ENTERPRISES<br/> 2-3-350/14, REVENUE WARD NO 2, K V LAYOUT AREA, <br/> Tirupati East Sub Post Office, LIC OFFICE, Tirupati, <br/>Tirupati,Andhra Pradesh, 517501</div>
      <h4 style={{fontSize:"10px"}}>Copyright &copy; {year} | All Rights Reserved.</h4>
    </footer>
  );
};

export default Footer;
