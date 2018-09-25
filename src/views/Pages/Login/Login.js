import React, { Component } from 'react';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
// import { auth, db } from '../../../firebase';
import fire from '../../../config/Fire';


class Login extends Component {
     
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      msg: 'Sign In to your account',
      emailFlag: 0,
      loggedin: false,
      // user: null,
    }


    this.data = {
      email: '',
      password: ''
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    // this.authListener = this.authListener.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    this.data.email = this.state.email
    this.data.password = this.state.password

    // console.log(this.data)
    // console.log(this.state)
    // if (this.state.emailFlag == 0) {
    //   axios.post('http://localhost:3000/login', this.data).then((res) => {
    //     console.log(res.data);
    //     if (res.data.msg == 'Agree') {
    //       this.setState({
    //         loggedin: true
    //       })
    //       localStorage.account = this.state.email
    //       console.log('Saved Profile')
    //       console.log(localStorage.account)
    //     } else {
    //       this.setState({
    //         loggedin: false
    //       })
    //     }
    //   }).catch((err) => {
    //     this.setState({
    //       msg: 'Check Internet & Try Again'
    //     })
    //   })
    // }



    
    // auth.doSignInWithEmailAndPassword(this.data.email, this.data.password)
    // .then(() => {
    //   // this.setState(() => ({ ...INITIAL_STATE }));
    //   // history.push('#/basel/profile');
    //   console.log('Signing in')
    // })
    // .catch(error => {
    //   console.log(error)
    // });

    fire.auth().signInWithEmailAndPassword(this.data.email, this.data.password)


  }

  inputChanged(e) {
    this.setState({ [e.target.name]: e.target.value })
    if (this.state.email.includes('@')) {
      this.setState({
        emailFlag: 0
      })
    } else {
      this.setState({
        emailFlag: 1
      })
    }

    console.log(localStorage.getItem('user'))
  }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log('LISTENER TRIG')
  //     console.log(user)
  //     if (user) {
  //       localStorage.setItem('user', user.uid)
  //       console.log('IF TRIG')
  //     } else {
  //       localStorage.setItem('user', null)
  //       console.log('ELSE TRIG')
  //     }

  //   })
  // }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>




                    <Form onSubmit={this.formSubmit}>
                      <h1>Login</h1>

                      {this.state.emailFlag == 0 ? this.state.msg
                        : <Alert color="danger">Invalid Email Provided</Alert>}


                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" required name="email" placeholder="Email" value={this.state.email} onChange={this.inputChanged} autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" required name="password" placeholder="Password" value={this.state.password} onChange={this.inputChanged} autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Make your Profile<br />Get Hired</p>
                      <Button color="primary" className="mt-3" active href="#/register">Create Account</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
