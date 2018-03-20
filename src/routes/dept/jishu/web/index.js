import React from "react";
import {Link} from "react-router-dom";
import Member from "./member.js";
import RouterView from "react-router-view";


function Web(props) {
   return (
      <div>
         前端人员列表
         <ul>
            {Member.map((item, i) => {
               return (
                  <li key={i}>
                     <Link to={`${props.match.url}/${item.nameEN}`}>{item.name}</Link>
                  </li>
               )
            })}
         </ul>
         <RouterView routes={props.childRoutes}></RouterView>
      </div>
   )
}

export default Web;