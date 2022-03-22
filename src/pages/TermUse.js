import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const TermUse = () => {
  return (
    <>
    <div>
      <h1 className="custom-head">Term of Use</h1>
    </div>
    <div>
      <Container>
        <Card className="text-center" border="info" style={{ background:'#00786F', borderWidth: 3  }}>
          <Card.Body>
            This is the term of use for Dads Visits!
          </Card.Body>
        </Card>
      </Container>
    </div>
    </>
  )
}

export default TermUse;