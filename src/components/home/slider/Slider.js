import Carousel from 'react-bootstrap/Carousel';
import "./style.css"
import sImage1 from "../../../assets/slide1.jpg"
import sImage2 from "../../../assets/slide2.jpg"
// import Aos from "aos"
function Slider() {
  return (
    <div id="slider">
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={sImage1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h1 
          className="slide-h1" data-aos="fade-left"
           data-aos-delay="200" data-aos-duration="1000" 
           data-aos-offset="100"
           >Best Logistics <br/>In The <span className="Span">Provide</span></h1>
          <p 
          className="slide-p"
          data-aos="fade-left" data-aos-delay="400" 
          data-aos-duration="600" >
          We are committed to providing our customers with exceptional service 
          while offering our employees
          </p>
          <button className=" p-3  btn my-btn slide-btn"
          data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000"
          >Track Your Order</button>
     </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <Carousel.Caption>
          <h1 
          className="slide-h1" data-aos="fade-left"
           data-aos-delay="200" data-aos-duration="1000" 
           data-aos-offset="100"
           >Best Logistics <br/>In The <span className="Span">Provide</span></h1>
          <p 
          className="slide-p"
          data-aos="fade-left" data-aos-delay="400" 
          data-aos-duration="600" >
          We are committed to providing our customers with exceptional service 
          while offering our employees
          </p>
          <button className=" p-3  btn my-btn slide-btn"
          data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000"
          >Track Your Order</button>
     </Carousel.Caption>
        <img
          className="d-block w-100"
          src={sImage2}
          alt="Second slide"
          
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;
