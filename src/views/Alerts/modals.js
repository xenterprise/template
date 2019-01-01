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
    InputGroupAddon, Modal, ModalBody, ModalHeader, ModalFooter
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import routes from '../../routes';
import { Redirect, Route, Switch } from 'react-router-dom';

import fire from '../../config/Fire'

class GlobalModals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {},
            ModalId: this.props.ModalId,
            modal_working: true,
        }
        this.toggleModal_Working = this.toggleModal_Working.bind(this)
        this.modalA_onChange = this.modalA_onChange.bind(this)
    }

    toggleModal_Working() {
        this.setState({
            modal_working: !this.state.modal_working,
        });
    }

    modalA_onChange(){
        var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/settings`)
        dbref.child("Acheck").set(false)
    }

    componentDidMount() {
        var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}/settings`)
        dbref.on("value", (snapshot) => {
            console.log('Snapshot', snapshot.val())
            let snap = snapshot.val()
            this.setState({
                settings: {
                    ...this.state.settings, ...snap
                }
            })
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });
    }

    render() {
        if (this.state.ModalId === "A" && this.state.settings.Acheck) {
            return (
                <div>
                    {/* <Button color="danger" onClick={this.toggleModal_Working} className="mr-1">Danger modal</Button> */}
                    <Modal isOpen={this.state.modal_working} toggle={this.toggleModal_Working}
                        className={'modal-lg' + this.props.className}>
                        <ModalHeader toggle={this.toggleModal_Working}>How it works?</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="4" className="justify-content-center">
                                    <p>Complete Your Profile</p>
                                </Col>
                                <Col md="4" className="align-items-center">
                                    <p>View & Confirm Resume</p>
                                </Col>
                                <Col md="4" className="align-items-center">
                                    <p>Search & Apply to Jobs</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="1" className="justify-content-center">
                                </Col>
                                <Col md="2" className="justify-content-center">
                                    <img src="https://img.icons8.com/color/48/000000/resume.png" />
                                </Col>
                                <Col md="2" className="align-items-center">
                                    <img src="https://img.icons8.com/color/48/000000/play.png" />
                                </Col>
                                <Col md="2" className="align-items-center">
                                    <img src="https://img.icons8.com/color/48/000000/task-completed.png" />
                                </Col>
                                <Col md="2" className="align-items-center">
                                    <img src="https://img.icons8.com/color/48/000000/play.png" />
                                </Col>
                                <Col md="2" className="align-items-center">
                                    <img src="https://img.icons8.com/color/48/000000/contract-job.png" />
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Row>
                                <FormGroup check className="checkbox">
                                    <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" onChange={this.modalA_onChange}/>
                                    <Label check className="form-check-label" htmlFor="checkbox1">Don't show this again </Label>
                                </FormGroup>
                                <Button color="danger" onClick={this.toggleModal_Working}>Ok</Button>
                                {/* <Button color="secondary" onClick={this.toggleModal_Working}>Cancel</Button> */}
                            </Row>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }
        else if (this.state.ModalId === "B") {
            return (
                <div>

                </div>
            )
        }
        else{
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default GlobalModals;