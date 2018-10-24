import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
import { BaseLayout } from './containers';
// Pages
// import { Login, Page404, Page500, Register, Hello } from './views/Pages';
import { Login, Page404, Page500, Register } from './views/Pages';
import Profile from './views/Profile/Profile';

// import { renderRoutes } from 'react-router-config';
// import Fire from Config/Fire
import fire from './config/Fire'
class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  //xjDYODTeBUbddeutfEUh7ytoHRp1


  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('user', user.uid)
        this.setState({user})
      } else {
        localStorage.setItem('user', null)
        this.setState({user})
      }

    })
  }

  componentDidMount() {
    this.authListener();
  }
  
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          {/* <Route exact path="/profile/:uid" name="Profile" render ={props=> <Profile {...props} />} /> */}
          {/* <Route exact path="/" name="Hello" component={Hello} /> */}
          <Route path="/basel" name="Basel" component={this.state.user?BaseLayout:Login} />
          {/* <Route exact path="/def" name="Home" component={DefaultLayout} /> */}
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;