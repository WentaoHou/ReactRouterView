import React from "react";

function Info(props){
   return (
      <div>姓名：{props.match.params.nameen}</div>
   )
}

export default Info;