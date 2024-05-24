import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      
      <h2 style={{color:"white"}}>Contact Us</h2>
      {/* {submitted ? (
        <p className="submitted-message">Form has been submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <a type="submit" href="mailTo:work.eshaaldev@protonmail.com">
          <button className="submit-btn">
            {" "}
            Submit
            <FaCheck> </FaCheck>{" "}
          </button>
        </a>
      </form>)} */}
      <div className="address-card"><div className="address-card-section"><h5 style={{fontSize:"25px",color:"#04195f"}}>Address</h5>
      <div style={{fontSize:"20px",color:"#04195f"}}>Seven Hills Enterprises</div>
      <div style={{fontSize:"15px",display:"grid",gap:"3px"}}>2-3-350/14, REVENUE WARD NO 2, K V LAYOUT Area, Tirupati East Sub Post Office, LIC office, Tirupati, Andhra Pradesh 517501<div>Ph: 8897993969</div><div>Email: info@sevenhillsenterprises.in</div></div></div></div>
        {/* <div style={{height:"10px"}}></div> */}
        

      
    </div>
  );
};

export default Contact;
