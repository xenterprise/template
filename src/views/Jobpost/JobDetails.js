import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Alert,
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
import LeftMenu from '../Jobpost/LeftMenu'

function JobDisplayComponent(props) {
  if (props.this.state.jobDetails.jd)
    return (
      <div>
        {
          <Card>
            <CardHeader>
              <Row>
                <Col md="9">
                  <Button block id="job_title" color="link" className="text-left m-0 p-0" >
                    <h5 className="m-0 p-0"><i className="fa fa-briefcase"></i> {props.this.state.jobDetails.jd.titl}</h5>
                  </Button>
                  {/* <strong>{props.this.state.jobDetails.jd.jcom}</strong> */}
                  <h6><i className="fa fa-id-card-o"></i> {props.this.state.jobDetails.jd.jcom}</h6>
                </Col>
                <Col md="3">
                  {fire.auth().currentUser.emailVerified ?
                    <Button block outline active color="success" aria-pressed="true" onClick={props.this.ApplyToJob}>Apply Now</Button> :
                    <Alert color="danger">
                      Unverified Accounts Can't Apply to Jobs
                  </Alert>

                  }
                </Col>
              </Row>
            </CardHeader>
            <CardBody>

              {props.this.state.jobDetails.jd.resp}
              <br /><br />
              {(props.this.state.jobDetails.jd.skls) ?
                Object.keys(props.this.state.jobDetails.jd.skls).map((skill_item, i) => (
                  <Button
                    key={i}
                    size="sm"
                    className="btn-facebook btn-brand text mr-1 mb-1">
                    <span>{props.this.state.jobDetails.jd.skls[skill_item].s}</span>
                  </Button>
                ))
                : null}
              <br /><br />
              <Row>
                <Col md="6">
                  <p><strong>Salary Package: </strong>{props.this.state.jobDetails.jd.slry} {props.this.state.jobDetails.jd.crcy}</p>
                  <p><strong>Last Date for Application: </strong>{props.this.state.jobDetails.jd.apdl}</p>
                  <p><strong>Degree Requirement: </strong>{props.this.state.jobDetails.jd.jdeg}</p>
                  <p><strong>Experience: </strong>{props.this.state.jobDetails.jd.jexp}</p>
                </Col>
                <Col md="6">
                  <p><strong>Appointment Location: </strong>{props.this.state.jobDetails.jd.jloc}</p>
                  <p><strong>Probation Time: </strong>{props.this.state.jobDetails.jd.pbtn}</p>
                  <p><strong>Job Timings: </strong>{props.this.state.jobDetails.jd.tmgs}</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        }
      </div>
    )
  else
    return (
      <div>
        Loading
        </div>
    )
}



class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: {}
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
      let dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/app_jobs`)
      dbref.child(this.props.match.params.juid).set(true)
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
      resolve(0)
    }))

    promises.push(new Promise((resolve, reject) => {
      let dbref2 = fire.database().ref(`jobs_users/${this.props.match.params.juid}`)
      dbref2.child(fire.auth().currentUser.uid).set(true)
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
      resolve(0)
    }))

    promises.push(new Promise((resolve, reject) => {
      let dbref3 = fire.database().ref(`jobs_users_labels/${this.props.match.params.juid}`)
      dbref3.child(fire.auth().currentUser.uid).set("no")
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
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
            <LeftMenu />
          </Col>

          <Col md="7">
            {/* <h1> Job Details of {this.props.match.params.juid} </h1> */}
            {/* <Card>
              <CardBody> */}
            <JobDisplayComponent this={this} />
            {/* </CardBody>
            </Card> */}
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
    )
  }
}

export default JobDetails;
