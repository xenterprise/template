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
// import axios from 'axios';
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
          <Input type="text" name="name" placeholder="Your Name Here" value={props.data.name} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Title</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="title" placeholder="e.g., Engineer/ Teacher/ Astronaut" value={props.data.title} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Tagline</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="tagline" placeholder="Something about you briefly" value={props.data.tagline} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      {/* <Row>
        <Col md="2">
          <Label htmlFor="text-input">email</Label>
        </Col>
        <Col xs="12" md="9">
          <Input disabled type="text" id="text-input" name="email" placeholder="youremail@something.com" value={props.data.email} onChange={props.this.inputChanged} />
        </Col>
      </Row> */}

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Phone Number</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="contactno" placeholder="Your Contact Number" value={props.data.contactno} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Website</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="website" placeholder="Your Website Address" value={props.data.website} onChange={props.this.inputChanged} />
        </Col>
      </Row>

      {/* <Row>
        <Col md="2">
          <Label htmlFor="text-input">Skills</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" id="text-input" name="skills" placeholder="Your Skills. Seperated by Commas" value={props.data.skills} onChange={props.this.inputChanged} />
        </Col>
      </Row> */}


      <Row>

        <Col md="2">
          <Button type="submit" align="right" size="sm" color="primary" onClick={props.this.Submit_About}><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
        </Col>
      </Row>
    </div>
  );
}

function CompSkills(props) {
  return (
    <div>
      {
        Object.keys(props.data).map((item, i) => (
          <Button
            key={i}
            size="lg"
            className="btn-facebook btn-brand text mr-1 mb-1">
            <span>{item}</span><a className="card-header-action btn btn-close" >  <i className="icon-close" onClick={props.this.delChildOfuser.bind(props.this, "skills", item)}></i></a>
          </Button>
        ))
      }

      <Row>
        <Col xs="12" md="9">
          <form ref={input => props.this.addSkillForm = input} onSubmit={(e) => { props.this.addSkill(e) }}>
            <Input type="text" id="text-input" name="new_skill" placeholder="Enter New Skills Here" onChange={props.this.Base_inputChanged_lowercase} />
          </form>
        </Col>
      </Row>

    </div>
  )
}

function Compsocial_Display(props) {
  if (props.data.social)
    return (
      <div>
        {
          Object.keys(props.data.social).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.social[item].platform}</strong></div>
                <div className="small text-muted">
                  {props.data.social[item].link}
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
  else {
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
  }
}


function CompCertificate_Display(props) {
  if (props.data.certifications)
    return (
      <div>
        {
          Object.keys(props.data.certifications).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.certifications[item].name}</strong></div>
                <div className="small text-muted">
                  {props.data.certifications[item].org}
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
  else
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
}

function CompPublication_Display(props) {
  if (props.data.publications)
    return (
      <div>
        {
          Object.keys(props.data.publications).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.publications[item].pub}</strong></div>
                <div className="small text-muted">
                  {props.data.publications[item].name}
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
  else
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
}


function CompOrganization_Display(props) {
  if (props.data.organizations)
    return (
      <div>
        {
          Object.keys(props.data.organizations).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.organizations[item].name}</strong></div>
                {/* <div className="small text-muted">
                {props.data.organizations[item].org}
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
  else
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
}




function Compeducation_Display(props) {
  if (props.data.education)
    return (
      <div>
        {
          Object.keys(props.data.education).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.education[item].deg}</strong></div>
                <div className="small text-muted">
                  {props.data.education[item].inst}
                </div>
              </Col>
              <Col md="1">
                <div className="card-header-actions" >
                  <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_education.bind(props.this, i)}></i></a>
                </div>
              </Col>
            </Row>
          ))}
      </div>
    );
  else
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
}

function Compwork_Display(props) {
  if (props.data.work)
    return (
      <div>
        {
          Object.keys(props.data.work).map((item, i) => (
            <Row key={i}>
              <Col md="1">
                <div className="avatar">
                  <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>

              </Col>
              <Col md="8">
                <div><strong>{props.data.work[item].com}</strong></div>
                <div><strong>{props.data.work[item].des}</strong></div>
                <div><strong>{props.data.work[item].dur}</strong></div>
                <div className="small text-muted">{props.data.work[item].det}</div>
              </Col>
              <Col md="1">
                <div className="card-header-actions" >
                  <a className="card-header-action btn btn-close" ><i className="icon-close" onClick={props.this.delItem_work.bind(props.this, i)}></i></a>
                </div>
              </Col>
            </Row>
          ))}
      </div>
    );
  else
    return (
      <div>
        You have No Records, Please Add some
        </div>
    )
}


function Compsocial_AddForm(props) {
  return (
    <div>

      {/* <form onSubmit={(e) => { props.this.addItem(e) }}> */}
      <div className="form-group">
        <Row>
          <Col md="3">
            <Label htmlFor="text-input">Platform Name</Label>
          </Col>
          <Col md="6">
            <Dropdown isOpen={props.this.state.dropdownOpen_social} toggle={props.this.toggleDD_social}>
              <DropdownToggle caret>
                {props.this.state.new_platformName}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem name="Facebook" onClick={props.this.social_ddChanged}>Facebook</DropdownItem>
                <DropdownItem name="Twitter" onClick={props.this.social_ddChanged}>Twitter</DropdownItem>
                <DropdownItem name="Youtube" onClick={props.this.social_ddChanged}>Youtube</DropdownItem>
                <DropdownItem name="Linkedin" onClick={props.this.social_ddChanged}>LinkedIn</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Label htmlFor="text-input">Profile Link</Label>
          </Col>
          <Col md="6">
            <Input type="text" id="text-input" name="new_platformLink" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <Button size="sm" color="primary" name="social" onClick={props.this.addItem.bind(props.this)}><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
          </Col>
          <Col md="2">
            <Button size="sm" color="danger" onClick={props.this.toggleFlag_social}><i className="fa fa-close"></i> Cancel</Button>
          </Col>
        </Row>
      </div>
      {/* </form> */}
    </div>
  );
}

function Compeducation_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_education(e) }}>
        <div className="form-group">
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Degree/Course Title:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_education_degree" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">University/ Institute Name:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_education_institute" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_education}><i className="fa fa-close"></i> Cancel</Button>
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
              <Input type="text" id="text-input" name="new_publication_publisher" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Publication Title:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_publication_name" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
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
              <Input type="text" id="text-input" name="new_certification_name" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Label htmlFor="text-input">Organization Name:</Label>
            </Col>
            <Col md="6">
              <Input type="text" id="text-input" name="new_certification_org" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
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
              <Input type="text" id="text-input" name="new_organization_name" placeholder="Link to your social Profile" onChange={props.this.Base_inputChanged} />
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


function Compwork_AddForm(props) {
  return (
    <div>
      <form onSubmit={(e) => { props.this.addItem_work(e) }}>
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
              <Input type="textarea" id="text-input" name="new_work_details" placeholder="Enter work Details" onChange={props.this.Base_inputChanged} />
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Save Changes</Button>
            </Col>
            <Col md="2">
              <Button size="sm" color="danger" onClick={props.this.toggleFlag_education}><i className="fa fa-close"></i> Cancel</Button>
            </Col>
          </Row>



        </div>
      </form>
    </div>
  );
}


function Compsocial(props) {
  // if (props.data.social)
  return (
    <div>
      <Row >
        <Col md="3">
          <h5>Social Profiles and Channels</h5>
        </Col>
        <Col>
          {props.this.state.Flag_social_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_social} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

        </Col>
      </Row>

      {props.this.state.Flag_social_View ? <Compsocial_AddForm this={props.this} /> : <Compsocial_Display data={props.data} this={props.this} />}

    </div>
  );
  // else {
  //   // return (<Compsocial_AddForm this={props.this} />)
  // }
}

function Compeducation(props) {

  return (
    <div>
      <Row >
        <Col md="3">
          <h5>Education & Degrees</h5>
        </Col>
        <Col>
          {props.this.state.Flag_education_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_education} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

        </Col>
      </Row>

      {props.this.state.Flag_education_View ? <Compeducation_AddForm this={props.this} /> : <Compeducation_Display data={props.data} this={props.this} />}

    </div>
  );

}

function CompCertificate(props) {
  // if (props.data.certifications)
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
  // else {
  //   // return (<Compsocial_AddForm this={props.this} />)
  // }
}

function CompPublication(props) {
  // if (props.data.publications)
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
  // else {
  //   // return (<Compsocial_AddForm this={props.this} />)
  // }
}


function CompOrganization(props) {
  // if (props.data.organizations)
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
  // else {
  //   // return (<Compsocial_AddForm this={props.this} />)
  // }
}



function Compwork(props) {
  // if (props.data.work)
  return (
    <div>
      <Row >
        <Col md="3">
          <h5>Work & Experience</h5>
        </Col>
        <Col>
          {props.this.state.Flag_work_View ? null : <Button type="submit" size="sm" onClick={props.this.toggleFlag_work} color="primary" ><i className="fa fa-dot-circle-o"></i> Add New</Button>}

        </Col>
      </Row>

      {props.this.state.Flag_work_View ? <Compwork_AddForm this={props.this} /> : <Compwork_Display data={props.data} this={props.this} />}

    </div>
  );
  // else {
  //   // return (<Compsocial_AddForm this={props.this} />)
  // }
}

class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      new_platformName: "Facebook",
      new_platformLink: "",
      new_education_degree: '',
      new_education_institute: '',
      new_work_company: '',
      new_work_designation: '',
      new_work_duration: '',
      new_work_details: '',
      new_certification_name: '',
      new_certification_org: '',
      new_organization_name: '',
      new_publication_publisher: '',
      new_publication_name: '',
      new_skill: '',

      // activeTabLG_Parent: 1,
      dropdownOpen_social: false,

      Flag_social_View: false,
      Flag_education_View: false,
      Flag_work_View: false,
      Flag_Certification_View: false,
      Flag_Organization_View: false,
      Flag_Publication_View: false,


      accordion: [false, false, false, false, false, false, false, false],

      user: {
        email: "",
        name: "",
        title: "",
        tagline: "",
        contactno: "",
        website: "",
        social: [],
        education: [],
        certifications: [],
        organizations: [],
        publications: [],
        services: [],
        work: [],
        skills: {}
      }
    }

    console.log('Aform Log Entry')
    this.inputChanged = this.inputChanged.bind(this);
    this.Base_inputChanged = this.Base_inputChanged.bind(this);
    this.Base_inputChanged_lowercase = this.Base_inputChanged_lowercase.bind(this);
    // this.education_inputChanged = this.education_inputChanged.bind(this);

    this.Submit_About = this.Submit_About.bind(this);
    // this.Submit_social = this.Submit_social.bind(this);
    // this.Submit_education = this.Submit_education.bind(this);

    this.delItem = this.delItem.bind(this);
    this.delItem_education = this.delItem_education.bind(this);
    this.delItem_work = this.delItem_work.bind(this);
    this.delItem_Certificate = this.delItem_Certificate.bind(this);
    this.delItem_Organization = this.delItem_Organization.bind(this);
    this.delItem_Publication = this.delItem_Publication.bind(this);

    this.addItem = this.addItem.bind(this);
    this.addItem_education = this.addItem_education.bind(this);
    this.addItem_work = this.addItem_work.bind(this);
    this.addItem_Certificate = this.addItem_Certificate.bind(this);
    this.addItem_Organization = this.addItem_Organization.bind(this);
    this.addItem_Publication = this.addItem_Publication.bind(this);
    this.addSkill = this.addSkill.bind(this);

    this.toggleDD_social = this.toggleDD_social.bind(this);
    this.social_ddChanged = this.social_ddChanged.bind(this);
    // this.toggleLG_Parent = this.toggleLG_Parent.bind(this);

    this.toggleFlag_social = this.toggleFlag_social.bind(this);
    this.toggleFlag_education = this.toggleFlag_education.bind(this);
    this.toggleFlag_work = this.toggleFlag_work.bind(this);
    this.toggleFlag_Certificate = this.toggleFlag_Certificate.bind(this);
    this.toggleFlag_Organization = this.toggleFlag_Organization.bind(this);
    this.toggleFlag_Publication = this.toggleFlag_Publication.bind(this);

    this.toggleAccordion = this.toggleAccordion.bind(this);
  }


  componentDidMount() {
    // var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`)
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      let snap = snapshot.val()
      this.setState({
        // user: {
        //   email: snap.email,
        //   Personal: {
        //     ...snap.Personal
        //   },
        //   skills: { ...snap.skills }
        // }
        user: {
          ...this.state.user, ...snap
          //Dont Overwrite the user Object, Just update the new Values in Snap
        }
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  inputChanged(e) {

    let temp = Object.assign({}, this.state.user)

    // if (e.target.name === 'email') {
    temp[e.target.name] = e.target.value
    this.setState({ user: temp })
    // } else {
    //   temp.Personal[e.target.name] = e.target.value
    //   this.setState({ user: temp })
    // }
  }

  social_ddChanged(e) {
    this.setState({
      new_platformName: e.target.name
    })
  }


  Submit_About(e) {
    e.preventDefault();
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`);
    dbref.set(this.state.user)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  // Submit_social(e) {

  //   var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/Personal/social`);
  //   var newsocial = dbref.push()
  //   newsocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  // }
  // Submit_education(e) {

  //   var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/Personal/education`);
  //   var newsocial = dbref.push()
  //   newsocial.set({ platform: this.state.new_platformName, link: this.state.new_platformLink })

  // }

  toggleDD_social() {
    this.setState(prevState => ({
      dropdownOpen_social: !prevState.dropdownOpen_social
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

  toggleFlag_social() {
    this.setState(prevState => ({
      Flag_social_View: !prevState.Flag_social_View
    }));
  }

  toggleFlag_education() {
    this.setState(prevState => ({
      Flag_education_View: !prevState.Flag_education_View
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

  toggleFlag_work() {
    this.setState(prevState => ({
      Flag_work_View: !prevState.Flag_work_View
    }));
  }

  Base_inputChanged(e) {
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }
  Base_inputChanged_lowercase(e) {
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value.toLowerCase();
    this.setState(temp)
  }

  //http://www.howtocreate.co.uk/referencedvariables.html
  addItem(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.user[e.target.name].push({ platform: this.state.new_platformName, link: this.state.new_platformLink })
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/social`);
    dbref.set(this.state.user.social)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
    this.toggleFlag_social()
  }

  addItem_education(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.user.education.push({ deg: this.state.new_education_degree, inst: this.state.new_education_institute })
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/education`);
    dbref.set(this.state.user.education)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

    this.toggleFlag_education()
  }


  addItem_Organization(e) {
    e.preventDefault();
    console.log(this.state)
    let temp = Object.assign({}, this.state)
    console.log('Temp Log', temp)
    temp.user.organizations.push({ name: this.state.new_organization_name })
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/organizations`);
    dbref.set(this.state.user.organizations)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

    this.toggleFlag_Organization()
  }


  addItem_Certificate(e) {
    e.preventDefault();
    let temp = Object.assign({}, this.state)
    temp.user.certifications.push({ name: this.state.new_certification_name, org: this.state.new_certification_org })
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/certifications`);
    dbref.set(this.state.user.certifications)
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
    temp.user.publications.push({ pub: this.state.new_publication_publisher, name: this.state.new_publication_name })
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/publications`);
    dbref.set(this.state.user.publications)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

    this.toggleFlag_Publication()
  }


  addItem_work(e) {
    e.preventDefault();
    let temp = Object.assign({}, this.state)
    temp.user.work.push({ com: this.state.new_work_company, des: this.state.new_work_designation, dur: this.state.new_work_duration, det: this.state.new_work_details, })
    this.setState(temp)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/work`);
    dbref.set(this.state.user.work)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

    this.toggleFlag_work()
  }

  addSkill(e) {
    e.preventDefault();
    console.log('Add Skill Form Submitted', this.state.new_skill)

    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/skills`)
    dbref.child(this.state.new_skill).set(true)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });

    this.addSkillForm.reset()
  }

  delItem(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.social.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/social`);
    dbref.set(this.state.user['social'])
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  delChildOfuser(target, item) {
    console.log('DelItem Called', item);
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/${target}/${item}`);
    dbref.remove()
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  delItem_education(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.education.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/education`);
    dbref.set(this.state.user.education)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }


  delItem_Certificate(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.certifications.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/certifications`);
    dbref.set(this.state.user.certifications)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  delItem_Publication(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.publications.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/publications`);
    dbref.set(this.state.user.publications)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }

  delItem_Organization(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.organizations.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/organizations`);
    dbref.set(this.state.user.organizations)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }


  delItem_work(i) {
    console.log('DelItem Called', i);
    let temp = Object.assign({}, this.state)
    temp.user.work.splice(i, 1)
    console.log('Temp After push:', temp)
    this.setState(temp)
    console.log('State after Set State:', this.state)
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/work`);
    dbref.set(this.state.user.work)
      .then(() => {
      })
      .catch(error => {
        console.log(error)
      });
  }



  render() {
    return (
      <div>

        {/* <Container fluid> */}
        <Row>
          <Col md="2">

            <Button outline color="primary" size="lg" block href="#/basel/profile">Profile</Button>
            <Button outline color="primary" size="lg" block  href="#/basel/jobpost">Job Section</Button>
            <Button outline color="primary" size="lg" block  href="#/basel/aform">Settings</Button>

          </Col>

          <Col md="7">
            {/* <Row>
              <Col>
                <CardBody> */}
                  <h4>Resume & Profile Settings</h4>
                {/* </CardBody>
              </Col>
            </Row> */}
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
                      <CompAbout data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseOne">
                      <h5 className="m-0 p-0">Skills</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                    <CardBody>
                      <CompSkills data={this.state.user.skills} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>

                <Card>
                  <CardHeader id="headingTwo">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseTwo">
                      <h5 className="m-0 p-0">Social</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseTwo">
                    <CardBody>
                      <Compsocial data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>



                <Card>
                  <CardHeader id="headingThree">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(3)} aria-expanded={this.state.accordion[3]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Education</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[3]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <Compeducation data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingFour">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(4)} aria-expanded={this.state.accordion[4]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Work</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[4]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <Compwork data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingFive">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(5)} aria-expanded={this.state.accordion[5]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Certifications</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[5]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompCertificate data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>

                <Card>
                  <CardHeader id="headingSix">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(6)} aria-expanded={this.state.accordion[6]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Organizations</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[6]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompOrganization data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


                <Card>
                  <CardHeader id="headingSeven">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(7)} aria-expanded={this.state.accordion[7]} aria-controls="collapseThree">
                      <h5 className="m-0 p-0">Publications</h5>
                    </Button>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[7]} data-parent="#accordion" id="collapseThree">
                    <CardBody>
                      <CompPublication data={this.state.user} this={this} />
                    </CardBody>
                  </Collapse>
                </Card>


              </div>
            </CardBody>
            {/* </Card> */}
          </Col>
          <Col md="3">
            <Card>
              <CardBody>
                <h4> Latest Trends</h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}

export default Aform;
