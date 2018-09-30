import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import './style.css';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Row,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Badge,
  Fade,
  Collapse
} from 'reactstrap';
// import Form from "react-jsonschema-form";
import axios from 'axios';
// import { auth, db } from '../../firebase';
import fire from '../../config/Fire'

const log = (type) => console.log.bind(console, type);

class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waiting: true,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      new_platformName: "",
      new_platformLink: "",
      User: {
        Email: "",
        Personal: {
          name: "",
          title: "",
          tagline: "",
          contactno: "",
          website: "",
          skills: "",
          Social: [
            {
              platform: "Facebook",
              link: "facebook.com/mmobeenyounis"
            },
            {
              platform: "Twitter",
              link: "twitter.com/mmobeenyounis"
            }
          ],
          Education: [],
          Certifications: [],
          Organizations: [],
          Publications: [],
          Services: [],
          Work: []
        }
      }
    }

    console.log('Aform Log Entry')
    this.inputChanged = this.inputChanged.bind(this);
    this.inputChanged_New = this.inputChanged_New.bind(this);
    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.submit_Social = this.submit_Social.bind(this);
  }

  componentDidMount() {
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`)
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      this.setState({ User: snapshot.val() })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  inputChanged(e) {

    let temp = Object.assign({}, this.state.User)

    if (e.target.name === 'Email') {
      temp[e.target.name] = e.target.value
      this.setState({ User: temp })
    } else {
      temp.Personal[e.target.name] = e.target.value
      this.setState({ User: temp })
    }
  }

  inputChanged_New(e) {
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }


  submit(e) {
    e.preventDefault();
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`);
    dbref.set(this.state.User)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  submit_Social(e) {

    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}/Personal/Social`);
    var newSocial = dbref.push()
    newSocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <h1>Your Profile</h1>
        {/* <Card>
          <CardBody> */}
        <Container fluid>
          <h3>About</h3>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Name</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="name" placeholder="Your Name Here" value={this.state.User.Personal.name} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Title</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="title" placeholder="e.g., Engineer/ Teacher/ Astronaut" value={this.state.User.Personal.title} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Tagline</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="tagline" placeholder="Something about you briefly" value={this.state.User.Personal.tagline} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Email</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="Email" placeholder="youremail@something.com" value={this.state.User.Email} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Phone Number</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="contactno" placeholder="Your Contact Number" value={this.state.User.Personal.contactno} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Website</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" id="text-input" name="website" placeholder="Your Website Address" value={this.state.User.Personal.website} onChange={this.inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Skills</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="textarea" id="text-input" name="skills" placeholder="Your Skills. Seperated by Commas" value={this.state.User.Personal.skills} onChange={this.inputChanged} />
            </Col>
          </Row>


          <Row>
            <Col xs="12" md="10">
            </Col>
            <Col md="2">
              <Button type="submit" align="right" size="sm" color="primary" onClick={this.submit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
            </Col>
          </Row>

          <h3>Social</h3>

          <Row>

            {/* <Col xs="12" sm="6" md="4">
              <CardHeader className="text-white bg-primary">
                Social Platform Name
                  <div className="card-header-actions">
                  <a className="card-header-action btn btn-close" onClick={this.toggleFade}><i className="icon-close"></i></a>
                  </div>
              </CardHeader>
            </Col> */}
            {/* {
              for (var key in data.messages) {
                var obj = data.messages[key];
                // ...
              }
            } */}

{/* //Leaving Here on 01 Oct 2018 */}


          </Row>

          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Platform Name</Label>
            </Col>
            <Col md="2">
              <Input type="text" id="text-input" name="new_platformName" placeholder="Facebook/Twitter" value={this.state.new_platformName} onChange={this.inputChanged_New} />
            </Col>
            <Col md="2">
              <Label htmlFor="text-input">Profile Link</Label>
            </Col>
            <Col md="4">
              <Input type="text" id="text-input" name="new_platformLink" placeholder="Link to your Social Profile" value={this.state.new_platformLink} onChange={this.inputChanged_New} />
            </Col>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" onClick={this.submit_Social}><i className="fa fa-dot-circle-o"></i> Add New</Button>
            </Col>
          </Row>



        </Container>
        {/* </CardBody>
        </Card> */}

      </div>
    );
  }
}

export default Aform;
