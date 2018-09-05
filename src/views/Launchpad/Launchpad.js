import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Zia extends Component{
  render() {
    return (
      <div >
              <h1> Zia ul Hassan Eating Daal Chawal </h1>
              <Button size="sm" href='/dashboard' className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
              <Button size="sm" href='/theme/colors' className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>              
      </div>
    );
  }

}
export default Zia;
