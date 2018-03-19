import React from "react";
import "./index.css";

function Main(props){
   return (
      <div className="main-base">{props.children}</div>
   )
}
export default Main;