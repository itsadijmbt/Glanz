import React, { useState } from "react";
import Data from "./Data";
import "./ProductMain.css";
import Product from "./Product";
import ProductArray from "./ProductArray";

const ProductMain = (props) => {
  
  

   const display=()=>{
    
    console.log('pro in real pro' , props.passValue)
 
  }

 
  

  return (
    <div className="product-main-container"
    onClick={display} >
      <h1 className="intro">
        {" "}
        <strong>JJz</strong> in the house
      </h1>

      <div className="product-holder">
       
       <ProductArray passToArr={props.genvalue}></ProductArray>

      </div>
    </div>
  );
};
export default ProductMain;
