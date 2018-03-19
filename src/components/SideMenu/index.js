import React from "react";
import "./index.css";

function SideMenu(props){
   return (
      <div className={`side-menu-base ${props.type? props.type : ''}`} style={{minWidth: props.width? props.width : "220px", width: props.width? props.width : "220px"}} >
         {props.children? props.children : ""}
      </div>
   )
}

export default SideMenu;