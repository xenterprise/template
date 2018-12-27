// import React, { Component } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Badge,
//   Button,
//   ButtonDropdown,
//   ButtonGroup,
//   ButtonToolbar,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Col,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Progress,
//   Row,
//   Table,
//   FormGroup,
//   Label,
//   InputGroup,
//   Input,
//   InputGroupAddon
// } from 'reactstrap';
// import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
// import classnames from 'classnames';
// import Widget03 from '../Widgets/Widget03'
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
// import routes from '../../routes';
// import { Redirect, Route, Switch } from 'react-router-dom';

// import fire from '../../config/Fire'
// import SearchView from './SearchView'

// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

//   componentDidMount() {

//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
// }
// }

// export default Search;


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
import routes from '../../routes';
import { Redirect, Route, Switch } from 'react-router-dom';

import fire from '../../config/Fire'


class GlobalAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AlertId: ""
        }
    }

    componentDidMount() {
        this.setState({
            AlertId: this.props.AlertId
        })

    }

    // componentWillReceiveProps(nextProps) {
    //     // console.log("Next props", nextProps.location.state)
    //     // if(nextProps.location.state){
    //     this.searchJobs(nextProps.location.state.text)
    //     this.setState({
    //         query: nextProps.location.state.text
    //     })
    //     // }
    // }


    render() {
        if (this.state.AlertId === "A") {
            return (
                <div>
                    <Alert color="danger">
                    {/* or <a href="#" className="alert-link">Resend Verification Email</a>. */}
                        Verification email is sent to you, Please click on the link in verification email. You may not be able to Apply to Jobs or access some features of this site without verification
                    </Alert>
                </div>
            )
        }
        else if (this.state.AlertId === "B") {
            return (
                <div>
                    <Alert color="danger">
                    {/* or <a href="#" className="alert-link">Resend Verification Email</a>. */}
                        Please fill out the form properly, Job Title, Company and Salary cannot be left blank
                    </Alert>
                </div>
            )
        }
        else{
            return null
        }

    }
}

export default GlobalAlert;
