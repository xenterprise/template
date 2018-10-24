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
  Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Progress, Table, TabContent, TabPane
} from 'reactstrap';
// import Form from "react-jsonschema-form";
import axios from 'axios';
// import { auth, db } from '../../firebase';
import fire from '../../config/Fire'

// const log = (type) => console.log.bind(console, type);

function CompAbout(props) {
  return (
    <div>
      <h5>Personal Details & Contact Information</h5>

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

        <Col md="2">
          <Button type="submit" align="right" size="sm" color="primary" onClick={props.this.Submit_About}><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
        </Col>
      </Row>
    </div>
  );
}

function CompSocial_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Social).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Social[item].platform}</strong></div>
              <div className="small text-muted">
                {props.data.Social[item].link}
              </div>
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}


function CompCertificate_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Certifications).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Certifications[item].name}</strong></div>
              <div className="small text-muted">
                {props.data.Certifications[item].org}
              </div>
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_Certificate.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}

function CompPublication_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Publications).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Publications[item].pub}</strong></div>
              <div className="small text-muted">
                {props.data.Publications[item].name}
              </div>
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_Publication.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}


function CompOrganization_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Organizations).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Organizations[item].name}</strong></div>
              {/* <div className="small text-muted">
                {props.data.Organizations[item].org}
              </div> */}
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_Organization.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}




function CompEducation_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Education).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Education[item].deg}</strong></div>
              <div className="small text-muted">
                {props.data.Education[item].inst}
              </div>
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_Education.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}

function CompWork_Display(props) {
  return (
    <div>
      {
        Object.keys(props.data.Work).map((item, i) => (
          <Row key={i}>
            <Col md="1">
              <div className="avatar">
                <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="avatar-status badge-success"></span>
              </div>

            </Col>
            <Col md="8">
              <div><strong>{props.data.Work[item].com}</strong></div>
              <div><strong>{props.data.Work[item].des}</strong></div>
              <div><strong>{props.data.Work[item].dur}</strong></div>
              <div className="small text-muted">{props.data.Work[item].det}</div>
            </Col>
            <Col md="1">
              <div className="card-header-actions" >
                <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_Work.bind(props.this, i)}></i></a>
              </div>
            </Col>
          </Row>
        ))}
    </div>
  );
}


function CompSocial_AddForm(props) {
  return (
    <div>

      <form onSubmit={(e) => { props.this.addItem(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Platform Name</Label>
            </Col>
            <Col md="6">
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
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Profile Link</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_platformLink" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Social}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}

function CompEducation_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_Education(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Degree/Course Title:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_education_degree" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">University/ Institute Name:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_education_institute" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Education}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}

function CompPublication_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_Publication(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Publisher/ Journal:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_publication_publisher" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Publication Title:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_publication_name" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Publication}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}



function CompCertificate_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_Certificate(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Certification Title:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_certification_name" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Organization Name:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_certification_org" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Certificate}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}

function CompOrganization_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_Organization(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Organization Name:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_organization_name" placeholder="Link to your Social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Organization}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
}


function CompWork_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_Work(e) }}>
        <div className="form-group">

          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Company/ Organization:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_work_company" placeholder="Enter company/ Organization Name" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>


          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Designation/ Role:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_work_designation" placeholder="Enter your designation/ Role" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>


<Row>
            <Col md="3">
              <Label htmlFor="text-input">Duration:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_work_duration" placeholder="Enter Duration of your Role" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>


          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Details:</Label>
            </Col>
            <Col md="6">
              <Input type="textarea" id="text-input" name="new_work_details" placeholder="Enter Work Details" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_Education}><i className="fa fa-close"></i> Cancel</Button>
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
        <Row >
          <Col md="3">
            <h5>Social Profiles and Channels</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Social_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Social} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Social_View ? <CompSocial_AddForm this={props.this} /> : <CompSocial_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}

function CompEducation(props) {
  if (props.data.Education)
    return (
      <div>
        <Row >
          <Col md="3">
            <h5>Education & Degrees</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Education_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Education} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Education_View ? <CompEducation_AddForm this={props.this} /> : <CompEducation_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}

function CompCertificate(props) {
  if (props.data.Certifications)
    return (
      <div>
        <Row >
          <Col md="3">
            <h5>Certifications</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Certificate_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Certificate} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Certificate_View ? <CompCertificate_AddForm this={props.this} /> : <CompCertificate_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}

function CompPublication(props) {
  if (props.data.Publications)
    return (
      <div>
        <Row >
          <Col md="3">
            <h5>Publications</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Publication_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Publication} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Publication_View ? <CompPublication_AddForm this={props.this} /> : <CompPublication_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}


function CompOrganization(props) {
  if (props.data.Organizations)
    return (
      <div>
        <Row >
          <Col md="3">
            <h5>Organizations</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Organization_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Organization} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Organization_View ? <CompOrganization_AddForm this={props.this} /> : <CompOrganization_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}



function CompWork(props) {
  if (props.data.Work)
    return (
      <div>
        <Row >
          <Col md="3">
            <h5>Work & Experience</h5>
          </Col>
          <Col>
            {props.this.state.Flag_Work_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_Work} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

          </Col>
        </Row>

        {props.this.state.Flag_Work_View ? <CompWork_AddForm this={props.this} /> : <CompWork_Display data={props.data} this={props.this} />}

      </div>
    );
  else {
    // return (<CompSocial_AddForm this={props.this} />)
  }
}

class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_platformName: "Facebook",
      new_platformLink: "",
      new_education_degree: '',
      new_education_institute: '',
      new_work_company:'',
      new_work_designation:'',
      new_work_duration:'',
      new_work_details:'',
      new_certification_name:'',
      new_certification_org:'',
      new_organization_name:'',
      new_publication_publisher:'',
      new_publication_name:'',

      // activeTabLG_Parent: 1,
      dropdownOpen_Social: false,

      Flag_Social_View: false,
      Flag_Education_View: false,
      Flag_Work_View: false,
      Flag_Certification_View:false,
      Flag_Organization_View:false,
      Flag_Publication_View:false,


      accordion: [false, false, false, false, false, false, false],

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
    this.Base_inputChanged = this.Base_inputChanged.bind(this);
    // this.Education_inputChanged = this.Education_inputChanged.bind(this);

    this.Submit_About = this.Submit_About.bind(this);
    // this.Submit_Social = this.Submit_Social.bind(this);
    // this.Submit_Education = this.Submit_Education.bind(this);

    this.delItem = this.delItem.bind(this);
    this.delItem_Education = this.delItem_Education.bind(this);
    this.delItem_Work = this.delItem_Work.bind(this);
    this.delItem_Certificate = this.delItem_Certificate.bind(this);
    this.delItem_Organization = this.delItem_Organization.bind(this);
    this.delItem_Publication = this.delItem_Publication.bind(this);

    this.addItem = this.addItem.bind(this);
    this.addItem_Education = this.addItem_Education.bind(this);
    this.addItem_Work = this.addItem_Work.bind(this);
    this.addItem_Certificate = this.addItem_Certificate.bind(this);
    this.addItem_Organization = this.addItem_Organization.bind(this);
    this.addItem_Publication = this.addItem_Publication.bind(this);

    this.toggleDD_Social = this.toggleDD_Social.bind(this);
    this.Social_ddChanged = this.Social_ddChanged.bind(this);
    // this.toggleLG_Parent = this.toggleLG_Parent.bind(this);

    this.toggleFlag_Social = this.toggleFlag_Social.bind(this);
    this.toggleFlag_Education = this.toggleFlag_Education.bind(this);
    this.toggleFlag_Work = this.toggleFlag_Work.bind(this);
    this.toggleFlag_Certificate = this.toggleFlag_Certificate.bind(this);
    this.toggleFlag_Organization = this.toggleFlag_Organization.bind(this);
    this.toggleFlag_Publication = this.toggleFlag_Publication.bind(this);
    
    this.toggleAccordion = this.toggleAccordion.bind(this);
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

  Social_ddChanged(e) {
    this.setState({
      new_platformName: e.target.name
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

  // Submit_Social(e) {

  //   var dbref = fire.database().ref(`users/${localStorage.getItem('user')}/Personal/Social`);
  //   var newSocial = dbref.push()
  //   newSocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  // }
  // Submit_Education(e) {

  //   var dbref = fire.database().ref(`users/${localStorage.getItem('user')}/Personal/Education`);
  //   var newSocial = dbref.push()
  //   newSocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  // }

  toggleDD_Social() {
    this.setState(prevState => ({
      dropdownOpen_Social: !prevState.dropdownOpen_Social
    }));
  }

  // toggleLG_Parent(tab) {
  //   if (this.state.activeTabLG_Parent !== tab) {
  //     this.setState({
  //       activeTabLG_Parent: tab
  //     });
  //   }
  // }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleFlag_Social() {
    this.setState(prevState => ({
      Flag_Social_View: !prevState.Flag_Social_View
    }));
  }

  toggleFlag_Education() {
    this.setState(prevState => ({
      Flag_Education_View: !prevState.Flag_Education_View
    }));
  }

  toggleFlag_Certificate() {
    this.setState(prevState => ({
      Flag_Certificate_View: !prevState.Flag_Certificate_View
    }));
  }

  toggleFlag_Organization() {
    this.setState(prevState => ({
      Flag_Organization_View: !prevState.Flag_Organization_View
    }));
  }

  toggleFlag_Publication() {
    this.setState(prevState => ({
      Flag_Publication_View: !prevState.Flag_Publication_View
    }));
  }

  toggleFlag_Work() {
    this.setState(prevState => ({
      Flag_Work_View: !prevState.Flag_Work_View
    }));
  }

  Base_inputChanged(e) {
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
    this.toggleFlag_Social()
  }

  addItem_Education(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Education.push({ deg: this.state.new_education_degree, inst: this.state.new_education_institute })
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

    this.toggleFlag_Education()
  }


  addItem_Organization(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Organizations.push({ name: this.state.new_organization_name})
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

    this.toggleFlag_Organization()
  }


  addItem_Certificate(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Certifications.push({ name: this.state.new_certification_name, org: this.state.new_certification_org })
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

    this.toggleFlag_Certificate()
  }


  addItem_Publication(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Publications.push({ pub: this.state.new_publication_publisher, name: this.state.new_publication_name })
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

    this.toggleFlag_Publication()
  }


  addItem_Work(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.User.Personal.Work.push({ com: this.state.new_work_company, des: this.state.new_work_designation, dur: this.state.new_work_duration, det: this.state.new_work_details, })
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

    this.toggleFlag_Work()
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
  delItem_Education(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Education.splice(i, 1)
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


  delItem_Certificate(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Certifications.splice(i, 1)
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

  delItem_Publication(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Publications.splice(i, 1)
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

  delItem_Organization(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Organizations.splice(i, 1)
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


  delItem_Work(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.User.Personal.Work.splice(i, 1)
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
        <Row>
          <Col>
            <CardBody>
              <h4>Profile Settings</h4>
            </CardBody>
          </Col>
        </Row>
        {/* <Container fluid> */}
        <Row>
          <Col>
            {/* <Card> */}
            {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader> */}
            <CardBody>
              <div id="accordion">


                <Card>
                  <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                      <h5 className="m-0 p-0">About</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                    <CardBody>
                      <CompAbout data={this.state.User} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>



                <Card>
                  <CardHeader id="headingTwo">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                      <h5 className="m-0 p-0">Social</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                    <CardBody>
                      <CompSocial data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>



                <Card>
                  <CardHeader id="headingThree">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Education</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompEducation data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingFour">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Work</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompWork data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingFive">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(4)} aria-expanded={this.state.accordion[4]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Certifications</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[4]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompCertificate data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>

                <Card>
                  <CardHeader id="headingSix">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(5)} aria-expanded={this.state.accordion[5]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Organizations</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[5]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompOrganization data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingSeven">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(6)} aria-expanded={this.state.accordion[6]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Publications</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[6]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompPublication data={this.state.User.Personal} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


              </div>
            </CardBody>
            {/* </Card> */}
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}

export default Aform;
