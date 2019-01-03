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
  InputGroupAddon,
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
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


class Idata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 0
    }
  }
  componentDidMount() {
    var dbref = fire.database().ref(`Counts/users`)
    dbref.on("value", (snapshot) => {
      console.log('Snapshot', snapshot.numChildren())
      let snap = snapshot.val()
      this.setState({
        totalUsers: snapshot.numChildren()
      }, () => {
        // let aj = this.ObjectSize(this.state.user)
      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });

    console.log("MY CURR URL: ", window.location.hash)

  }

  render() {
    return (
      <div>
        <Row>
          <Col md="2">
            <LeftMenu />
          </Col>

          <Col md="7">
            <Row>
              <Col xs="12" sm="6" lg="4">
                <Card className="text-white bg-dark">
                  <CardBody className="pb-0">
                    
                    <div className="text-value">{this.state.totalUsers}</div>
                    <div>Total Users</div>
                  </CardBody>
                  <div className="chart-wrapper" style={{ height: '70px' }}>
                    <Line data={cardChartData3} options={cardChartOpts3} height={70} />
                  </div>
                </Card>
              </Col>

              </Row>
       
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

export default Idata;
