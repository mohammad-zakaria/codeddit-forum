import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button} from 'react-bootstrap';

const UsersPost = ({data}) => {
    return (
        <div>
                      {
            data ? data.map((fakeData )=>(
              <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={fakeData.Img} />
              <Card.Body>
                <Card.Title>{fakeData.name}</Card.Title>
                <Card.Text>
                  {fakeData.text}
                </Card.Text>
                <Button variant="primary">Like</Button> <span>Comment</span>
              </Card.Body>
            </Card>
             ))
            : 'loading' }
        </div>
    );
};

export default UsersPost;