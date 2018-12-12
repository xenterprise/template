import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, FormGroup, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logor.png'
import sygnet from '../../assets/img/brand/sygnet.svg'
import fire from '../../config/Fire'
import Search from '../../views/Search/Search'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // console.log("Props", this.props)

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        <AppNavbarBrand
          full={{ src: logo, width: 112, height: 45, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/basel/profile">Profile</NavLink>
          </NavItem>
          {/* <NavItem className="px-3">
            <NavLink href="#/basel/search">Search</NavLink>
          </NavItem> */}
          {/* <NavItem className="px-3">
            <NavLink href="#/basel/aform">Edit Profile</NavLink>
          </NavItem> */}
          {/* <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem> */}
          <NavItem className="px-3">
            <NavLink href="#/basel/jobpost">Job</NavLink>
          </NavItem>
          {/* <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem> */}


          <Search history = {this.props.history}/>
        </Nav>


        <Nav className="d-md-down-none ml-auto" navbar>

          <NavItem className="d-md-down-none">
            <h6>{localStorage.account}</h6>
          </NavItem>

          <NavItem className="px-3">
            <NavLink href="#/basel/jobpost">{fire.auth().currentUser.uid}</NavLink>
          </NavItem>

          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={() => fire.auth().signOut()}><i className="fa fa-lock"></i> Logout</DropdownItem>
              {/* <DropdownItem >
                <div onClick={() => fire.auth().signOut()}>
                <i className="fa fa-lock"></i>Another Action
                </div>
              </DropdownItem> */}
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile /> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
