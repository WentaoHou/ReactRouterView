import React from 'react';
import {Link} from "react-router-dom";
import RouterView from "@/components/RouterView";

class Dept extends React.Component {
   render() {
      return (
         <div>
            部门列表
            <ul>
               <li>
                  <Link to="/dept/jishu">技术部</Link>
               </li>
               <li>
                  <Link to="/dept/renshi">人事部</Link>
               </li>
               <li>
                  <Link to="/dept/shichang">市场部</Link>
               </li>
            </ul>
            <RouterView routes={this.props.childRoutes}></RouterView>
         </div>
      );
   }
}

export default Dept;