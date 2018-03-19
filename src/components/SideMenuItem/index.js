import React from 'react';
import {Route, Link} from 'react-router-dom';
import "./index.css";

const SideMenuItem = ({to, activeExact, children}) => (
   <Route path={to} exact={activeExact} children={({match}) => (
      <Link to={to} className={`side-menu-item${match? ' active' : ''}`}>
         <i className="dot"></i><span>{children}</span>
      </Link>
   )}></Route>
)

export default SideMenuItem;