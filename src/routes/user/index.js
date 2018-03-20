import React, {Component} from 'react';
import {asyncComponent} from "@/common/asyncComponent";
// 路由视图组件
import RouterView from "react-router-view";

const PageContent = asyncComponent(() => import ("@/components/PageContent/index"));
const Container = asyncComponent(() => import ("@/layout/Container/index"))
const SideMenu = asyncComponent(() => import ("@/components/SideMenu/index"))
const SideMenuItem = asyncComponent(() => import ("@/components/SideMenuItem/index"))

class User extends Component {
   render() {
      return (
         <PageContent>
            <Container flex>
               <SideMenu type="light" minWidth="120px" width="120px">
                  <SideMenuItem to={`${this.props.match.url}/a`}>AAAAA</SideMenuItem>
                  <SideMenuItem to={`${this.props.match.url}/b`}>BBBBB</SideMenuItem>
                  <SideMenuItem to={`${this.props.match.url}/c`}>CCCCC</SideMenuItem>
                  <SideMenuItem to={`${this.props.match.url}/d`}>DDDDD</SideMenuItem>
               </SideMenu>
               <Container>
                  <RouterView routes={this.props.childRoutes}></RouterView>
               </Container>
            </Container>
         </PageContent>
      )
   }
}

export default User;