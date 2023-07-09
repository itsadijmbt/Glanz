import React, { useState } from "react";
import "./Product.css";
function Product(props) {


   console.log(props.gender)



  const [cl, setcl] = useState(props.class);

  const hoverONContainer = () => {

   console.log('in parray',props)

    setcl((prevc) => {
      if(prevc==='container'){
      return 'containerHover';
    }
    else if(prevc==='containerHover'){
    return 'container'
    }
    });
  };

  return (
    <div className={cl} onClick={hoverONContainer}>
      <img src={props.image} alt="Loading" className="image"></img>
      <div className="text-price">
        <h1 className="text">{props.title}</h1>
        <h1 className="price">${props.price}</h1>
      </div>
      <div className="btnbtn">
        <button className="cart">Heart</button>
        <button className="cart">Cart</button>
      </div>
    </div>
  );
}

export default Product;
