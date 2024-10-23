async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {cache: "no-store"})
  const tasks = await res.json()
  return tasks;
}

async function PopupX() {
  let tasks = await loadTasks()
  console.log(tasks)
  return (
    <>
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
    </>
  )
}

export default PopupX