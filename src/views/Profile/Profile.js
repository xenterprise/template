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
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
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
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
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

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
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
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
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
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
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
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggleOld = this.toggleOld.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      activeTab: '1',
      profile_user: localStorage.getItem('user')
    };
  }

  toggleOld() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentDidMount(){
    console.log('Param ', this.props.match.params.id)
    this.setState({
      profile_user: this.props.match.params.id
    })
  }
  render() {

    return (
      <div className="animated fadeIn">

<Row>
  <h1>
  {this.state.profile_user}
  </h1>
  {}
</Row>
        <Row>
          <Col md="9">
          <Card>
          <CardBody>
            <Row>
              <Col md="5">
                <div align="left">
                  <h1>Muhammad Mobeen Younis</h1>
                  <h3>Electrical Engineer</h3>
                  <h5>Willing to Takeon and Tackle Challenges</h5>
                </div>

              </Col>
              <Col md="2">
                <div align="center">
                  <img src={'assets/img/avatars/9.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </div>
              </Col>
              <Col md="5">
                <div align="right">
                  <h5>mobeenyounis@gmail.com</h5>
                  <h5>+92 335 9123993</h5>
                  <h5>www.hosterlink.com</h5>
                  <h5>@mmobeenyounis</h5>
                  <Button className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-facebook"></i></Button>
                  <Button className="btn-twitter btn-brand icon mr-1 mb-1"><i className="fa fa-twitter"></i></Button>
                  <Button className="btn-linkedin btn-brand icon mr-1 mb-1"><i className="fa fa-linkedin"></i></Button>
                  <Button className="btn-github btn-brand icon mr-1 mb-1"><i className="fa fa-github"></i></Button>
                  <Button href="https://www.facebook.com" target="_blank" className="btn-stack-overflow btn-brand icon mr-1 mb-1"><i className="fa fa-stack-overflow"></i></Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col>
            <Card>

              <CardHeader>
                <h3>Skills</h3>
              </CardHeader>
              <CardBody >

                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>React JS</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Node JS</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>C/C++</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>C# .Net</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Embedded C</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>FPGA Verilog</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Business Intelligence</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Book Authoring</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Visual Studio</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>HTML/CSS</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>Python</span></Button>
                <Button size="lg" className="btn-facebook btn-brand text mr-1 mb-1"><span>PHP</span></Button>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Card>
          <CardHeader>
            <h3>Work Experience & Projects</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="6" md="4">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>CARE (Pvt) Ltd.</h4>
                    <h5>Design Engineer</h5>
                    <h6>September 2015-February 2016</h6>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" md="4">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>CARE (pvt) Ltd.</h4>
                    <h5>Design Engineer</h5>
                    <h6>September 2015-February 2016</h6>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" md="4">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>CARE (pvt) Ltd.</h4>
                    <h5>Design Engineer</h5>
                    <h6>September 2015-February 2016</h6>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" md="4">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>CARE (pvt) Ltd.</h4>
                    <h5>Design Engineer</h5>
                    <h6>September 2015-February 2016</h6>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" md="4">
                <Card className="border-primary">
                  <CardHeader>
                    <h4>CARE (pvt) Ltd.</h4>
                    <h5>Design Engineer</h5>
                    <h6>September 2015-February 2016</h6>
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>





        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Education</h3>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem disabled tag="a" href="#"><h4>BS in Electrical Engineering (CE)</h4><h5>CASE, Center for Advanced Studies in
Engineering, Islamabad, Pakistan</h5></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Organizations</h3>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem disabled tag="a" href="#"><h5>SKYELECTRIC (pvt) Ltd Islamabad, Pakistan</h5></ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#"><h5>Center for Advanced Research in Engineering (CARE)</h5></ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#"><h5>Center for Advanced Studies in Engineering (CASE)</h5></ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#"><h5>Marvelous Technologies</h5></ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#"><h5>Step Robotics</h5></ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#"><h5>HosterLink Web Services</h5></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Certifications</h3>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem disabled tag="a" href="#"><h5>WISSEN Certification</h5><h6>Internet Search Methodologies and Search Engine Optimization</h6></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Publications</h3>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem disabled tag="a" href="#"><h5>IEEE Research Publication</h5><h6>“Simulation and Implementation of Solar Power Battery Charger using Perturb &
Observe Algorithm”</h6></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Looking for opportunities </h3>
              </CardHeader>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th><h4>Services</h4></th>
                      <th className="text-center"><h4>Project Based Jobs</h4></th>
                      <th className="text-center"><h4>Part Time Jobs</h4></th>
                      <th className="text-center"><h4>Full Time Jobs</h4></th>
                      <th className="text-center"><h4>Partnerships</h4></th>
                      <th className="text-center"><h4>Consultation</h4></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div><h5>Web Development</h5></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div><h5>Software Development</h5></div>
                        <div className="small text-muted">

                          <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div><h5>Trading & Investments</h5></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div><h5>Mentorship</h5></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div><h5>Web Hosting</h5></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div><h5>Real Estate</h5></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                      </div>
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/yes_.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                      <td className="text-center">
                        <img src={'assets/img/vectors/blank.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
    );
  }
}

export default Profile;
