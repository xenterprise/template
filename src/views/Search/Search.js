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
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../Widgets/Widget03'
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

function SocialPlatformClassA(platform) {
  if (platform === 'Facebook') {
    return "btn-facebook btn-brand icon mr-1 mb-1"
  } else if (platform === 'Twitter') {
    return "btn-twitter btn-brand icon mr-1 mb-1"
  }
}

function SocialPlatformClassB(platform) {
  if (platform === 'Facebook') {
    return "fa fa-facebook"
  } else if (platform === 'Twitter') {
    return "fa fa-twitter"
  }
}


function PrimaryInfo(props) {
  if (props.this.state.user.Personal) {

    return (
      <div>
        <Row>
          <Col md="5">
            <div align="left">
              <h4>{props.this.state.user.Personal.name}</h4>
              <h5>{props.this.state.user.Personal.title}</h5>
              <h6>{props.this.state.user.Personal.tagline}</h6>
            </div>

          </Col>
          <Col md="2">
            <div align="center">
              <img src={'assets/img/avatars/9.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </div>
          </Col>
          <Col md="5">
            <div align="right">
              <h5>{props.this.state.user.Email}</h5>
              <h5>{props.this.state.user.Personal.contactno}</h5>
              <h5>{props.this.state.user.Personal.website}</h5>
              <h5>{props.this.state.user.Personal.username}</h5>
              {
                Object.keys(props.this.state.user.Personal.Social).map((item, i) => (

                  <Button key={i}
                    href={"https://" + props.this.state.user.Personal.Social[item].link}
                    target="_blank"
                    className={SocialPlatformClassA(props.this.state.user.Personal.Social[item].platform)}>
                    <i className={SocialPlatformClassB(props.this.state.user.Personal.Social[item].platform)}></i>
                  </Button>

                ))
              }
            </div>
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }

}

function Skills(props) {
  if (props.this.state.user.Personal) {
    props.this.skills = props.this.state.user.Personal.skills.split(',')
    return (
      <div>
        {
          Object.keys(props.this.skills).map((item, i) => (
            <Button key={i}
              size="lg"
              className="btn-facebook btn-brand text mr-1 mb-1">
              <span>{props.this.skills[item]}</span>
            </Button>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }

}


function WorkExperience(props) {
  if (props.this.state.user.Personal) {
    return (
      <div>
        <Row>
          {
            Object.keys(props.this.state.user.Personal.Work).map((item, i) => (
              <Col key={i} xs="12" sm="6" md="6">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>{props.this.state.user.Personal.Work[item].com}</h4>
                    <h6>{props.this.state.user.Personal.Work[item].des}</h6>
                    <p>{props.this.state.user.Personal.Work[item].dur}</p>
                  </CardHeader>
                  <CardBody>
                    {props.this.state.user.Personal.Work[item].det}
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }

}


function Education(props) {
  if (props.this.state.user.Personal) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.Personal.Education).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.Personal.Education[item].deg}</h5>
              <p>{props.this.state.user.Personal.Education[item].inst}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }

}

function Organizations(props) {
  if (props.this.state.user.Personal) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.Personal.Organizations).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.Personal.Organizations[item].name}</h5>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }

}

function Certifications(props) {
  if (props.this.state.user.Personal) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.Personal.Certifications).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.Personal.Certifications[item].org}</h5>
              <p>{props.this.state.user.Personal.Certifications[item].name}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  }
}

function Publications(props) {
  if (props.this.state.user.Personal) {
    return (
      <div>
        {
          Object.keys(props.this.state.user.Personal.Publications).map((item, i) => (
            <ListGroupItem key={i}>
              <h5>{props.this.state.user.Personal.Publications[item].pub}</h5>
              <p>{props.this.state.user.Personal.Publications[item].name}</p>
            </ListGroupItem>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
        <p>
          Loading
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



class Search extends Component {
  constructor(props) {
    super(props);

    this.toggleOld = this.toggleOld.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      activeTab: '1',
      profile_user: localStorage.getItem('user'),
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
    // console.log('Param ', this.props.match.params.id)
    // this.setState({
    //   profile_user: this.props.match.params.id
    // })

    var dbref = fire.database().ref(`users`)
    dbref.orderByChild("Email").on("child_added", function(snapshot){
      console.log('Search Log', snapshot.key);
    })


  }
  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <h1>
            {this.state.profile_user}
          </h1>
          {}
        </Row>
        <Row>

          <Col md="9">
            {/* <Card>
              <CardBody> */}
                <FormGroup>
                  {/* <Label htmlFor="appendedInputButtons">Two-button append</Label> */}
                  <div className="controls">
                    <InputGroup>
                      <Input valid id="appendedInputButtons" size="16" type="text" placeholder="Search for People, Jobs & other opportunities" />
                      <InputGroupAddon addonType="append">
                        <Button color="primary">Search</Button>
                        <Button color="secondary">Options</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </FormGroup>
              {/* </CardBody>
            </Card> */}

            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Col>

          <Col md="3">
            <Card>
              <CardBody>
                <h4> Latest Trends</h4>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Search;
