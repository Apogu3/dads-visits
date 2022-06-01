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
        <Card className="text-center" border="info" style={{ background:'#00786F', borderWidth: 3, fontSize: 30  }}>
          <Card.Body>
            Dad's Visits is a user friendly and free application that was designed to 
            make remembering visitation easier. As well as finding AG offices/child support offices locations
            along with conact information. 
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default Info;