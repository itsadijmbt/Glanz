import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VedioComponents from "./VedioComponents";
import ProductMain from "./ProductMain";
import MenuChoose from "./MenuChoose";
import JJRaps from "./JJRaps";
import MWC from "./MWC ";
import Features from "./Features";
import Features1 from "./Features1";
import Features2 from "./Features2";
import Features3 from "./Features3";
import BTT from "./BTT";
import End from "./end";
import Signup from "./Signup";
const heading=ReactDOM.createRoot(document.getElementById("heading"));
const root = ReactDOM.createRoot(document.getElementById("root"));
const productloader = ReactDOM.createRoot(document.getElementById("root2"));
const mwc = ReactDOM.createRoot(document.getElementById("mwc"));
const features = ReactDOM.createRoot(document.getElementById("features"));
const features0 = ReactDOM.createRoot(document.getElementById("features0"));

const features1 = ReactDOM.createRoot(document.getElementById("features1"));
const features2 = ReactDOM.createRoot(document.getElementById("features2"));
const features3 = ReactDOM.createRoot(document.getElementById("features3"));
const end = ReactDOM.createRoot(document.getElementById("end"));

const bbt = ReactDOM.createRoot(document.getElementById("backToTop"));
const signup=ReactDOM.createRoot(document.getElementById("signup"));


let genvalue;
const indexo=(value)=>{

  let genvalue=value;
  console.log('success',value)



 console.log('suc in pro',genvalue)
}


root.render(
  <React.StrictMode>
    <App />

    <VedioComponents></VedioComponents>
  </React.StrictMode>
);

productloader.render(
  <React.StrictMode>
    <JJRaps></JJRaps>
    
  </React.StrictMode>
);
mwc.render(
  <React.StrictMode>
    <MenuChoose
    indexd={indexo}></MenuChoose>
  </React.StrictMode>
);
heading.render(
  
  <React.StrictMode>
    <ProductMain passValue={genvalue}></ProductMain>
  </React.StrictMode>
)

features.render(
  <React.StrictMode>
  <Features></Features>
</React.StrictMode>
)
features0.render(
  <React.StrictMode>
  <Features1></Features1>
  <Features2></Features2>
  <Features3></Features3>
  
</React.StrictMode>
)

bbt.render(
  <React.StrictMode>
  <BTT></BTT>
</React.StrictMode>
 
)
signup.render(
  <React.StrictMode>
 <Signup></Signup>
</React.StrictMode>
)
end.render(
  <React.StrictMode>
  <End></End>
</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
