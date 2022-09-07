import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"
import serv1 from "../../../assets/air.jpg"
import serv2 from "../../../assets/road.jpg"
import serv3 from "../../../assets/rail.jpg"
import serv4 from "../../../assets/warehouse.jpg"
import serv5 from "../../../assets/ship.jpg"
import Head from '../../header/Head'
export default class Services extends Component {
  state={
    slidesToShow: 3,
  }


  render() {
  const width = () => {
    window.innerWidth < 600?this.state.slidesToShow=1:this.state.slidesToShow=3;
    window.innerWidth > 600?this.state.slidesToShow=3:this.state.slidesToShow=1;
    return this.state.slidesToShow
 };

 
    const settings = {

      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      speed: 500,
      slidesToShow: width(),
      slidesToScroll: 1
    };

    return (
      <div className="my-5 service-section" id="service-s">
        <div className="container ml-4 py-4">
        <Head head="service" span="Featured Service" hDesc="What " sDesc="We Do"/>
        </div>
        <Slider {...settings}>
          
          <div class="card" >
              <img class="card-img-top" src={serv1} alt="Card image cap"/ >
              <div class="card-body">
                <h2 className="card-title">Road Freight</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

          <div class="card" >
              <img class="card-img-top" src={serv2} alt="Card image cap"/ >
              <div class="card-body">
              <h2 className="card-title">Road</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          <div class="card" >
              <img class="card-img-top" src={serv3} alt="Card image cap"/ >
              <div class="card-body">
              <h2 className="card-title">Road</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          <div class="card" >
              <img class="card-img-top" src={serv4} alt="Card image cap"/ >
              <div class="card-body">
              <h2 className="card-title">Road</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          <div class="card" >
              <img class="card-img-top" src={serv5} alt="Card image cap"/ >
              <div class="card-body">
              <h2 className="card-title">Road</h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          
          
   

     
        </Slider>
      </div>
    );
  }
}