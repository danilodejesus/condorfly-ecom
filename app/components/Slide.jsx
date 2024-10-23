'use client'
function Slide({slide}) {

  const openPopup = (task) => {
    console.log(task)
  }

  return (
    <div>
      <figure key={slide.id} style={{backgroundImage:  "URL("+'https://images5.alphacoders.com/560/thumb-1920-560615.jpg'+")"}}>
        <img src="https://images5.alphacoders.com/560/thumb-1920-560615.jpg" alt="" />
        <figcaption>
          <strong>{slide.title}</strong>
          <p>{slide.country}</p>
          <u>{slide.date_tour}</u>
          <a href="#popup1" onClick={() => openPopup(slide)} >Comprar</a>
        </figcaption>
      </figure>

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Conozca Machu Picchu</h2>
          <a className="close" href="#">&times;</a>
          <div className="content">
            <div className="date-location">
              <h3>Fecha: {slide.date_tour}</h3>
              <h3>Precio: {slide.price}</h3>
              <h4>Inicio del Tour: Aeropuerto Jorge Chavez</h4>
              <h4>Fin del Tour: Aeropuerto Jorge Chavez</h4>
            </div>

            <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <h4 className="popup-subtitle">Itinerario</h4>
            <p>
              <strong>Día 1:</strong>
              {slide.description}
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
    </div>
  )
}

export default Slide