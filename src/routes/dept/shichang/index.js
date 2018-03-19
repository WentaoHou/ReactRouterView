import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Shichang1 from "./shichang1";
import Shichang2 from "./shichang2";
import Shichang3 from "./shichang3";

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
            <Switch>
               <Route path={`${this.props.match.url}/shichang1`} component={Shichang1}></Route>
               <Route path={`${this.props.match.url}/shichang2`} component={Shichang2}></Route>
               <Route path={`${this.props.match.url}/shichang3`} component={Shichang3}></Route>
            </Switch>
         </div>
      )
   }
}

export default Shichang;