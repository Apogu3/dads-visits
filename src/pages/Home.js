import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// Card Picture
import ChatImg from '../chat-emblem.png';
import MapImg from '../map-emblem.png';
import CalendarImg from '../calendar-emblem.jpg';
import Img from '../profileemblem.jpg';

const Home = () => {
    return (
        <>
<Container>
<Row xs={2} md={2} className="g-4">
    <Col>
      <Card className='text-center' style={{ maxWidth: '18rem', borderRadius: 150, background: '#242526' }}>
      <Card.Link href="/chat">
        <Card.Img variant="top" src={ChatImg} className="emblem-link" />
        </Card.Link>
        <Card.Body>
          <Button variant="info" href="/chat">Chat</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card className='text-center' style={{ maxWidth: '19rem', borderRadius: 130, background: '#242526' }}>
    <Card.Link href="/resources">
        <Card.Img variant="top" src={MapImg} className="emblem-link" />
        </Card.Link>
        <Card.Body>
          <Button variant="info" href="/resources">Resources</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card className='text-center' style={{ maxWidth: '19rem', borderRadius: 130, background: '#242526' }}>
      <Card.Link href="/schedule">
        <Card.Img variant="top" src={CalendarImg} className="emblem-link" />
        </Card.Link>
        <Card.Body>
          <Button variant="info" href="/schedule">Schedule</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card className='text-center' style={{ maxWidth: '19rem', borderRadius: 130, background: '#242526' }}>
    <Card.Link href="/profile">
        <Card.Img variant="top" src={Img} className="emblem-link" />
       </Card.Link>
        <Card.Body>
          <Button variant="info" href="/profile">Profile</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
</Container>
       </> 
    );
};

export default Home;
