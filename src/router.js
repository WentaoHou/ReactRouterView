import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

// 自己封装的用对象配置路由的组件
import RouterView from "react-router-view";
import getRoutes from "./common/routerConfig";
const routes = getRoutes()

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <RouterView routes={routes}></RouterView>
         </BrowserRouter>
      )
   }
}

export default App;