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



function SearchResultJobs(props) {
  return (
    <div>
      {
        Object.keys(props.this.state.jobDetails).map((item, i) => (
          <div key={i}>
            <Card>
              <CardHeader>
                {/* onClick={() => props.this.toggleAccordionPosted(0)} */}
                {/* aria-expanded={props.this.state.accordionPosted[0]} aria-controls="collapseOne" */}

                <Row>
                  <Col md="9">
                    <Button block target="_blank" id="job_title" color="link" className="text-left m-0 p-0" href={'#/basel/job/' + props.this.state.jobDetails[item].jid} >
                      <h5 className="m-0 p-0">{props.this.state.jobDetails[item].jd.titl}</h5>
                    </Button>
                    
                  </Col>
                  <Col md="3">
                    <h6>{props.this.state.jobDetails[item].jd.crcy}:{props.this.state.jobDetails[item].jd.slry}</h6>

                  </Col>
                </Row>


              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <p><strong>Company: </strong>{props.this.state.jobDetails[item].jd.jcom}</p>
                  </Col>
                  <Col md="6">
                    <p><strong>Last Date to Apply: </strong>{props.this.state.jobDetails[item].jd.apdl}</p>
                  </Col>
                </Row>

                <span><p><strong>Job Description: </strong>{props.this.state.jobDetails[item].jd.resp}</p></span>
                {/* <p>{props.this.state.jobDetails[item].jd.date}</p> */}

                {
                  Object.keys(props.this.state.jobDetails[item].jd.skls).map((skill_item, i) => (
                    <Button
                      key={i}
                      size="sm"
                      className="btn-facebook btn-brand text mr-1 mb-1">
                      <span>{props.this.state.jobDetails[item].jd.skls[skill_item].s}</span>
                    </Button>
                  ))
                }
              </CardBody>
            </Card>
          </div>
        ))
      }
    </div>
  )
}

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      qJobs: [],
      jobDetails: [],
    }
    this.searchJobs = this.searchJobs.bind(this)
    this.loadJobDetails = this.loadJobDetails.bind(this)
  }

  componentDidMount() {
    if (this.props.location.state) {
      // console.log("*****Redirected*****")
      console.log('Param ', this.props.location.state.text)
      this.searchJobs(this.props.location.state.text)
      this.setState({
        query: this.props.location.state.text
      })
    }
    else {
      // console.log("*****Directly Loaded*****")
    }
  }

  


  componentWillReceiveProps(nextProps) {
    console.log("Next props", nextProps.location.state.text)
    this.searchJobs(nextProps.location.state.text)
    this.setState({
      query: nextProps.location.state.text
    })
  }



  searchJobs(query) {

    let unique = []
    let jobsArray = []
    let tempDetails = []
    let tags = query.split("~")

    let finalJobIds = []
    let promises = []

    for (var i = 0; i < tags.length; i++) {

      promises.push(new Promise((resolve, reject) => {
        console.log("Var i:", i, tags.length)

        var skills_jobs = fire.database().ref(`skills_jobs/${tags[i]}`)
        // promises.push(
        skills_jobs.on('value', snap => {
          unique = snap.val()
          console.log("JobsArray: ", unique, snap.val())
          Object.keys(unique).forEach((key, index) => {

            console.log(key, index, unique[key])
            if (unique[key] === true) {
              finalJobIds.push(key)
            }
          })
          resolve(0)
        })
        // )
      })
      )
    }


    Promise.all(promises)
      .then(() => {
        let jobIdsWithoutDuplication = [...new Set(finalJobIds)];
        console.log(jobIdsWithoutDuplication)
        let newpr = []
        jobIdsWithoutDuplication.map((idd, indexx) => {
          newpr.push(new Promise((resolve, reject) => {
            var Jobs = fire.database().ref(`jobs/${idd}`)
            Jobs.on('value', snap => {
              tempDetails.push({ jid: snap.key, jd: snap.val() })
              resolve(0)
            })
          })
          )
        })
        Promise.all(newpr)
          .then(() => {
            console.log("All Prms cler", tempDetails)
            this.setState({
              jobDetails: tempDetails
            })

          })

      })
  }

  loadJobDetails() {

    let tempDetails = []

    for (var i = 0; i < this.state.qJobs.length; i++) {

      var Jobs = fire.database().ref(`jobs/${this.state.qJobs[i]}`)
      Jobs.on('value', snap => {

        tempDetails.push(snap.val())
        // let unique = [...new Set(tempDetails)];

        let temp = Object.assign({}, this.state)
        temp.jobDetails = tempDetails
        this.setState(temp)
        console.log("Current State:", this.state)

      })
    }
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
            {/* <Card>
              <CardBody> */}

            <h1> You Searched For {this.state.query} </h1>
            <SearchResultJobs this={this} />
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

export default SearchView;
