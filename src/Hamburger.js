import React, { useState } from "react";
import "./Hamburger.css";

function Hamburger(props) {
 // const [ham, setHam] = useState("menu");
 // const Hamhandler = () => {
  //  setHam((prevHam) => {
   //   if (prevHam === "menu") return "menu-hidden";
   //   else if (prevHam === "menu-hidden") return "menu";
   // });
  //};

  return (
    <div className={props.clcs} >
      <div className="logo-main">Glanz</div>
      <div className="menu-in">
        <div className="contents">Exit</div>
        <div className="contents">Shop</div>
        <div className="contents">JJSpecials</div>
        <div className="contents">JJRapz</div>
        <div className="contents">Glz X Adidas</div>
        <div className="contents">Collection</div>
      </div>

      <div className="end">
        <h1 className="end-h">Glance pvt Limited</h1>
        <p className="end-p">
          This is a whole sole property of Glance pvt limited
        </p>
      </div>
    </div>
  );
}
export default Hamburger;
