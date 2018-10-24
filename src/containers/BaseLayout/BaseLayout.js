import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import MyComponent from './MyComponent'


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
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
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
                {/* <Redirect from="/" to="/dashboard" /> */}
                
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
