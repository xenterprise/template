import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import fire from '../../../config/Fire'


function Notify(props) {
  if (props.this.state.message === 'Thankyou! your Email is saved') {
    return (
      <div>
        <Alert color="primary">
          {props.this.state.message}
        </Alert>
      </div>
    )
  } else if (props.this.state.message === 'Sorry! There was an Error' || props.this.state.message === 'Invalid Email address') {
    return (
      <div>
        <Alert color="warning">
          {props.this.state.message}
        </Alert>
      </div>
    )
  } else if(props.this.state.message === ''){
    return (
      <div></div>
    )
  }


}
class Hello extends Component {

  constructor(props) {
    super(props);

    this.Base_inputChanged = this.Base_inputChanged.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      notify: false,
      email: '',
      password: 'JustNotifyUser',
      message: ''
    }
  }

  Base_inputChanged(e) {
    
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }


  onClick(e) {
    e.preventDefault()
    this.setState({message:''})
    if (this.state.email.includes('@')) {
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(promise => {
          var dbref = fire.database().ref(`users/${promise.user.uid}`);
          dbref.set(this.state.email)
            .then(() => {
              this.setState({ message: 'Thankyou! your Email is saved' })
            })
            .catch(error => {
              this.setState({ message: 'Sorry! There was an Error' })
              console.log(error)
            });
        }).catch(error => {
          this.setState({ message: 'Sorry! There was an Error' })
          console.log(error)
        });
    } else {
      this.setState({ message: 'Invalid Email address' })
    }

  }



  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Notify this={this} />
          </Row>
          <Row className="justify-content-center">
            <Col >
              <div align="center">
                <img width="400px" src={'assets/img/avatars/ac.png'} alt="admin@bootstrapmaster.com" />
              </div>
            </Col>
          </Row>
          <br /><br /><br /><br />
          <Row className="justify-content-center">

            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">Hi</h1>
                <h4 className="pt-3">Want to work with one of the best teams?</h4>
                <h5 className="text-muted float-left">Send Apni CV at hello@apnicv.com</h5>
              </div>
              <InputGroup className="input-prepend">
                {/* <InputGroupAddon addonType="prepend">
                  { <InputGroupText>
                     <i className="fa fa-search"></i> 
                  </InputGroupText> }
                </InputGroupAddon> */}
                <Input name="email" size="16" type="text" placeholder="Enter Your Email for Latest Updates" onChange={this.Base_inputChanged} />
                <InputGroupAddon addonType="append">
                  <Button color="info" onClick={this.onClick}>Get Notified</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Hello;
