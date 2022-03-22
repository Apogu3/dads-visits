import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Help = () => {
  return (
    <>
    <div>
      <h1 className="custom-head">FAQ</h1>
    </div>
    <div>
      <Container>
        <Card className="text-center" border="info" style={{ background:'#00786F', borderWidth: 3  }}>
          <Card.Body>
            This is some frequently asked questions about Dads Visits!
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default Help;