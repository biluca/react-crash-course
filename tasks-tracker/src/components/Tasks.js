import Task from "./Task"

const Tasks = ({ tasks }) => {

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    text={task.text}
                    day={task.day}
                />
            ))}
        </div>
    )
}

export default Tasks
