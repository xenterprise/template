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
import routes from '../../routes';
import { Redirect, Route, Switch } from 'react-router-dom';

import fire from '../../config/Fire'
import SearchView from './SearchView'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "node~react",
      sview: false,
      user: {},
      hash: ""
    }
    this.TextInputChanged_lowercase = this.TextInputChanged_lowercase.bind(this)
    this.SearchEvent = this.SearchEvent.bind(this)
    this.ExploreJobs = this.ExploreJobs.bind(this)
    this.add_skills_querry = this.add_skills_querry.bind(this)
  }

  componentDidMount() {
    var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`)
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      let snap = snapshot.val()
      this.setState({
        user: {
          ...this.state.user, ...snap
        }
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });

    console.log("MY CURR URL: ", window.location.hash)
    this.setState({
      hash: window.location.hash
    })
  }


  componentDidUpdate() {
    if (this.state.sview) {
      this.setState({
        sview: false
      })
    }
  }


  add_skills_querry() {

  }


  TextInputChanged_lowercase(e) {
    // console.log(this.state.text)
    let temp = Object.assign({}, this.state)

    temp[e.target.name] = e.target.value.replace(/[^a-zA-Z ]/g, "").toLowerCase()
    this.setState(temp)
  }

  SearchEvent() {
    console.log("Search Event Triggered")

    let pretext = this.state.text
    pretext = pretext.split(" ").join("~");

    this.setState({
      text: pretext,
      sview: true
    })
  }

  ExploreJobs() {
    var temp
    Object.size = function (obj) {
      var size = 0, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };

    // Get the size of an object
    var size = Object.size(this.state.user.skills);

    if (size > 0) {
      var keys = Object.keys(this.state.user.skills)

      for (var i = 0; i < size; i++) {
        temp += keys[i] + "~"
      }

      console.log("My new query",temp)

      this.setState({
        text: temp,
        sview: true
      })
    }
  }


  render() {

    if (this.state.sview) {

      // return <Redirect to={'/basel/sview/' + this.state.idUser }/>
      return <Redirect to={{
        pathname: '/basel/sview/',
        state: { text: this.state.text }
      }}
      />

    }

    return (
      <div>


        <NavItem className="px-3">
          <Row>
            <Col md="8">
              <InputGroup>
                <Input invalid name="text" id="appendedInputButtons" size="48" type="text" placeholder="Search for Skills, Jobs & other opportunities" onChange={this.TextInputChanged_lowercase} />
                <InputGroupAddon addonType="append">
                  <Button color="danger" onClick={this.SearchEvent}><i className="fa fa-search"></i> Search</Button>
                  {/* <Button color="secondary">Options</Button> */}
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md="2">
              <Button color="danger" onClick={this.ExploreJobs}><i className="fa fa-search"></i> Explore Jobs</Button>
            </Col>
            {/* <Col md="2">
              <Button color="danger" href="#/basel/jobpost"><i className="fa fa-plus"></i> Post Job</Button>
            </Col> */}
          </Row>
        </NavItem>
      </div>
    )


  }
}

export default Search;
