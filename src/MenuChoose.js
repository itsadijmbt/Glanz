import React, { useState } from "react";
import "./MenuChoose.css";
import men from "./images/apostolos-vamvouras-zDT0SO0bZ_U-unsplash.jpg";
import women from "./images/apostolos-vamvouras-Rwf1Ki6M8tY-unsplash.jpg";
import kids from "./images/senjuti-kundu-JfolIjRnveY-unsplash.jpg";
import MWC from "./MWC ";
function MenuChoose(props) {

  const od=(r)=>{

  console.log('in menu ',r);    

  props.indexd(r);
  }




  return (
    <div className="holder">
      <div className="welcome">
        <h1>
          Glance at <strong>Glanz</strong>range
        </h1>
      </div>
      <div className="menu-choose">
        <MWC
          imageName={men}
          gen={'men'}
          do={od}
        ></MWC>
        <MWC
          imageName={women}
          gen={'women'}
          do={od}
          
        ></MWC>
        <MWC
          imageName={kids}
          gen={'kids'}
          do={od}
          
        ></MWC>
      </div>
    </div>
  );
}
export default MenuChoose;
