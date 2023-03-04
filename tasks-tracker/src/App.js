import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Panel from "./components/Panel"
import AddTask from "./components/AddTask"

import { useState } from "react"

function App() {
  const [addButtonText, setAddButtonText] = useState("Add")
  const [addButtonColor, setAddButtonColor] = useState("green")
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Association Meetings",
        day: "Feb 5th at 2:30pm",
        reminder: false
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

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const toggleAddTaskForm = () => {
    const addButtonText = showAddTask ? "Add" : "Close"
    const addButtonColor = showAddTask ? "green" : "red"
    setAddButtonText(addButtonText)
    setAddButtonColor(addButtonColor)
    setShowAddTask(!showAddTask)
  }

  const addTask = (task) => {
    const id = tasks.length + 1
    toggleAddTaskForm()

    const newTask = {
      id,
      ...task
    }

    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="container">
      <div className="container-child">
        <Header
          title="Tasks List"
          onAdd={toggleAddTaskForm}
          showAddButton="true"
          addButtonText={addButtonText}
          addButtonColor={addButtonColor}
        />
        {tasks.length > 0
          ?
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
          :
          <Panel text="You're Done! Take a Break!" />
        }
      </div>

      {showAddTask
        ?
        <div className="container-child">
          <Header title="New Tasks" />
          <AddTask onAdd={addTask} />
        </div>
        :
        <></>
      }

    </div>
  );
}

export default App;
