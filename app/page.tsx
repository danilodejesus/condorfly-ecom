'use client';
import React from "react";
import Slider from "react-slick";

export default class Home extends React.Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000
    };
    
    return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <figure style={{backgroundImage: "URL("+'https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'+")"}}>
            <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <figcaption>
              <strong>MACHU PICCHU</strong>
              <p>PERÚ</p>
              <u>Adventure is never far away</u>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure style={{backgroundImage:  "URL("+'https://images5.alphacoders.com/560/thumb-1920-560615.jpg'+")"}}>
            <img src="https://images5.alphacoders.com/560/thumb-1920-560615.jpg" alt="" />
            <figcaption>
              <strong>HUANCAYA</strong>
              <p>PERÚ</p>
              <u>The mountains are calling</u>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure style={{backgroundImage: "URL("+'https://wallpaperbat.com/img/113173-denmark-4k-wallpaper-top-free-denmark-4k-background.jpg'+")"}}>
            <img src="https://wallpaperbat.com/img/113173-denmark-4k-wallpaper-top-free-denmark-4k-background.jpg" alt="" />
            <figcaption>
              <strong>COPENHAGUEN</strong>
              <p>DENMARK</p>
              <u>Adventure is never far away</u>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure style={{backgroundImage:  "URL("+'https://losviajesdeaspasia.com/wp-content/uploads/2016/10/078_Catedral_Roskilde-scaled.jpg'+")"}}>
            <img src="https://losviajesdeaspasia.com/wp-content/uploads/2016/10/078_Catedral_Roskilde-scaled.jpg" alt="" />
            <figcaption>
              <strong>ROSKILDE</strong>
              <p>DENMARK</p>
              <u>The mountains are calling</u>
            </figcaption>
          </figure>
        </div>
      </Slider>
    </div>
  );
  } 
}
