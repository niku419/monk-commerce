import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import Cards from './Cards'

export default function SecondPage() {
  return (
    <Container fluid>
      <Container classname="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="display-6"><strong className="bolder">Choose Your Plan</strong></h4>
        </div>
        <div className="d-flex justify-content-center align-items-center lead">
          Lets choose a package that best suits for you and explore it happily and cheerfully
        </div>
      </Container>
      <Cards />
    </Container>
  )
}
