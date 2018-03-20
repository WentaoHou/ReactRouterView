import React from "react";
import {Link} from "react-router-dom";
import RouterView from "react-router-view";

class Shichang extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <Link to={`${this.props.match.url}/shichang1`}>市场1部</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/shichang2`}>市场2部</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/shichang3`}>市场3部</Link>
               </li>
            </ul>
            <RouterView routes={this.props.childRoutes}></RouterView>
         </div>
      )
   }
}

export default Shichang;