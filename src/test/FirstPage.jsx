import React from 'react'
import { Container, Button } from 'react-bootstrap'
import {ComputerMan} from './ComputerMan.jsx'

export default function FirstPage() {
  return (
    <Container fluid style={{height: "89.5vh"}} className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-evenly row flex-row-reverse align-items-center">
        <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-12" style={{height: "100%", maxWidth: "50%"}}>
          <ComputerMan/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-md-5" style={{height: "100%"}}>
          <div className="space">
            <h3 className="display-4">Want Anything to be easy with <strong>LaslesVPN.</strong></h3>
          </div>
          <div className="lead space">
            Provide a newtork for all your needs with ease and fun with <strong>LaslesVPN{' '}</strong>
            discover interesting features from us.
          </div>
          <div className='space'><Button className="btn-style">Get started</Button></div>
        </div>
      </div>
    </Container>
  )
}
