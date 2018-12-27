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
      sview: false
    }
    this.TextInputChanged_lowercase = this.TextInputChanged_lowercase.bind(this)
    this.SearchEvent = this.SearchEvent.bind(this)
  }

  componentDidMount() {

  }


  componentDidUpdate() {
    if (this.state.sview) {
      this.setState({
        sview: false
      })
    }
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
          <InputGroup>
            <Input valid name="text" id="appendedInputButtons" size="48" type="text" placeholder="Search for Skills, Jobs & other opportunities" onChange={this.TextInputChanged_lowercase} />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={this.SearchEvent}>Search</Button>
              {/* <Button color="secondary">Options</Button> */}
            </InputGroupAddon>
          </InputGroup>
        </NavItem>
      </div>
    )


  }
}

export default Search;
