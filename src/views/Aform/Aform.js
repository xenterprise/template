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
  Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
// import Form from "react-jsonschema-form";
import axios from 'axios';
// import { auth, db } from '../../firebase';
import fire from '../../config/Fire'

// const log = (type) => console.log.bind(console, type);

function CompAbout(props) {
  return (
    <div>
      <h3>About</h3>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="name" placeholder="Your Name Here" value={props.data.Personal.name} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Title</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="title" placeholder="e.g., Engineer/ Teacher/ Astronaut" value={props.data.Personal.title} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Tagline</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="tagline" placeholder="Something about you briefly" value={props.data.Personal.tagline} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Email</Label>
        </Col>
        <Col xs="12" md="9">
          <Input disabled type="text" id="text-input" name="Email" placeholder="youremail@something.com" value={props.data.Email} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Phone Number</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="contactno" placeholder="Your Contact Number" value={props.data.Personal.contactno} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Website</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="text-input" name="website" placeholder="Your Website Address" value={props.data.Personal.website} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Skills</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" id="text-input" name="skills" placeholder="Your Skills. Seperated by Commas" value={props.data.Personal.skills} onChange={props.this.inputChanged} />
        </Col>
      </Row>


      <Row>
        <Col xs="12" md="10">
        </Col>
        <Col md="2">
          <Button type="submit" align="right" size="sm" color="primary" onClick={props.this.submit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

function CompSocial_Display(props) {
  return (
    <div>
      <Row>
        {
          Object.keys(props.data.Social).map((item, i) => (

            <Col key={i} xs="12" sm="6" md="4">
              {/* <Fade timeout={this.state.timeout} in={this.state.fadeIn}> */}
              <Card>
                <CardHeader className="text-white bg-primary">
                  {props.data.Social[item].platform}:
                      {props.data.Social[item].link}
                  {/* {console.log('Rendering State:', this.state)}
                        {console.log('ID of this component:', i)} */}
                  <div className="card-header-actions" >
                    <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem.bind(props.this, i)}></i></a>
                  </div>
                </CardHeader>
              </Card>
              {/* </Fade> */}
            </Col>
          ))}
      </Row>
    </div>
  );
}
function CompSocial_AddForm(props) {
  return (
    <div>
      {/* ref={input => this.addForm = input} */}
      <form className="form-inline" onSubmit={(e) => { props.this.addItem(e) }}>
        <div className="form-group">
          <Row>
            <Col md="2">
              <Label htmlFor="text-input">Platform Name</Label>
            </Col>
            <Col md="2">
              {/* ref={input => this.newPlatName = input} */}
              {/* <Input type="text" id="text-input" name="new_platformName" placeholder="Facebook/Twitter" onChange={props.this.inputChanged_New} /> */}

              <Dropdown isOpen={props.this.state.dropdownOpen_Social} toggle={props.this.toggleDD_Social}>
                <DropdownToggle caret>
                  {props.this.state.new_platformName}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem name="Facebook" onClick={props.this.Social_ddChanged}>Facebook</DropdownItem>
                  <DropdownItem name="Twitter" onClick={props.this.Social_ddChanged}>Twitter</DropdownItem>
                  <DropdownItem name="Youtube" onClick={props.this.Social_ddChanged}>Youtube</DropdownItem>
                  <DropdownItem name="Linkedin" onClick={props.this.Social_ddChanged}>LinkedIn</DropdownItem>
                </DropdownMenu>
              </Dropdown>


            </Col>
            <Col md="2">
              <Label htmlFor="text-input">Profile Link</Label>
            </Col>
            <Col md="4">
              {/* ref={input => this.newPlatLink = input} */}
              <Input type="text" id="text-input" name="new_platformLink" placeholder="Link to your Social Profile" onChange={props.this.Social_inputChanged} />
            </Col>

            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}
function CompSocial(props) {
  if (props.data.Social)
    return (
      <div>
        <h3>Social</h3>
        <CompSocial_Display data={props.data} this={props.this} />
        <CompSocial_AddForm this={props.this} />
      </div>
    );
  else {
    return (<CompSocial_AddForm this={props.this} />)
  }
}
class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_platformName: "Facebook",
      new_platformLink: "",
      dropdownOpen_Social: false,
      User: {
        Email: "",
        Personal: {
          name: "",
          title: "",
          tagline: "",
          contactno: "",
          website: "",
          skills: "",
          Social: [],
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
    this.Social_inputChanged = this.Social_inputChanged.bind(this);
    this.Submit_About = this.Submit_About.bind(this);
    // this.toggle = this.toggle.bind(this);
    // this.toggleFade = this.toggleFade.bind(this);
    this.Submit_Social = this.Submit_Social.bind(this);
    this.delItem = this.delItem.bind(this);
    this.toggleDD_Social = this.toggleDD_Social.bind(this);
    this.Social_ddChanged = this.Social_ddChanged.bind(this);
  }


  componentDidMount() {
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`)
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      let snap = snapshot.val()
      this.setState({
        User: {
          ...this.state.User,
          Email: snap.Email,
          Personal: {
            ...this.state.User.Personal,
            ...snap.Personal
          }
        }
      })
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

  Social_ddChanged(e){
    this.setState({
      new_platformName : e.target.name
    })
  }


  Submit_About(e) {
    e.preventDefault();
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`);
    dbref.set(this.state.User)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  Submit_Social(e) {

    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}/Personal/Social`);
    var newSocial = dbref.push()
    newSocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  }

  toggleDD_Social() {
    this.setState(prevState => ({
      dropdownOpen_Social: !prevState.dropdownOpen_Social
    }));
  }
  // toggle() {
  //   this.setState({ collapse: !this.state.collapse });
  // }

  // toggleFade() {
  //   console.log('Event Hit')
  //   this.setState((prevState) => { return { fadeIn: !prevState } });

  // }

  Social_inputChanged(e) {
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }

  addItem(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Social.push({ platform: this.state.new_platformName, link: this.state.new_platformLink })
    console.log('Temp After push:', temp)
    this.setState(temp)


    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`);
    dbref.set(this.state.User)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  delItem(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Social.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${localStorage.getItem('user')}`);
    dbref.set(this.state.User)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

  }

  render() {

    return (
      <div className="animated fadeIn">
        <h1>Your Profile</h1>
        <Container fluid>
          <CompAbout data={this.state.User} this={this} />
          <CompSocial data={this.state.User.Personal} this={this} />
        </Container>

      </div>
    );
  }
}

export default Aform;
