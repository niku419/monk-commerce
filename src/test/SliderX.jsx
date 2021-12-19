import React from 'react'
import Slider  from 'react-slick'
import { Container, Card } from 'react-bootstrap'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SliderX() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Container classname="mt-5">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div>
            <Card className="slider">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                  <div><img style={{borderRadius: "50%", height: "50px", width: "50px"}} src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/></div>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  </div>
                  <div>
                    <Card.Text>4.5{' '}</Card.Text>
                    <FontAwesomeIcon color="#FEA250" icon={faStar} className="star"/>
                  </div>
                </div>
                
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  )
}
