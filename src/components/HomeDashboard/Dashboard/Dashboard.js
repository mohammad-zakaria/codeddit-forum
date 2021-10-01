import React from "react";
import { Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Sidebar from "../Sidebar/Sidebar";


const containerStyle = {
  backgroundColor: "#F4FDFB",
  border: "1px solid red",
};
const Dashboard = () => {
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-5 col-sm-12 col-12">
          <Sidebar></Sidebar>
        </div>
        {/* <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center"></div> */}
        <div className="col-md-7 col-sm-12 col-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>User Name</Card.Title>
              <Card.Text>
                Users posts will be shown here
              </Card.Text>
              <Button variant="primary">Button If need</Button>
            </Card.Body>
          </Card>
        
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
