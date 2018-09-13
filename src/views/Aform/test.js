//imports here

const defaultData={
  Personal:{
    Name: '',
    Email:''
  }
};

function getuserData(theObject) {
  axios.get('http://localhost:3000/getuser').then((res) => {
    theObject = res
  }).catch((err) => {
  })
}

class Aform extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    
    getuserData(defaultData)
    console.log(defaultData)// Here defaultData is not being being updated by function call above. 
    
  }


  render() {
    return (
      <div>
        <h1>Your Profile</h1>
        <Container fluid>
          <Row>
              <Card>
                <CardBody>
                  <h4> Hello </h4>
                </CardBody>
              </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Aform;
