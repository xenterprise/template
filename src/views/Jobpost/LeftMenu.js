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

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount() {
    }



    render() {
        return (
            <div>
                {/* <Button outline color="primary" size="lg" block href="#/basel/sview">Explore Jobs</Button> */}
                <Button outline className="text-left" color="primary" size="lg" block href="#/basel/profile"><i className="fa fa-user"></i> My Resume</Button>
                <Button outline className="text-left" color="primary" size="lg" block href="#/basel/aform"><i className="fa fa-edit"></i> Edit Profile</Button>
                <Button outline className="text-left" color="primary" size="lg" block href="#/basel/jobpost"><i className="fa fa-briefcase"></i> My Jobs</Button>
                <Button outline className="text-left" color="primary" size="lg" block href="#/basel/sview"><i className="fa fa-search"></i> Explore Jobs</Button>
                
            </div>
        )
    }
}

export default LeftMenu;
