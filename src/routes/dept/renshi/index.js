import React from "react";
import {Link} from "react-router-dom";
import RouterView from "react-router-view";

class Renshi extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <Link to={`${this.props.match.url}/renshi1`}>人事1</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/renshi2`}>人事2</Link>
               </li>
               <li>
                  <Link to={`${this.props.match.url}/renshi3`}>人事3</Link>
               </li>
            </ul>
            <RouterView routes={this.props.childRoutes}></RouterView>
         </div>
      )
   }
}

export default Renshi;