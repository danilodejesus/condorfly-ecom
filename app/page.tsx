'use client';
import React, { useRef } from "react";
import Slider from "react-slick";

export default class Home extends React.Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    return (
      <>
        <h1>Condor fly</h1>
        <main className="main">

          <header className="header">
            <div className="header-container">
              <a className="logo">CondorFly</a>
              <div className="menu">
                <a className="menu-link">Our Tours</a>
                <a className="menu-link">Blog</a>
                <a className="menu-link">Contact</a>
              </div>
            </div>
          </header>

          <div className="banner">
            <Slider {...settings}>
              <div>
                <figure style={{backgroundImage: "URL("+'https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'+")"}}>
                  <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <figcaption>
                    <strong>MACHU PICCHU</strong>
                    <p>PERÚ</p>
                    <u>21 a 30 Octubre 2024</u>
                    <a href="#popup1">Comprar</a>
                  </figcaption>

                </figure>
              </div>
              <div>
                <figure style={{backgroundImage:  "URL("+'https://images5.alphacoders.com/560/thumb-1920-560615.jpg'+")"}}>
                  <img src="https://images5.alphacoders.com/560/thumb-1920-560615.jpg" alt="" />
                  <figcaption>
                    <strong>HUANCAYA</strong>
                    <p>PERÚ</p>
                    <u>21 a 30 Noviembre 2024</u>
                    <a href="#popup2">Comprar</a>
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure style={{backgroundImage: "URL("+'https://wallpaperbat.com/img/113173-denmark-4k-wallpaper-top-free-denmark-4k-background.jpg'+")"}}>
                  <img src="https://wallpaperbat.com/img/113173-denmark-4k-wallpaper-top-free-denmark-4k-background.jpg" alt="" />
                  <figcaption>
                    <strong>COPENHAGUEN</strong>
                    <p>DENMARK</p>
                    <u>21 a 30 Diciembre 2024</u>
                    <a href="#popup3">Comprar</a>
                  </figcaption>
                </figure>
              </div>
              <div>
                <figure style={{backgroundImage:  "URL("+'https://losviajesdeaspasia.com/wp-content/uploads/2016/10/078_Catedral_Roskilde-scaled.jpg'+")"}}>
                  <img src="https://losviajesdeaspasia.com/wp-content/uploads/2016/10/078_Catedral_Roskilde-scaled.jpg" alt="" />
                  <figcaption>
                    <strong>ROSKILDE</strong>
                    <p>DENMARK</p>
                    <u>21 a 30 Octubre 2025</u>
                    <a href="#popup4">Comprar</a>
                  </figcaption>
                </figure>
              </div>
            </Slider>
          </div>

          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>Conozca Machu Picchu</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                <div className="date-location">
                  <h3>Fecha: 21 - 30 de Octubre 2024</h3>
                  <h3>Precio: 2.495 USD</h3>
                  <h4>Inicio del Tour: Aeropuerto Jorge Chavez</h4>
                  <h4>Fin del Tour: Aeropuerto Jorge Chavez</h4>
                </div>

                <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <h4 className="popup-subtitle">Itinerario</h4>
                <p>
                  <strong>Día 1:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día 2:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día 3:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día 4:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
              </div>
            </div>
          </div>

          <div id="popup2" className="overlay">
            <div className="popup">
              <h2>TOUR A HUANCAYA</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                <div className="date-location">
                  <h3>Fecha: 21 - 30 de Octubre 2024</h3>
                  <h3>Precio: 2.495 USD</h3>
                  <h4>Inicio del Tour: Aeropuerto Jorge Chavez</h4>
                  <h4>Fin del Tour: Aeropuerto Jorge Chavez</h4>
                </div>

                <img src="https://images5.alphacoders.com/560/thumb-1920-560615.jpg" />

                <h4 className="popup-subtitle">Itinerario</h4>
                <p>
                  <strong>Día 1:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día :</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
              </div>
            </div>
          </div>

          <div id="popup3" className="overlay">
            <div className="popup">
              <h2>TOUR A COPENHAGUEN</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                <div className="date-location">
                  <h3>Fecha: 21 - 30 de Octubre 2024</h3>
                  <h3>Precio: 2.495 USD</h3>
                  <h4>Inicio del Tour: Aeropuerto Jorge Chavez</h4>
                  <h4>Fin del Tour: Aeropuerto Jorge Chavez</h4>
                </div>

                <img src="https://wallpaperbat.com/img/113173-denmark-4k-wallpaper-top-free-denmark-4k-background.jpg" />

                <h4 className="popup-subtitle">Itinerario</h4>
                <p>
                  <strong>Día 1:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día :</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
              </div>
            </div>
          </div>

          <div id="popup4" className="overlay">
            <div className="popup">
              <h2>TOUR A MACHU PICCHU</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                <div className="date-location">
                  <h3>Fecha: 21 - 30 de Octubre 2024</h3>
                  <h3>Precio: 2.495 USD</h3>
                  <h4>Inicio del Tour: Aeropuerto Jorge Chavez</h4>
                  <h4>Fin del Tour: Aeropuerto Jorge Chavez</h4>
                </div>

                <img src="https://losviajesdeaspasia.com/wp-content/uploads/2016/10/078_Catedral_Roskilde-scaled.jpg" />

                <h4 className="popup-subtitle">Itinerario</h4>
                <p>
                  <strong>Día 1:</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
                <p>
                  <strong>Día :</strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor corporis saepe commodi quod, quisquam excepturi, dicta velit aperiam quasi, officiis enim voluptates? Deserunt accusamus aliquid iste ex voluptates placeat!
                </p>
              </div>
            </div>
          </div>

        </main>

      </>
  );
  } 
}
