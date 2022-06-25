import React from 'react'

const NewTask = () => {
  return (
    <div className='newTask common'>
      <h3>Add new task</h3>
      <form>
         <input className='size text' type="text" name="describe-task" id="describe-task" placeholder='Describe task'/>
         <div className="radio">
            <input type="radio" name="describe-task" value="today" /><span>Today</span> 
            <input type="radio" name="describe-task" value="tomorrow" /><span>Tomorrow</span>
         </div>
         <input type="submit" value="Save" className='size' />
      </form>
    </div>
  )
}

export default NewTask
