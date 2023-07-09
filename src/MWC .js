import React from "react";
import "./MWC.css";
import women from "./images/apostolos-vamvouras-Rwf1Ki6M8tY-unsplash.jpg";
import men from "./images/apostolos-vamvouras-zDT0SO0bZ_U-unsplash.jpg";
import kids from './images/senjuti-kundu-JfolIjRnveY-unsplash.jpg'

function MWC(props) {

 const d=()=>{

 console.log(props.gen)
 props.do(props.gen)


 }
  

  return (
    <div className="image-name" onClick={d}>
      <img src={props.imageName} className="temp"></img>
    </div>
  );
}

export default MWC;