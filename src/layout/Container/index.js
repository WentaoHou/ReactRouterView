import React from "react";
import './index.css';

function Container(props){
   return (
      <div className={`container-base${props.flex? ' container-flex' : ''}`}>{props.children}</div>
   )
}

export default Container;