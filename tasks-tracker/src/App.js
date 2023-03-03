import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Panel from "./components/Panel"

import { useState } from "react"



function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Association Meetings",
        day: "Feb 5th at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Wach the Car",
        day: "Feb 15th at 2:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Buy new glasses",
        day: "Feb 25th at 2:30pm",
        reminder: true
      }
    ]
  )

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="container">
      <Header title="Tasks List" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
        : <Panel text="You're Done! Take a Break!" />
      }

    </div>
  );
}

export default App;
