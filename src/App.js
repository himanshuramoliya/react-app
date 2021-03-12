import logo from './logo.svg';
import './App.css';
import Header2 from './components/Header'
import Tasks from './components/Tasks' 
import {useState} from 'react'
import Addtask from './components/Addtask'


function App() {
  const [show,setshow] = useState (false)
  const [tasks,setTasks] = useState (
    [
      {
          id:1,
          text:'Compititve coding',
          day:'everyday',
          remider:true,
  
      },
      {
          id:2,
          text:'development',
          day:'regular with coding cp',
          remider:true,
      }
     
  ]
  )
  // add tasknp
  const addtask = (task) => {
    const id=tasks.length+2
    
    const nwTask={id,...task}
    
    setTasks([...tasks,nwTask])
    


  }
  //dete task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (tasks) => tasks.id !=id))
  }

  // toggle rem
  const tog = (id) => {
    setTasks(tasks.map( (task) => task.id == id ?
    {...task,remider : !task.remider}
    :task))

   
  }
  // toggle form
  const showform = () => {
    setshow(!show)
  }
  return (
    <div className="container">

      <Header2 showtog={showform} showadd={show}/>
     { show && <Addtask onadd={addtask} /> }
      {tasks.length > 0 ?
      ( <Tasks tasks={tasks} onDelete={deleteTask} ontog={tog}/> )
      : ('No tasks to show')}
    </div>
  );
}

export default App;
