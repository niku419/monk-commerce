import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BottomBar() {
  return (
    <Container fluid className="p-0 m-0" style={{backgroundColor: "#f8f8f8", height: "40vh"}}>
      <Container className="pt-5">
        <Row>
          <Col className="col-lg-4 col-md-3">
            <FontAwesomeIcon size='lg' color="#f53838" icon={faFire}/>
            {' '}Lasles<strong>VPN</strong>
            <div className='lead'>
              <strong>Lasles VPN</strong> is a private virtual network that has unique features and high security.
            </div>  
          </Col>
          <Col>
            <Row>
              <Col className="col-lg-4">
                <div className="d-flex">
                  <div className="d-flex flex-column lead">
                    <strong>Product</strong>
                    <div>Download</div>
                    <div>Pricing</div>
                    <div>Location</div>
                    <div>Server</div>
                    <div>Countries</div>
                    <div>Blog</div>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-4">
                <div className="d-flex">
                  <div className="d-flex flex-column lead">
                    <strong>Engage</strong>
                    <div>lasles VPN</div>
                    <div>FAQ</div>
                    <div>Tutorials</div>
                    <div>About Us</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-4">
                <div className="d-flex">
                  <div className="d-flex flex-column lead">
                    <strong>Earn Money</strong>
                    <div>Affiliate</div>
                    <div>Become Partner</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> 
    </Container>
  )
}
