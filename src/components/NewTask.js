import React from 'react'


const NewTask = ({data, setData}) => {
  const getData = (e)=> {
    e.preventDefault()
    const inputData = new FormData(e.target) 
    const dataObj = Object.fromEntries(inputData.entries())
    const id = new Date().getTime().toString()
    setData([...data, {id: id, title: dataObj['title'], date: dataObj['date']}])
    document.getElementById("dataForm").reset();
  }
  return (
    <div className='newTask common'>
      <h3>Add new task</h3>
      <form onSubmit={getData} id="dataForm">
         <input className='size text' type="text" name="title" id="title-id" required placeholder='Describe task'/>
         <div className="radio">
            <input type="radio" name="date" value="today" required /><span>Today</span> 
            <input type="radio" name="date" value="tomorrow" required/><span>Tomorrow</span>
         </div>
         <input type="submit" value="Save" className='size' />
      </form>
    </div>
  )
}

export default NewTask
