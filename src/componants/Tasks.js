import Task from './Task'
const Tasks = ({tasks,onDelete,ontog}) => {
    return (
        <>
        {tasks.map( (task) => (
        <Task key={task.id} task={task}  onDelete={onDelete} ontog={ontog}/>)
        )}  
        </>
    )
}

export default Tasks
