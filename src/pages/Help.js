import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap';



function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button 
      type="button"
      style={{ backgroundColor: 'aqua', borderRadius: 10, textAlign: 'center' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Help = () => {
  return (
    <>
    <div>
      <h1 className="custom-head">FAQ</h1>
    </div>
    <div>
    <Accordion defaultActiveKey="0" className='accord-align'>
      <Card bg='dark'>
        <Card.Header className="questions btn-align">
          <CustomToggle eventKey="0">Is Dad's Visits free?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={{ backgroundColor: 'dark', textAlign: 'center', fontSize: 'large' }}>Yes! Your Dad's Visits account is completely free!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card bg='dark'>
        <Card.Header className="questions btn-align">
          <CustomToggle eventKey="1">What is Dad's Visits for?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body style={{ backgroundColor: 'dark', textAlign: 'center', fontSize: 'large' }}>Dad's Visits was created to hopefully allow remembering visitation easier. As well as finding local child support offices/AG offices convenient.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card bg='dark'>
        <Card.Header className="questions btn-align">
          <CustomToggle eventKey="2">Is my account information kept private?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body style={{ backgroundColor: 'dark', textAlign: 'center', fontSize: 'large' }}>Yes! Your name, email, and any personal information is kept private unless shared with someone else by the user.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card bg='dark'>
        <Card.Header className="questions btn-align">
          <CustomToggle eventKey="3">How do I create an account?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body style={{ backgroundColor: 'dark', textAlign: 'center', fontSize: 'large' }}>Follow the register prompts by filling out your name, email, and password.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  
    </div>
    </>
  )
}

export default Help;