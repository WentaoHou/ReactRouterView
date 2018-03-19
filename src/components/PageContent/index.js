import React from "react";
import "./index.css";

function PageContent(props){
   return (
      <div className="page-content-base">{props.children}</div>
   )
}

export default PageContent;