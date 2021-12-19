import React from 'react'
import { Container } from 'react-bootstrap'
import SliderX from './SliderX'

export default function SecondPage() {
  return (
    <Container fluid style={{height: "60vh"}}>
      <Container classname="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="display-6">
            <strong className="bolder">
              Trusted by Thousands of Happy Customer
            </strong>
          </h4>
        </div>
        <div className="d-flex justify-content-center align-items-center lead">
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
        </div>
      </Container>
      <SliderX/>
    </Container>
  )
}
