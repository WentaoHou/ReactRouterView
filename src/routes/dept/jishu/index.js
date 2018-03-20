import React from "react";
import {Link} from "react-router-dom";
import RouterView from "react-router-view";

class Jishu extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <Link to={`${this.props.match.url}/web`}>前端</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/java`}>后端</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/bigdata`}>大数据</Link>
               </li>
            </ul>
            <RouterView routes={this.props.childRoutes}></RouterView>
         </div>
      )
   }
}

export default Jishu;