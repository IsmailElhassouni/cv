import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import certifa1 from './certifa.png';
import certifa2 from './backend.png';
import './slide.css'
const Certificates = () => {
  return (
    <div className="certifc">
      <h1 className="certifc-title">My certificates :</h1>
      <Container>
        <Carousel
          prevIcon={<span className="carousel-arrow">&#9664;</span>}
          nextIcon={<span className="carousel-arrow">&#9654;</span>}
          indicators={false}
          className="custom-carousel"
        >
          <Carousel.Item>
            <img src={certifa1} alt="Slide 1" className="img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={certifa2} alt="Slide 2" className="img-fluid" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Certificates;
