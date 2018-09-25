import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import './style.css';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Row
} from 'reactstrap';
import Form from "react-jsonschema-form";
import axios from 'axios';
// import { auth, db } from '../../firebase';


const log = (type) => console.log.bind(console, type);

const defaultData={
  Personal:{
    Name: '',
    Email:''
  }
};



const SubmitRoutine = ({ formData }) => {
  console.log("Data submitted:", formData)
  // axios.post('http://localhost:3000/adduser', formData)
  axios.post('http://localhost:3000/updateuser',formData)
  console.log("Hello", formData)
  
};

const OnChangeRoutine = ({ formData }) => {
  // console.log("Data :", formData)
  
};

const ErrorRoutine = (errors) => {
  console.log(errors.length, "Errors")
};

const schemaCore = {
  type: "object",
  properties: {
    Personal: {
      type: "object",
      title: "Personal Details",
      required: ["Name"],
      properties: {
        Name: { type: "string" },
        Title: { type: "string" },
        Tagline: { type: "string" },
        Email: { type: "string" },
        Cell: { type: "string" },
        Website: { type: "string" },
        Skills: { type: "string" }
      }
    },
    Social: {
      type: "array",
      title: "Social Links",
      items: {
        type: "object",
        properties: {
          Platform: { type: "number", enum: [1, 2, 3], enumNames: ["Facebook", "Twitter", "LinkedIn"] },
          Link: { type: "string" },
        }
      }
    },
    Work: {
      type: "array",
      title: "Work Experience & Projects",
      items: {
        type: "object",
        properties: {
          Company: { type: "string", title: "Company/Organization" },
          Position: { type: "string" },
          Duration: { type: "string" },
          Details: { type: "string" },

        }
      }
    },
    Education: {
      type: "array",
      title: "Education",
      items: {
        type: "object",
        properties: {
          Degree: { type: "string" },
          Institute: { type: "string" },
          Status: { type: "boolean", enum: [true, false], enumNames: ["Completed", "Ongoing"] }

        }
      }
    },
    Organizations: {
      type: "array",
      title: "Organizations",
      items: {
        type: "object",
        properties: {
          Org: { type: "string", title: "Name" }
        }
      }
    },
    Certifications: {
      type: "array",
      title: "Certifications",
      items: {
        type: "object",
        properties: {
          Cert: { type: "string", title: "Title" },
          Institute: { type: "string", title: "Institute" }
        }
      }
    },
    Publications: {
      type: "array",
      title: "Publications",
      items: {
        type: "object",
        properties: {
          Pub: { type: "string", title: "Title" },
          Publisher: { type: "string", title: "Publisher" }
        }
      }
    },
    Services: {
      type: "array",
      title: "Services you are willing to offer",
      items: {
        type: "object",
        properties: {
          Service: { type: "string", title: "Service Name" },
          Availability: {
            type: "array",
            minItems: 2,
            title: "You can offer this as ",
            items: {
              type: "string",
              enum: ["Project Based", "Part Time Job", "Full Time Job", "Partnership", "Consultation"],
            },
            uniqueItems: true
          }
        }
      }
    },
  }
}

const uiSchemaCore = {
  Personal: {
    Name: { "ui:widget": "text", classNames: "col-8 " },
    Title: { "ui:widget": "text", classNames: "col-8" },
    Tagline: { "ui:widget": "text", classNames: "col-8" },
    Email: { "ui:widget": "text", classNames: "col-8" },
    Cell: { "ui:widget": "text", classNames: "col-8" },
    Website: { "ui:widget": "text", classNames: "col-8" },
    Skills: { "ui:widget": "textarea", classNames: "col-8" }
  },
  Social: {
    items: {
      Platform: { "ui:widget": "select"},
      Link: { "ui:widget": "text", }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Work: {
    items: {
      Company: { "ui:widget": "text" },
      Position: { "ui:widget": "text" },
      Duration: { "ui:widget": "text" },
      Details: { "ui:widget": "textarea" }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Education: {
    items: {
      Degree: { "ui:widget": "text" },
      Institute: { "ui:widget": "text" },
      Status: { "ui:widget": "radio" }

    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Organizations: {
    items: {
      Org: { "ui:widget": "text" }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Certifications: {
    items: {
      Cert: { "ui:widget": "text" },
      Institute: { "ui:widget": "text" }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Publications: {
    items: {
      Pub: { "ui:widget": "text" },
      Publisher: { "ui:widget": "text" }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
  Services: {
    items: {
      Service: { "ui:widget": "text" },
      Availability: { "ui:widget": "checkboxes" }
    },
    "ui:options": {
      orderable: false,
      removable: true,
      inline: false
    }
  },
} 

// InsertCV=()=>{
//   console.log("Insert Method is Called");
//   axios.get('https://hosterlink-first.herokuapp.com/welcome').then((res)=>{
//             console.log('Here is res',res);
//             this.setState({
//                 name:res.data.ali
//             })
//         }).catch((err)=>{
//             console.log('Here is err',err);
//         })
// }


class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waiting: true,
      defaultData:{},
    };
    this.data = {
      email : ''
    }
    console.log('Aform Log Entry')
    
  }

  componentDidMount(){

    // this.data.email = localStorage.account
    // axios.post('http://localhost:3000/loaduser',this.data).then((res) => {
    //   this.setState({
    //     defaultData:res.data,
    //     waiting:false
    //   })
    // }).catch((err) => {
    //   console.log(err)
    // })

    // db.onceGetUsers()
    // .then(snapshot =>
    //   // this.setState(() => ({ users: snapshot.val() }))
    //   console.log(snapshot.val())
    // );


    // db.getUser('6bzTPv4jP6ap0s5XqOBSRa1hiDh2')
    // .then(snapshot =>
    //   // this.setState(() => ({ users: snapshot.val() }))
    //   console.log(localStorage)

     
    // );

    
  }

  render() {

    return (
      <div className="animated fadeIn">

        <h1>Your Profile</h1>
        {/* <Card>
          <CardBody> */}
        <Container fluid>
          <Row>

            
            <Col md="8">
              {this.state.waiting?null:
              <Form schema={schemaCore}
              formData={this.state.defaultData}
              uiSchema={uiSchemaCore}
              onChange={OnChangeRoutine}
              onSubmit={SubmitRoutine}
              onError={ErrorRoutine}
            />
              }
              
            </Col>
            <Col md="4">
              <Card>
                <CardBody>
                  <h4> Latest Trends</h4>
                </CardBody>
              </Card>
            </Col>


          </Row>
        </Container>
        {/* </CardBody>
        </Card> */}

      </div>
    );
  }
}

export default Aform;
