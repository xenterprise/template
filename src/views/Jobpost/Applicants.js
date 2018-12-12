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
  InputGroupAddon, Collapse
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import fire from '../../config/Fire'


function CompApplicants(props) {
    return (
      <div>
  
        <Row>
          <Col md="9">
          </Col>
          <Col md="3">
            <Button type="submit" align="right" size="md" color="primary" onClick={props.this.createJob}><i className="fa fa-dot-circle-o"></i> Post A Job</Button>
          </Col>
        </Row>
        <h5>Applicants Section</h5>
        <Card>
          <CardHeader id="headingOne">
            <Button block color="link" className="text-left m-0 p-0" onClick={() => props.this.toggleAccordionPosted(0)} aria-expanded={props.this.state.accordionPosted[0]} aria-controls="collapseOne">
              <h5 className="m-0 p-0">All Applicants for this Job</h5>
            </Button>
          </CardHeader>
          <Collapse isOpen={props.this.state.accordionPosted[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
            <CardBody>
              {/* <CompJob_Applied this={props.this} /> */}
            </CardBody>
          </Collapse>
        </Card>
  
  
        <Card>
          <CardHeader id="headingTwo">
            <Button block color="link" className="text-left m-0 p-0" onClick={() => props.this.toggleAccordionPosted(1)} aria-expanded={props.this.state.accordionPosted[1]} aria-controls="collapseTwo">
              <h5 className="m-0 p-0">Shortlisted Applicants</h5>
            </Button>
          </CardHeader>
          <Collapse isOpen={props.this.state.accordionPosted[1]} data-parent="#accordion" id="collapseTwo">
            <CardBody>
              {/* <CompJob_Posted this={props.this} /> */}
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader id="headingTwo">
            <Button block color="link" className="text-left m-0 p-0" onClick={() => props.this.toggleAccordionPosted(2)} aria-expanded={props.this.state.accordionPosted[1]} aria-controls="collapseTwo">
              <h5 className="m-0 p-0">Rejected Applicants</h5>
            </Button>
          </CardHeader>
          <Collapse isOpen={props.this.state.accordionPosted[2]} data-parent="#accordion" id="collapseTwo">
            <CardBody>
              {/* <CompJob_Posted this={props.this} /> */}
            </CardBody>
          </Collapse>
        </Card>
  
  
      </div>
    )
  }


class Applicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: {},
      accordionPosted: [false, false, false],
    }
    this.ApplyToJob = this.ApplyToJob.bind(this)
  }


  componentDidMount() {
    let tempDetails
    var Jobs = fire.database().ref(`jobs/${this.props.match.params.juid}`)
    Jobs.on('value', snap => {
      tempDetails = { jid: snap.key, jd: snap.val() }
      this.setState({
        jobDetails: tempDetails
      })
    })
  }

  ApplyToJob() {

    let promises = []
    promises.push(new Promise((resolve, reject) => {
    //   let dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/app_jobs`)
    //   dbref.child(this.props.match.params.juid).set(true)
    //     .then(() => {
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     });
      resolve(0)
    }))

    promises.push(new Promise((resolve, reject) => {
    //   let dbref2 = fire.database().ref(`jobs_users/${this.props.match.params.juid}`)
    //   dbref2.child(fire.auth().currentUser.uid).set(true)
    //     .then(() => {
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     });
      resolve(0)
    }))

    Promise.all(promises)
      .then(() => {
        console.log("Applied")
      })



  }

  render() {
    return (
      <div>
        <Row>
          <Col md="2">

            <Button outline color="primary" size="lg" block href="#/basel/profile">Profile</Button>
            <Button outline color="primary" size="lg" block href="#/basel/jobpost">Job Section</Button>
            <Button outline color="primary" size="lg" block href="#/basel/aform">Settings</Button>

          </Col>

          <Col md="7">
            {/* <h1> Job Details of {this.props.match.params.juid} </h1> */}
            {/* <Card>
              <CardBody> */}
            {/* <JobDisplayComponent this={this} /> */}
            <p>Applicants View</p>
            <CompApplicants this = {this}/>
            {/* </CardBody>
            </Card> */}
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
    )
  }
}

export default Applicants;
