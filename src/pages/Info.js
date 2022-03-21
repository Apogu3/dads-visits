import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Info = () => {
  return (
    <>
    <div>
      <h1 className="custom-head">About Us</h1>
    </div>
    <div>
      <Container>
        <Card className="text-center" border="info" style={{ background:'#242526', borderWidth: 3  }}>
          <Card.Body>
            This is some info about Dads Visits!
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default Info;