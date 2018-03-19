import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Renshi1 from "./renshi1";
import Renshi2 from "./renshi2";
import Renshi3 from "./renshi3";

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
            <Switch>
               <Route path={`${this.props.match.url}/renshi1`} component={Renshi1}></Route>
               <Route path={`${this.props.match.url}/renshi2`} component={Renshi2}></Route>
               <Route path={`${this.props.match.url}/renshi3`} component={Renshi3}></Route>
            </Switch>
         </div>
      )
   }
}

export default Renshi;