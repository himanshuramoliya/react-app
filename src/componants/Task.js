
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete,ontog}) => {
    return (
        <div className={`task ${task.remider ? 'reminder' : ''}`} onDoubleClick={() => (ontog(task.id))}  >
            <h3>{task.text} 
            
            <FaTimes style =
            {{color:'red' , cursor :'pointer'}} 
            onClick={()=>(onDelete(task.id))}
            />
            
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
