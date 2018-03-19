import React from "react";
import "./index.css";

function HeaderBar(props){
   return (
      <div className="header-bar-base" style={{background: props.bgColor? props.bgColor : "#3b8eda"}}>
         <div></div>
         <div>{props.children}</div>
      </div>
   )
}

export default HeaderBar;