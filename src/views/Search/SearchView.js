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
  console.log("ANy Functoma")
  return (
    <div>
      {
        Object.keys(props.this.state.jobDetails).map((item, i) => (
          <div key={i}>
            <CardHeader>

              {item.jexp}

            </CardHeader>
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
      jobDetails: []
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

  componentDidUpdate() {
    // this.loadJobDetails()
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

    for (var i = 0; i < tags.length; i++) {

      console.log("Var i:", i, tags.length)
      // Populating the JobsArray matching All searched keywords with skills
      var skills_jobs = fire.database().ref(`skills_jobs/${tags[i]}`)
      skills_jobs.on('value', snap => {
        // if (snap.val() === true) {
        // jobsArray.push(snap.key)
        unique = snap.val()
        // }
        //Removing duplicate entries
        // unique = [...new Set(unique)];
        console.log("JobsArray: ", unique, snap.val())

        //Assign filtered jobs to the qJobs in State
        // let temp = Object.assign({}, this.state)
        // temp.qJobs = unique


        Object.keys(unique).forEach((key, index) => {

          if (unique[key] === true) {
            finalJobIds.push(key)
          }
        })

        // 

        // this.setState({
        //   jobDetails: tempDetails
        // })

        // this.setState(temp, () => {


        //   for (var j = 0; j < this.state.qJobs.length; j++) {

        //     var Jobs = fire.database().ref(`jobs/${this.state.qJobs[j]}`)
        //     Jobs.on('value', snap => {

        //       if (snap.val() !== null) {
        //         tempDetails.push({ i: snap.key, d: snap.val() })
        //         unique = [...new Set(tempDetails.map(tempDetails))]

        //         // console.log("TDTDTDTD: ", tempDetails)
        //         // console.log("UNUNUNUN: ", unique)

        //         let temp = Object.assign({}, this.state)
        //         temp.jobDetails = unique
        //         this.setState(temp)
        //         // console.log("CCCC:", this.state.jobDetails)
        //       }
        //     })
        //   }


        // })
      })
    }

    let jobIdsWithoutDuplication = [...new Set(finalJobIds)];

    jobIdsWithoutDuplication.map((idd, indexx) => {

      var Jobs = fire.database().ref(`jobs/${idd}`)
      Jobs.on('value', snap => {

        if (snap.val() !== null) {
          tempDetails.push(snap.val())
        }

      })
    })


    console.log("TEMP Details", tempDetails)

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
            <Card>
              <CardBody>
                <h1> This is Search Results View </h1><br />
                <h1> Searched For {this.state.query} </h1>
                {this.state.jobDetails.length > 0 ? <SearchResultJobs this={this} /> : null}
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
    )
  }
}

export default SearchView;
