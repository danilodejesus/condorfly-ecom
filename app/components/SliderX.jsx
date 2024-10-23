import Slide from '../components/Slide'

async function loadTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`, {cache: "no-store"})
  const tasks = await res.json()
  return tasks;
}

async function SliderX() {

  const tasks = await loadTasks()
  console.log(tasks)

  return (
    <div className="banner">
      {tasks.map(task => (
        <Slide slide={task} />
      ))}
    </div>
  )
}

export default SliderX