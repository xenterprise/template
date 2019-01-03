import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
// import MyComponent from './MyComponent'


import {
  AppFooter,
  AppHeader,
} from '@coreui/react';
// sidebar nav config
// import navigation from '../../_nav';
// routes config
import routes from '../../routes';
// import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import Profile from '../../views/Profile/Profile';

class BaseLayout extends Component {

  
  render() {

    // console.log("Props", this.props)




    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader history={this.props.history} />
        </AppHeader>
        <br />
        <div className="app-body">
        
          {/* <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            {<AppSidebarNav navConfig={navigation} {...this.props} />}
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>  */}
          <main className="main">
            {/* <AppBreadcrumb appRoutes={routes}/> */}
            
            
            <Container fluid>
              <Switch>
                {/* <Route path = '/basel/ali' exact component = {MyComponent} /> */}
                {routes.map((route, idx) => {
                  
                    return route.component ? (<Route key={idx} path={'/basel' + route.path} exact={route.exact} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />) : (null);
                  
                    
                  },
                )}
                <Redirect from="/login" to="/basel/home" />
                <Redirect from="/register" to="/basel/home" />
                <Redirect from="/home" to="/basel/home" />
                <Redirect from="/" to="/basel/home" />
                
              </Switch>
            </Container>
          </main>
          {/* <AppAside fixed hidden>
            <DefaultAside />
          </AppAside> */}
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default BaseLayout;
