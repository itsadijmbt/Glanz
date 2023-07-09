import "./Header.css";
import React, { useState} from "react";
import Hamburger from "./Hamburger";
import HeaderComponents from "./HeaderComponents";
import cart_logo from "./images/shopping-bag-icon-vector-illustration-removebg-preview (1).png";
import account_logo from "./images/download-removebg-preview (1).png";
function Header(props) {
  const [pre, post] = useState('menu');
  const onham = () => {
    post((prevR) => {
      if (prevR === "menu") return "menu-hidden";
      else return "menu";
    });
  };

  return (
    <div className="header">
      <div className="hamburger" onClick={onham}>
        <Hamburger  clcs={pre}></Hamburger>
      </div>
      <h1 className="logo">Glanz</h1>

      <div className="shopping-menu">
        <HeaderComponents name={"JJRAPS"}></HeaderComponents>
        <HeaderComponents
          name={"Glz X Adidas"}
          c={"GlzXAdi"}
        ></HeaderComponents>
        <HeaderComponents name={"Shop"}></HeaderComponents>
        <HeaderComponents name={"Collection"}></HeaderComponents>
      </div>

      <div className="cart_account">
        <img src={cart_logo} width={35}></img>
        <img src={account_logo} width={35}></img>
      </div>
    </div>
  );
}

export default Header;
