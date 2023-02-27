import Header from "./components/Header"
import Tasks from "./components/Tasks"

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
  return (
    <div className="container">
      <Header title="Tasks List" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
