
const Task = ({ key, text, day }) => {
    return (
        <div className="task">
            <h3 key={key}>{text}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
