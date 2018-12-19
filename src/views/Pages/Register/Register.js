import React, { Component } from 'react';
import { Alert, Button, Card, CardHeader, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import axios from 'axios'
import { Redirect } from 'react-router-dom';
// import {db} from '../../../firebase'
// import { auth, db } from '../../../firebase';
import fire from '../../../config/Fire';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      msg: 'Create Your Account',
      showMessageFlag: false,
      showMessageText: ""
    }

    this.userPacket = {
      "Email": "",
      "Personal": {
        "name": "",
        "title": "",
        "tagline": "",
        "contactno": "",
        "website": "",
        "Social": [{ a: "FB", b: "LINK" }],
        "Education": [],
        "Certifications": [],
        "Organizations": [],
        "Publications": [],
        "Services": [],
        "Work": [],

      },

    }
    this.formSubmit = this.formSubmit.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }


  formSubmit(e) {
    e.preventDefault();
    this.userPacket.Email = this.state.email

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        authUser.user.sendEmailVerification()
          .then(verify => {
            console.log("VERIFICATION EMAIL SENT", verify)
            this.setState({
              showMessageFlag: true,
              showMessageText: "Verification Email is sent to your email address, Please click on the link in the email"
            })
          })
        var dbref = fire.database().ref(`users/${authUser.user.uid}`);
        dbref.set(this.userPacket)
          .then(() => {
          })
          .catch(error => {
            console.log(error)
          });
      })
  }

  inputChanged(e) {
    this.setState({ [e.target.name]: e.target.value })
  }



  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">

                <CardHeader>
                  <Row className="justify-content-center">
                    <Col >
                      <div align="center">
                        <img width="250px" src={'assets/img/avatars/acr.png'} alt="admin@bootstrapmaster.com" href="#/home"/>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="p-4">
                  <Form onSubmit={this.formSubmit}>
                    <Row className="justify-content-center"><h2>Register here</h2></Row>
                    {/* {this.state.msg == 'Create Your Account' ? this.state.msg
                      : this.state.msg == 'User Registered Successfully' ? <div><Alert color="success">{this.state.msg}</Alert><Redirect to="/login" /></div>
                        : <Alert color="danger">{this.state.msg}</Alert>} */}
                    {this.state.showMessageFlag ? <Alert color="success">{this.state.showMessageText}</Alert> : null}
                    {/* <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="username" value={this.state.username} onChange={this.inputChanged} placeholder="Username" autoComplete="username" />
                    </InputGroup> */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name="email" value={this.state.email} onChange={this.inputChanged} placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="password" value={this.state.password} onChange={this.inputChanged} placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    {/* <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="repeat" value={this.state.repeat} onChange={this.inputChanged} placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup> */}
                    <Button color="dark" block onSubmit="">Create Account</Button>
                  </Form>

                </CardBody>
                <CardFooter className="p-4">
                  <p>Already have an account?</p>
                  <Button color="danger" block href="#/login">Login</Button>
                  {/* <Row>

                    
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
