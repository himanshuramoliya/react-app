import {useState} from 'react'

const Addtask = ({onadd}) => {
    const [text,setText] = useState ('')
    const [day,setday] = useState ('')
    const [remider,setrem] = useState (false)
    
    const onsub = (e) => {
        e.preventDefault()
        
        if(!text){
            alert('please add task')
            return 
        }
        
        onadd({text,day,remider})
        setText('')
        setday('')
        setrem(false)
    }

    return (
        <form onSubmit={onsub} className='add-form'>
            <div className='form-control' >
                <label >Task</label> 
                <input className='text-box'
                type='text' placeholder='Add task' 
                value = {text} onChange={ (e) => setText(e.target.value)}
                />

            </div>
            <div className='form-control'>
                <label>Day & time</label> 
                <input className='text-box'
                type='text' placeholder='Add Day & time' 
                value = {day} onChange={ (e) => setday(e.target.value)}
                />

            </div>
            <div className='form-control form-control-check'>
                <label>set remider</label> 

                <input type='checkbox' 
                checked={remider}
                value = {remider} onChange={ (e) => setrem(e.currentTarget.checked)}
                />

            </div>
            <input type='submit' value='save task' className='btn btn-block' />
        </form>
    )
}
    

export default Addtask
