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
  InputGroupAddon,
  Collapse
} from 'reactstrap';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import classnames from 'classnames';
import Widget03 from '../Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import fire from '../../config/Fire'

function CompJob_Posted(props) {
  return (
    <div>
      {
        Object.keys(props.this.state.user_jobs).map((item, i) => (
          <div key={i}>
            <CardHeader>
              {props.this.state.user_jobs[item].v.titl} at {props.this.state.user_jobs[item].v.jcom}
              <div className="card-header-actions">
                <a className="card-header-action btn btn-setting" onClick={props.this.editJob.bind(props.this, props.this.state.user_jobs[item].k)}><i className="icon-settings"></i></a>
                {/* <a className="card-header-action btn btn-minimize" data-target="#collapseExample" ><i className="icon-arrow-up"></i></a> */}
                <a className="card-header-action btn btn-close" onClick={props.this.DeleteChildOf_Jobs.bind(props.this, props.this.state.user_jobs[item].k)}><i className="icon-close"></i></a>
              </div>
            </CardHeader>
          </div>
        ))
      }
    </div>
  )
} 




function CompJob_Applied(props) {
  return (
    <div>
      {
        Object.keys(props.this.state.app_user_jobs).map((item, i) => (
          <div key={i}>
            <CardHeader>
              {props.this.state.app_user_jobs[item].v.titl} at {props.this.state.app_user_jobs[item].v.jcom}
              {/* <div className="card-header-actions"> */}
                {/* <a className="card-header-action btn btn-setting" onClick={props.this.editJob.bind(props.this, props.this.state.app_user_jobs[item].k)}><i className="icon-settings"></i></a> */}
                {/* <a className="card-header-action btn btn-minimize" data-target="#collapseExample" ><i className="icon-arrow-up"></i></a> */}
                {/* <a className="card-header-action btn btn-close" onClick={props.this.DeleteChildOf_Jobs.bind(props.this, props.this.state.app_user_jobs[item].k)}><i className="icon-close"></i></a> */}
              {/* </div> */}
            </CardHeader>
          </div>
        ))
      }
    </div>
  )
}

function CompJob_Home(props) {
  return (
    <div>

      <Row>
        <Col md="9">
        </Col>
        <Col md="3">
          <Button type="submit" align="right" size="md" color="primary" onClick={props.this.createJob}><i className="fa fa-dot-circle-o"></i> Post A Job</Button>
        </Col>
      </Row>
      <h5>Your Job Section</h5>
      <Card>
        <CardHeader id="headingOne">
          <Button block color="link" className="text-left m-0 p-0" onClick={() => props.this.toggleAccordionPosted(0)} aria-expanded={props.this.state.accordionPosted[0]} aria-controls="collapseOne">
            <h5 className="m-0 p-0">Your Applied Jobs</h5>
          </Button>
        </CardHeader>
        <Collapse isOpen={props.this.state.accordionPosted[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
          <CardBody>
          <CompJob_Applied this={props.this} />
          </CardBody>
        </Collapse>
      </Card>


      <Card>
        <CardHeader id="headingTwo">
          <Button block color="link" className="text-left m-0 p-0" onClick={() => props.this.toggleAccordionPosted(1)} aria-expanded={props.this.state.accordionPosted[1]} aria-controls="collapseTwo">
            <h5 className="m-0 p-0">Your Posted Jobs</h5>
          </Button>
        </CardHeader>
        <Collapse isOpen={props.this.state.accordionPosted[1]} data-parent="#accordion" id="collapseTwo">
          <CardBody>
            <CompJob_Posted this={props.this} />
          </CardBody>
        </Collapse>
      </Card>


    </div>
  )
}


function CompJob_Form(props) {
  return (
    <div>
      <h5>Post a New Job</h5>
      <Row>
        <Col md="2" >
          <Label htmlFor="text-input">Job Title</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="titl" placeholder="Title of the Job Position" value={props.this.state.job.titl} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Company Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="jcom" placeholder="Company Name Here" value={props.this.state.job.jcom} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Experience Required</Label>
        </Col>
        <Col md="4">
          <Dropdown isOpen={props.this.state.DropDownOpen_Experience} toggle={props.this.DropDownToggle_Experience}>
            <DropdownToggle caret>
              {props.this.state.DropDownText_Experience}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem name="fresh" onClick={props.this.DropDownChanged_Experience} value="Fresh Eligible">Fresh Eligible</DropdownItem>
              <DropdownItem name="1y" onClick={props.this.DropDownChanged_Experience} value="1 year or More">1 year or More</DropdownItem>
              <DropdownItem name="2y" onClick={props.this.DropDownChanged_Experience} value="2 years or More">2 years or More</DropdownItem>
              <DropdownItem name="3y" onClick={props.this.DropDownChanged_Experience} value="3 years or More">3 years or More</DropdownItem>
              <DropdownItem name="5y" onClick={props.this.DropDownChanged_Experience} value="5 years or More">5 years or More</DropdownItem>
              <DropdownItem name="10y" onClick={props.this.DropDownChanged_Experience} value="10 years or More">10 years or More</DropdownItem>
              <DropdownItem name="15y" onClick={props.this.DropDownChanged_Experience} value="15 years or More">15 years or More</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>

        <Col md="2">
          <Label htmlFor="text-input">Qualification</Label>
        </Col>
        <Col md="4">
          <Dropdown isOpen={props.this.state.DropDownOpen_Qualification} toggle={props.this.DropDownToggle_Qualification}>
            <DropdownToggle caret>
              {props.this.state.DropDownText_Qualification}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem name="no" onClick={props.this.DropDownChanged_Qualification} value="No Degree Requirement">No Degree Requirement</DropdownItem>
              <DropdownItem name="bs" onClick={props.this.DropDownChanged_Qualification} value="Bachelors">Bachelors</DropdownItem>
              <DropdownItem name="ms" onClick={props.this.DropDownChanged_Qualification} value="Masters">Masters</DropdownItem>
              <DropdownItem name="pd" onClick={props.this.DropDownChanged_Qualification} value="Ph.D">Ph.D</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Required Skills</Label>
        </Col>
        <Col md="9">
          <div>
            {
              Object.keys(props.this.state.job.skls).map((item, i) => (
                <Button
                  key={i}
                  size="sm"
                  className="btn-facebook btn-brand text mr-1 mb-1">
                  {/* <span>{item}</span><a className="card-header-action btn btn-close" >  <i className="icon-close" onClick={props.this.delChildOfuser.bind(props.this, "skills", item)}></i></a> */}
                  <span>{props.this.state.job.skls[item].s}</span><a className="card-header-action btn btn-close" >  <i className="icon-close" onClick={props.this.DeleteChildOf_Skills.bind(props.this, item)}></i></a>
                </Button>
              ))
            }

            {/* <Row>
            <Col xs="12" md="9"> */}
            <form ref={input => props.this.addSkillForm = input} onSubmit={(e) => { props.this.addSkill(e) }}>
              <Input type="text" id="text-input" name="new_skill" placeholder="Enter New Skills Here & Press Enter" onChange={props.this.TextInputChanged_lowercase} />
            </form>
            {/* </Col>
          </Row> */}

          </div>
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Salary Offered</Label>
        </Col>
        <Col md="1">
          <Dropdown isOpen={props.this.state.DropDownOpen_SalaryCurrency} toggle={props.this.DropDownToggle_SalaryCurrency}>
            <DropdownToggle caret>
              {props.this.state.DropDownText_SalaryCurrency}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem name="PKR" onClick={props.this.DropDownChanged_SalaryCurrency} value="PKR">PKR</DropdownItem>
              <DropdownItem name="USD" onClick={props.this.DropDownChanged_SalaryCurrency} value="USD">USD</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col md="2">
          <Input type="text" name="slry" placeholder="Salary Offered" value={props.this.state.job.slry} onChange={props.this.TextInputChanged} />
        </Col>

        <Col md="2">
          <Label htmlFor="text-input">Appointment Location</Label>
        </Col>
        <Col md="4">
          <Input type="text" name="jloc" placeholder="Appointment Location City/ Country" value={props.this.state.job.jloc} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Contact Numbers</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="ctct" placeholder="Optional Contact Numbers for Job Communication" value={props.this.state.job.ctct} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>


      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Application Deadline</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="date" name="apdl" placeholder="Last date to apply to this job" value={props.this.state.job.apdl} onChange={props.this.TextInputChanged_applyDeadline} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Responsibilities</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" name="resp" placeholder="Mention in detail the responsibilities required" value={props.this.state.job.resp} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Age Limit</Label>
        </Col>
        <Col md="4">
          <Input type="text" name="agel" placeholder="Enter the Age Limit" value={props.this.state.job.agel} onChange={props.this.TextInputChanged} />
        </Col>

        <Col md="2">
          <Label htmlFor="text-input">Job Timings</Label>
        </Col>
        <Col md="4">
          <Input type="text" name="tmgs" placeholder="Mention Timings, Regular 9-5 or Shifts based" value={props.this.state.job.tmgs} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Other Requirements</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" name="oreq" placeholder="Mention in detail any other requirements, like, tools used etc" value={props.this.state.job.oreq} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Probation</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" name="pbtn" placeholder="Duration of Initial Probation" value={props.this.state.job.pbtn} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <Label htmlFor="text-input">Other Details (Optional)</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="textarea" name="odet" placeholder="Mention any other details like Interview date etc" value={props.this.state.job.odet} onChange={props.this.TextInputChanged} />
        </Col>
      </Row>

      {/* <Input type="date" id="date-input" name="date-input" placeholder="date" /> */}
      <Row>
        <Col md="2">
          <Button type="submit" align="right" size="md" color="primary" onClick={props.this.Submit_Job}><i className="fa fa-dot-circle-o"></i> Save </Button>
        </Col>
        <Col md="2">
          <Button type="submit" align="right" size="md" color="dark" onClick={props.this.CancelJob}><i className="fa fa-dot-circle-o"></i> Cancel</Button>
        </Col>
      </Row>
    </div>
  );
}


class Jobpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {
        user: "", //User
        titl: "", //Job Title
        jcom: "", //Company Name
        jexp: "fresh",
        jdeg: "bs",
        skls: [],
        slry: "",
        crcy: "PKR",
        jloc: "",
        ctct: "",
        apdl: "",
        resp: "",
        agel: 0,
        oreq: "",
        tmgs: "",
        pbtn: "",
        odet: "",
        date: ""
      },
      proj: {
        user: "", //User
        titl: "", //Job Title
        pdet: "",
        ctct: "",
        amnt: "",
      },

      new_skill: "",
      DropDownOpen_Experience: false,
      DropDownText_Experience: "Fresh Eligible",
      DropDownOpen_Qualification: false,
      DropDownText_Qualification: "Bachelors",
      DropDownOpen_SalaryCurrency: false,
      DropDownText_SalaryCurrency: "PKR",
      job_view: "HOME",
      accordionPosted: [false, false, false],
      user_jobs: [],
      app_user_jobs:[],
      ji: "",
      jedit: false
    };

    this.TextInputChanged = this.TextInputChanged.bind(this)
    this.TextInputChanged_lowercase = this.TextInputChanged_lowercase.bind(this)
    this.TextInputChanged_applyDeadline = this.TextInputChanged_applyDeadline.bind(this)

    this.Submit_Job = this.Submit_Job.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.DeleteChildOf_Skills = this.DeleteChildOf_Skills.bind(this)
    this.DeleteChildOf_Jobs = this.DeleteChildOf_Jobs.bind(this)

    this.DropDownToggle_Experience = this.DropDownToggle_Experience.bind(this);
    this.DropDownChanged_Experience = this.DropDownChanged_Experience.bind(this);
    this.DropDownToggle_Qualification = this.DropDownToggle_Qualification.bind(this);
    this.DropDownChanged_Qualification = this.DropDownChanged_Qualification.bind(this);
    this.DropDownToggle_SalaryCurrency = this.DropDownToggle_SalaryCurrency.bind(this);
    this.DropDownChanged_SalaryCurrency = this.DropDownChanged_SalaryCurrency.bind(this);
    // this.DropDownSet_EditJob = this.DropDownSet_EditJob.bind(this)

    this.ChangeState_FORM = this.ChangeState_FORM.bind(this);
    this.ChangeState_HOME = this.ChangeState_HOME.bind(this);

    this.ReadUserJobs = this.ReadUserJobs.bind(this);
    this.toggleAccordionPosted = this.toggleAccordionPosted.bind(this);

    this.editJob = this.editJob.bind(this)
    this.createJob = this.createJob.bind(this)
    this.CancelJob = this.CancelJob.bind(this)
    this.Initialize = this.Initialize.bind(this)
  }

  componentDidMount() {
    // console.log('Param ', this.props.match.params.id)
    // this.setState({
    //   profile_user: this.props.match.params.id
    // })


    // var dbref = fire.database().ref(`users`)
    // dbref.orderByChild("Email").on("child_added", function(snapshot){
    //   console.log('Search Log', snapshot.key);
    // })

    //Read Current Jobs of the User

    this.ReadUserJobs()


    this.Initialize()


  }

  Initialize() {



    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    var defaultJob = {
      user: localStorage.getItem('user'), //User
      titl: "", //Job Title
      jcom: "", //Company Name
      jexp: "fresh",
      jdeg: "no",
      skls: [],
      slry: "",
      crcy: "PKR",
      jloc: "",
      ctct: "",
      apdl: "",
      resp: "",
      agel: 0,
      oreq: "",
      tmgs: "",
      pbtn: "",
      odet: "",
      date: today
    }

    this.setState({
      job: {
        // ...this.state.job, ...{ user: localStorage.getItem('user'), date: today }
        ...this.state.job, ...defaultJob
      },
      DropDownText_SalaryCurrency: "PKR",
      DropDownText_Experience: "Fresh Eligible",
      DropDownText_Qualification: "No Degree Requirement",
      ji: "",
      jedit: false
    })

    console.log("Current State:", this.state)
  }



  ReadUserJobs() {
    const userJobs = fire.database().ref(`users/${localStorage.getItem('user')}/jobs`)
    const jobDetails = fire.database().ref(`jobs`)

    userJobs.on('child_added', snap => {
      let jobRef = jobDetails.child(snap.key)
      jobRef.once('value').then(jobSnap => {
        // console.log("Job Details", jobSnap.val())
        let temp = Object.assign({}, this.state)
        temp.user_jobs.push({ k: jobSnap.key, v: jobSnap.val() })
        this.setState(temp)
      })
    })

    const app_userJobs = fire.database().ref(`users/${localStorage.getItem('user')}/app_jobs`)
    const app_jobDetails = fire.database().ref(`jobs`)

    app_userJobs.on('child_added', snap => {
      let app_jobRef = app_jobDetails.child(snap.key)
      app_jobRef.once('value').then(app_jobSnap => {
        // console.log("Job Details", jobSnap.val())
        let app_temp = Object.assign({}, this.state)
        app_temp.app_user_jobs.push({ k: app_jobSnap.key, v: app_jobSnap.val() })
        this.setState(app_temp)
      })
    })
  }

  TextInputChanged(e) {
    let temp = Object.assign({}, this.state.job)
    temp[e.target.name] = e.target.value
    this.setState({ job: temp })
    console.log("Current State:", this.state)
  }

  DropDownToggle_Experience() {
    this.setState(prevState => ({
      DropDownOpen_Experience: !prevState.DropDownOpen_Experience
    }));
  }

  DropDownChanged_Experience(e) {

    this.setState({
      DropDownText_Experience: e.target.value,
      job: {
        ...this.state.job, ...{ jexp: e.target.name }
      }
    })
  }

  DropDownToggle_Qualification() {
    this.setState(prevState => ({
      DropDownOpen_Qualification: !prevState.DropDownOpen_Qualification
    }));
  }

  DropDownChanged_Qualification(e) {

    this.setState({
      DropDownText_Qualification: e.target.value,
      job: {
        ...this.state.job, ...{ jdeg: e.target.name }
      }
    })
  }

  DropDownToggle_SalaryCurrency() {
    this.setState(prevState => ({
      DropDownOpen_SalaryCurrency: !prevState.DropDownOpen_SalaryCurrency
    }));
  }

  DropDownChanged_SalaryCurrency(e) {

    this.setState({
      DropDownText_SalaryCurrency: e.target.value,
      job: {
        ...this.state.job, ...{ crcy: e.target.name }
      }
    })
  }

  // DropDownSet_EditJob(snap) {




  // }

  addSkill(e) {
    e.preventDefault();
    let temp = Object.assign({}, this.state)
    temp.job.skls.push({ s: this.state.new_skill })
    this.setState(temp)
    this.addSkillForm.reset()
  }

  TextInputChanged_lowercase(e) {
    let temp = Object.assign({}, this.state)
    temp[e.target.name] = e.target.value.toLowerCase();
    this.setState(temp)
  }

  TextInputChanged_applyDeadline(e) {


    //Update apdl in State
    let temp = Object.assign({}, this.state)
    temp.job[e.target.name] = e.target.value
    this.setState(temp)
  }

  DeleteChildOf_Skills(item) {
    console.log('DelItem Called', item);
    let temp = Object.assign({}, this.state)
    temp.job.skls.splice(item, 1)
    this.setState(temp)
  }

  DeleteChildOf_Jobs(key) {
    // Delete Child of Job

    console.log("NOW VALUE OF KEY IS ", key)
    const userJobs = fire.database().ref(`users/${localStorage.getItem('user')}/jobs`)
    const jobDetails = fire.database().ref(`jobs`)
    let jobRef = jobDetails.child(key)

    jobRef.once('value').then(jobSnap => {
      console.log("Delete Job Key", key)
      console.log("Delete Job Details", jobSnap.val())
      let temp = Object.assign({}, this.state)
      console.log("NOW VALUE OF temp is ", temp)
      temp.job = jobSnap.val()
      this.setState({ ...this.state, temp })
    })

    // console.log("NOW VALUE OF temp is ", temp)
    for (var i = 0; i < this.state.job.skls.length; i++) {
      var dbref = fire.database().ref(`skills_jobs/${this.state.job.skls[i].s}`)
      dbref.child(key).set(false)
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
    }

    userJobs.child(key).remove()
    jobDetails.child(key).remove()

    console.log("Delete State", this.state)

    for (var i = 0; i < this.state.user_jobs.length; i++) {

      if (this.state.user_jobs[i].k === key) {
        let temp = Object.assign({}, this.state)
        console.log("Index Count ", i)
        temp.user_jobs.splice(i, 1)
        this.setState({ ...this.state, temp })
      }
    }
  }

  ChangeState_FORM() {
    this.setState({ job_view: "FORM" })
  }

  ChangeState_HOME() {
    this.setState({ job_view: "HOME" })
  }




  Submit_Job(e) {
    e.preventDefault();



    //Saving Job
    var dbref = fire.database().ref(`jobs`);
    var key = ""

    //Get Key Depending upon New Job or Edit Job
    if (this.state.jedit === true) {
      key = this.state.ji
    }
    else {
      key = dbref.push().getKey()
    }

    dbref.child(key).set(this.state.job)
      .then(() => {
        console.log("Posted")
      })
      .catch(error => {
        console.log(error)
      });

    console.log("Key", key)

    //Saving Job Id in User
    if (this.state.jedit === false) {
      dbref = fire.database().ref(`users/${localStorage.getItem('user')}/jobs`)
      dbref.child(key).set(true)
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
    }


    //Saving Job Id in skills_jobs 
    for (var i = 0; i < this.state.job.skls.length; i++) {
      dbref = fire.database().ref(`skills_jobs/${this.state.job.skls[i].s}`)
      dbref.child(key).set(true)
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        });
    }
    this.setState({ job_view: "DONE" })
  }


  toggleAccordionPosted(tab) {

    const prevState = this.state.accordionPosted;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    this.setState({
      accordionPosted: state,
    });
  }

  createJob() {
    this.Initialize()
    this.ChangeState_FORM()
  }

  CancelJob() {
    this.Initialize()
    this.ChangeState_HOME()
  }

  editJob(jobId) {
    var jobref = fire.database().ref(`jobs/${jobId}`)
    jobref.once("value", (snapshot) => {
      console.log('Snapshot', snapshot.val())
      let snap = snapshot.val()

      //Set DropDown Texts:
      var crcy
      var jexp
      var jdeg

      if (snap.crcy === "PKR") {
        crcy = "PKR"
      }
      else {
        crcy = "USD"
      }

      if (snap.jexp === "fresh") {
        jexp = "Fresh Eligible"
      }
      else if (snap.jexp === "1y") {
        jexp = "1 year or More"
      }
      else if (snap.jexp === "2y") {
        jexp = "2 year or More"
      }
      else if (snap.jexp === "3y") {
        jexp = "3 year or More"
      }
      else if (snap.jexp === "5y") {
        jexp = "5 year or More"
      }
      else if (snap.jexp === "10y") {
        jexp = "10 year or More"
      }
      else if (snap.jexp === "15y") {
        jexp = "15 year or More"
      }


      if (snap.jdeg === "no") {
        jdeg = "No Degree Requirement"
      }
      else if (snap.jdeg === "bs") {
        jdeg = "Bachelors"
      }
      else if (snap.jdeg === "ms") {
        jdeg = "Masters"
      }
      else if (snap.jdeg === "pd") {
        jdeg = "Ph.D"
      }

      /////////////////////////////////////////////////////

      this.setState({
        // user: {
        //   email: snap.email,
        //   Personal: {
        //     ...snap.Personal
        //   },TextTrackCue
        //   skills: { ...snap.skills }
        // }
        job: {
          ...this.state.job, ...snap
          //Dont Overwrite the user Object, Just update the new Values in Snap
        },
        ji: jobId,
        jedit: true,
        DropDownText_SalaryCurrency: crcy,
        DropDownText_Experience: jexp,
        DropDownText_Qualification: jdeg

      })
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });


    this.ChangeState_FORM()
    // this.DropDownSet_EditJob()
  }


  render() {

    return (
      // className="animated fadeIn"
      <div >

        <Row>
          <Col md="2">

            <Button outline color="primary" size="lg" block href="#/basel/profile">Profile</Button>
            <Button outline color="primary" size="lg" block href="#/basel/jobpost">Job Section</Button>
            <Button outline color="primary" size="lg" block href="#/basel/aform">Settings</Button>

          </Col>

          <Col md="7">
            <Card>
              <CardBody>
                {this.state.job_view === "FORM" ? <CompJob_Form this={this} /> : <CompJob_Home this={this} />}
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
    );
  }
}

export default Jobpost;
