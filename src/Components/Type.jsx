import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          // strings: ["Web Developer", "Web Designer", "SEO Specialist"],
          strings: ["Staffing & Consulting services", "Payroll Management", "Manpower supply","Training services","Stationary Supply"],

          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 10,
        }}
      />
    </div>
  );
};

export default Type;
