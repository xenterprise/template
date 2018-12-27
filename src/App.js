import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
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

import { css } from 'react-emotion';
// First way to import
// import { ClipLoader } from 'react-spinners';
// Another way to import
import ClipLoader from 'react-spinners/ClipLoader';
import CircleLoader from 'react-spinners/CircleLoader';
import BounceLoader from 'react-spinners/BounceLoader';
// const override = css"
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// ";

// Containers
import { DefaultLayout } from './containers';
import { BaseLayout } from './containers';
import { HomeLayout } from './containers';
// Pages
// import { Login, Page404, Page500, Register, Hello } from './views/Pages';
import { Login, Page404, Page500, Register } from './views/Pages';
import Profile from './views/Profile/Profile';
// import Home from './views/Home/Home'

// import { renderRoutes } from 'react-router-config';
// import Fire from Config/Fire
import fire from './config/Fire'

class App extends Component {


  constructor() {
    super();
    this.state = ({
      user: null,
      UserEmailVerified: false,
      waiting: true
    });
    this.authListener = this.authListener.bind(this);
    this.userSignedIn = false
  }
  //xjDYODTeBUbddeutfEUh7ytoHRp1



  authListener() {

    // fire.auth().onAuthStateChanged(function(user) {
    //    (user.emailVerified) 
    //    ? console.log('Email is verified') 
    //    : console.log('Email is not verified') 
    //   })










    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("USER LOGGED IN ")
        // localStorage.setItem('user', user.uid)
        if (user.emailVerified) {
          this.setState({
            user: user,
            UserEmailVerified: true,
            waiting: false
          })
        }
        else {
          this.setState({
            user: user,
            UserEmailVerified: false,
            waiting: false
          })
        }

        // this.userSignedIn = true
      } else {
        console.log("USER LOGGED OUT ")
        // localStorage.setItem('user', null)
        this.setState({
          user: user,
          UserEmailVerified: false,
          waiting: false
        })
        // this.userSignedIn = false
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }


  


  render() {
    if(this.state.waiting) {
      return(
        <div className="app flex-row align-items-center justify-content-center">
       {<BounceLoader
          // className={override}
          sizeUnit={"px"}
          size={150}
          color={'red'}
          loading={this.state.loading}
        />}
      </div> 
      )
    }else {
      
      return (
        <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={this.state.user ? BaseLayout : Login} />
            <Route exact path="/register" name="Register Page" component={this.state.user ? BaseLayout : Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            {/* <Route exact path="/home" name="Home" component={this.state.user ? BaseLayout : HomeLayout} /> */}
            <Route exact path="/500" name="Page 500" component={Page500} />
            {/* <Route exact path="/profile/:uid" name="Profile" render ={props=> <Profile {...props} />} /> */}
            {/* <Route exact path="/" name="Hello" component={Hello} /> */}
            <Route path="/basel" name="Basel" component={this.state.user ? BaseLayout : Login} />
            <Route path="/home" name="Home" component={this.state.user ? BaseLayout : HomeLayout} />
            {/* <Route exact path="/def" name="Home" component={DefaultLayout} /> */}
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      );
    }
  }
}

export default App;