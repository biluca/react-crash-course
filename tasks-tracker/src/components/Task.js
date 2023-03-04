import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    let className = "task"
    if (task.reminder) {
        className = className + " reminder"
    }

    return (
        <div className={className} onDoubleClick={() => onToggle(task.id)}>
            <h6>#{task.id}</h6>
            <h3 key={task.id}>{task.text}
                <FaTimes
                    style={
                        {
                            color: "#a00",
                            cursor: 'pointer'
                        }
                    }
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
