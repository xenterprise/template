import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import fire from '../../config/Fire'


//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

function socialPlatformClassA(platform) {
  if (platform === 'Facebook') {
    return "btn-facebook btn-brand icon mr-1 mb-1"
  } else if (platform === 'Twitter') {
    return "btn-twitter btn-brand icon mr-1 mb-1"
  }
}

function socialPlatformClassB(platform) {
  if (platform === 'Facebook') {
    return "fa fa-facebook"
  } else if (platform === 'Twitter') {
    return "fa fa-twitter"
  }
}


function PrimaryInfo(props) {
  if (props.this.state.user) {

    return (
      <div>
        <Row>
          <Col md="5">
            <div align="left">
              <h4>{props.this.state.user.name}</h4>
              <h5>{props.this.state.user.title}</h5>
              <h6>{props.this.state.user.tagline}</h6>
            </div>

          </Col>
          <Col md="2">
            <div align="center">
              <img src={'assets/img/avatars/9.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </div>
          </Col>
          <Col md="5">
            <div align="right">
              <h5>{props.this.state.user.email}</h5>
              <h5>{props.this.state.user.contactno}</h5>
              <h5>{props.this.state.user.website}</h5>
              <h5>{props.this.state.user.username}</h5>
              {props.this.state.user.social ? <SocialPlatforms this={props.this} /> : null}
            </div>
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }

}
function SocialPlatforms(props) {
  if (props.this.state.user.social) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.social).map((item, i) => (

            <Button key={i}
              href={"https://" + props.this.state.user.social[item].link}
              target="_blank"
              className={socialPlatformClassA(props.this.state.user.social[item].platform)}>
              <i className={socialPlatformClassB(props.this.state.user.social[item].platform)}></i>
            </Button>

          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Social Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }

}

function Skills(props) {
  if (props.this.state.user.skills) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.skills).map((item, i) => (
            <Button
              key={i}
              size="md"
              className="btn-facebook btn-brand text mr-1 mb-1">
              <span>{item}</span>
            </Button>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }
}

// This code also executes even when Personal is not populated yet so at that time, work does not exist
function WorkExperience(props) {
  if (props.this.state.user.work) {
    if (props.this.state.user.work) {
      return (
        <div>
          <Row>
            {
              Object.keys(props.this.state.user.work).map((item, i) => (
                <Col key={i} xs="12" sm="6" md="6">
                  <Card className="border-primary">
                    <CardHeader>
                      <h4>{props.this.state.user.work[item].com}</h4>
                      <h6>{props.this.state.user.work[item].des}</h6>
                      <p>{props.this.state.user.work[item].dur}</p>
                    </CardHeader>
                    <CardBody>
                      {props.this.state.user.work[item].det}
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>
            No work Information
          </p>
        </div>
      )
    }

  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }

}


function Education(props) {
  if (props.this.state.user.education) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.education).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.education[item].deg}</h5>
              <p>{props.this.state.user.education[item].inst}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }

}

function Organizations(props) {
  if (props.this.state.user.organizations) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.organizations).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.organizations[item].name}</h5>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }

}

function Certifications(props) {
  if (props.this.state.user.certifications) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.certifications).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.certifications[item].org}</h5>
              <p>{props.this.state.user.certifications[item].name}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }
}

function Publications(props) {
  if (props.this.state.user.publications) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.publications).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.publications[item].pub}</h5>
              <p>{props.this.state.user.publications[item].name}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          No Data Available, Please Go to "Edit Profile"
        </p>
      </div>
    )
  }
}



function Availability() {
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <h3>Looking for opportunities </h3>
          </CardHeader>
          <CardBody>
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th><h4>Services</h4></th>
                  <th className="text-center"><h4>Project Based Jobs</h4></th>
                  <th className="text-center"><h4>Part Time Jobs</h4></th>
                  <th className="text-center"><h4>Full Time Jobs</h4></th>
                  <th className="text-center"><h4>Partnerships</h4></th>
                  <th className="text-center"><h4>Consultation</h4></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div><h5>Web Development</h5></div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
              </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div><h5>Software Development</h5></div>
                    <div className="small text-muted">

                      <span>Recurring</span> | Registered: Jan 1, 2015
            </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div><h5>Trading & Investments</h5></div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
            </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div><h5>Mentorship</h5></div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
            </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div><h5>Web Hosting</h5></div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
            </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div><h5>Real Estate</h5></div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
            </div>
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                  <td className="text-center">
                    <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}



class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggleOld = this.toggleOld.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      activeTab: '1',
      profile_user: fire.auth().currentUser.uid,
      user: {}
    };

    this.skills = []
  }



  toggleOld() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentDidMount() {
    console.log('Param USER ID', this.props.match.params.id)
    this.setState({
      profile_user: this.props.match.params.id
    })

    if(this.props.match.params.id){
      var dbref = fire.database().ref(`users/${this.props.match.params.id}`)
    }
    else{
      var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`)
    }
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      let snap = snapshot.val()
      console.log('firbase snap: ', snap)
      // this.user = snap
      this.setState({
        user: snap
      })
      console.log(this.user)
      console.log('Current State user', this.state.user)



    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });


  }
  render() {

    return (
      <div>
        <Row>
          <Col md="2">

            {/* <Button outline color="primary" size="lg" block href="#/basel/sview">Explore Jobs</Button> */}
            <Button outline className="text-left" color="primary" size="lg" block href="#/basel/profile"><i className="fa fa-user"></i> Profile</Button>
            <Button outline className="text-left" color="primary" size="lg" block href="#/basel/jobpost"><i className="fa fa-briefcase"></i> My Jobs</Button>
            <Button outline className="text-left" color="primary" size="lg" block href="#/basel/aform"><i className="fa fa-edit"></i> Edit Profile</Button>

          </Col>

          <Col md="7">
            <Card>
              <CardBody>
                <PrimaryInfo this={this} />
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
              <h5><i className="fa fa-check-circle"></i> Skills</h5>
              </CardHeader>
              <CardBody >
                <Skills this={this} />
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5><i className="fa fa-briefcase"></i> Work Experience & Projects</h5>
              </CardHeader>
              <CardBody>
                <WorkExperience this={this} />
              </CardBody>
            </Card>





            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <h5><i className="fa fa-graduation-cap"></i> Education</h5>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      <Education this={this} />
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <h5><i className="fa fa-users"></i> Organizations</h5>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      <Organizations this={this} />
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <h5><i className="fa fa-certificate"></i> Certifications</h5>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      <Certifications this={this} />
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <h5><i className="fa fa-globe"></i> Publications</h5>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      <Publications this={this} />
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>



          <Col md="3">
            <Card>
              <CardBody>
                <h4><i className="fa fa-line-chart"></i> Latest Trends</h4>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Profile;
