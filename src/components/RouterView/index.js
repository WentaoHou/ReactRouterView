import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";

function RouterView(props){
   if(!(props.routes instanceof Array)) {
      throw new Error("routes必须是个数组！")
      return null
   }
   return (
      <Switch style={{width: '100%', height: '100%'}}>
         {props.routes.map((route, i) => (
            <Route key={i} path={route.path} render={(props) => {
               var redirect = null
               if(route.redirect && props.match.url === props.location.pathname) {
                  redirect = <Redirect to={route.redirect} />
               }
               return (
                  <div style={{height: '100%'}}>
                     <route.component {...props} childRoutes={route.childRoutes || []}/>
                     {redirect}
                  </div>
               )
            }}/>
         ))}
      </Switch>
   )
}

export default RouterView;