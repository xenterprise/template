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

import GlobalModals from '../Alerts/modals'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
const brandDark = getStyle('--dark')


// Card Chart 3
const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [65, 81, 80, 45, 34, 12, 40],
        },
    ],
};

const cardChartOpts3 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        line: {
            borderWidth: 2,
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            // totalApplied : 0,
            // totalPosted : 0,

        }
        //   this.ObjectSize = this.ObjectSize.bind(this)
    }

    // ObjectSize(obj) {
    //     var size = 0, key;
    //     for (key in obj) {
    //       if (obj.hasOwnProperty(key)) size++;
    //     }
    //     return size;
    //   };

    componentDidMount() {
        // var dbref = fire.database().ref(`users/${fire.auth().currentUser.uid}`)
        // dbref.on("value", (snapshot) => {
        //   console.log('Snapshot', snapshot.val())
        //   let snap = snapshot.val()
        //   this.setState({
        //     user: {
        //       ...this.state.user, ...snap
        //     }
        //   },()=>{
        //     let aj = this.ObjectSize(this.state.user)
        //   })
        // }, (errorObject) => {
        //   console.log("The read failed: " + errorObject.code);
        // });

        // console.log("MY CURR URL: ", window.location.hash)

    }


    render() {
        // return (
        //     <div>
        //         <Row>
        //             <Col md="2">
        //                 <LeftMenu />
        //             </Col>

        //             <Col md="7">
        //                 <GlobalModals ModalId="A" />
        //                 <Row>

        //                     <Col xs="12" sm="6" lg="4">
        //                         <Card className="text-white bg-danger">
        //                             <CardBody className="pb-0">
        //                                 {/* <ButtonGroup className="float-right">
        //           <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
        //             <DropdownToggle className="p-0" color="transparent">
        //               <i className="icon-location-pin"></i>
        //             </DropdownToggle>
        //             <DropdownMenu right>
        //               <DropdownItem>Action</DropdownItem>
        //               <DropdownItem>Another action</DropdownItem>
        //               <DropdownItem>Something else here</DropdownItem>
        //             </DropdownMenu>
        //           </Dropdown>
        //         </ButtonGroup> */}
        //                                 <div className="text-value">0</div>
        //                                 <div>Applied Jobs</div>
        //                             </CardBody>
        //                             <div className="chart-wrapper" style={{ height: '70px' }}>
        //                                 <Line data={cardChartData3} options={cardChartOpts3} height={70} />
        //                             </div>
        //                         </Card>
        //                     </Col>

        //                     <Col xs="12" sm="6" lg="4">
        //                         <Card className="text-white bg-dark">
        //                             <CardBody className="pb-0">
        //                                 {/* <ButtonGroup className="float-right">
        //           <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
        //             <DropdownToggle caret className="p-0" color="transparent">
        //               <i className="icon-settings"></i>
        //             </DropdownToggle>
        //             <DropdownMenu right>
        //               <DropdownItem>Action</DropdownItem>
        //               <DropdownItem>Another action</DropdownItem>
        //               <DropdownItem>Something else here</DropdownItem>
        //             </DropdownMenu>
        //           </Dropdown>
        //         </ButtonGroup> */}
        //                                 <div className="text-value">0</div>
        //                                 <div>Posted Jobs</div>
        //                             </CardBody>
        //                             <div className="chart-wrapper" style={{ height: '70px' }}>
        //                                 <Line data={cardChartData3} options={cardChartOpts3} height={70} />
        //                             </div>
        //                         </Card>
        //                     </Col>

        //                     <Col xs="12" sm="6" lg="4">
        //                         <Card className="text-white bg-primary">
        //                             <CardBody className="pb-0">
        //                                 {/* <ButtonGroup className="float-right">
        //           <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
        //             <DropdownToggle caret className="p-0" color="transparent">
        //               <i className="icon-settings"></i>
        //             </DropdownToggle>
        //             <DropdownMenu right>
        //               <DropdownItem>Action</DropdownItem>
        //               <DropdownItem>Another action</DropdownItem>
        //               <DropdownItem>Something else here</DropdownItem>
        //             </DropdownMenu>
        //           </Dropdown>
        //         </ButtonGroup> */}
        //                                 <div className="text-value">0</div>
        //                                 <div>Profile Visits</div>
        //                             </CardBody>
        //                             <div className="chart-wrapper" style={{ height: '70px' }}>
        //                                 <Line data={cardChartData3} options={cardChartOpts3} height={70} />
        //                             </div>
        //                         </Card>
        //                     </Col>


        //                 </Row>
        //             </Col>



        //             <Col md="3">
        //                 <Card>
        //                     <CardBody>
        //                         <h4><i className="fa fa-line-chart"></i> Latest Trends</h4>
        //                     </CardBody>
        //                 </Card>
        //             </Col>

        //         </Row>

        //     </div>
        // )
        return (
            <div>
                <Row>
                    <Col md="2">
                        <LeftMenu />
                    </Col>

                    <Col md="7">
                        <GlobalModals ModalId="A" />
                        <Card>
                            <CardHeader>
                                
                                    <h4>
                                        How it Works?
                            </h4>
                               
                            </CardHeader>
                            <CardBody>
                               
                                    <h6>
                                    <img src="https://img.icons8.com/color/48/000000/resume.png" /> First you need to complete your Resume details by going to "Edit Profile"
                            </h6>
                               
                                    <h6>
                                    <img src="https://img.icons8.com/color/48/000000/task-completed.png" /> After Resume completion, You can view and finalize your Resume by going to "My Resume"
                            </h6>
                               
                                    <h6>
                                    <img src="https://img.icons8.com/color/48/000000/contract-job.png" /> Explore jobs & Apply to your desired job with a click, Your CV will be sent to the employer
                            </h6>
                               
                            </CardBody>
                        </Card>





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

export default Home;
