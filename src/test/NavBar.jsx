import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
  return (
    <Container className="px-5 pt-1" fluid>
      <Navbar collapseOnSelect expand="lg" sticky='top'>
        <Navbar.Brand href="#home"><FontAwesomeIcon size='lg' color="#f53838" icon={faFire}/>{' '}Lasles<strong>VPN</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="d-flex justify-content-end">
            <div className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#signin"><strong>Signin</strong></Nav.Link>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Nav.Link href="#signup"><Button variant="outline-primary px-5">Sign Up</Button></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
