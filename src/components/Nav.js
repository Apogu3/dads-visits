import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const Navigation = () => {
    const { user } = useContext(AuthContext);
    const handleSignout = async () => {
        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            isOnline: false,
        });
        await signOut(auth);
    };
    return (
           <>
            <nav>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                 <Container>
                    <Navbar.Brand href="/">Dads Visits</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto container-fluid">
                              <Nav.Link href="/chat">Chat</Nav.Link>
                              <Nav.Link href="/resources">Resources</Nav.Link>
                              <Nav.Link href="schedule">Schedule</Nav.Link>
                                <span className="ms-auto"/>
                        
                              {user ?  (
                              <>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={handleSignout}>
                                    Logout
                              </Nav.Link>
                
                               </> 
                              ) : (             
                              <>
                                 <Nav.Link href="/register">Register</Nav.Link>
                                 <Nav.Link href="/login">Login</Nav.Link> 
                              </>
                            )}  
                            </Nav>
                          </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </nav>
              </>
    );
};

export default Navigation;