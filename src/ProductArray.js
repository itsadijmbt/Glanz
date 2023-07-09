import React, { useState } from "react";
import Product from "./Product";
import "./Product";
import Data from "./Data";
function ProductArray(props) {



 
  const filteredProduct = Data.filter((ele) => ele.gender === 'men');

  return Data.map((proData) => (
    <Product
      class={"container"}
      title={proData.title}
      price={proData.price}
      image={proData.image}
      
    ></Product>
  ));
}
export default ProductArray;
