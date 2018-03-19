import React from 'react';
import {asyncComponent} from "@/common/asyncComponent";
// 路由组件
import RouterView from "@/components/RouterView";

const Container = asyncComponent(() => import ("./Container/index"))
const Main = asyncComponent(() => import ("./Main/index"))
const SideMenu = asyncComponent(() => import ("@/components/SideMenu/index"))
const SideMenuItem = asyncComponent(() => import ("@/components/SideMenuItem/index"))
const HeaderBar = asyncComponent(() => import ("@/components/HeaderBar/index"))

class Layout extends React.Component {
   componentWillMount() {
      if (this.props.match.url === this.props.location.pathname) {
         this
            .props
            .history
            .push('/user/a')
      }
   }
   render() {
      return (
         <Container flex>
            <SideMenu>
               <SideMenuItem to="/user">用户管理</SideMenuItem>
               <SideMenuItem to="/dept">部门管理</SideMenuItem>
               <SideMenuItem to="/role">角色管理</SideMenuItem>
               <SideMenuItem to="/dict">字典管理</SideMenuItem>
               <SideMenuItem to="/menu">菜单管理</SideMenuItem>
               <SideMenuItem to="/log">日志管理</SideMenuItem>
            </SideMenu>
            <Container>
               <HeaderBar>
                  <span>侯文涛</span>
               </HeaderBar>
               <Main>
                  <RouterView routes={this.props.childRoutes}></RouterView>
               </Main>
            </Container>
         </Container>
      )
   }
}

export default Layout;