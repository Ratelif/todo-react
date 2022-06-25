import React from 'react'
const Today = ({data,eventId,setEventId,singleData}) => {
  
  return (
    <div className='today common'>
      <h3>Tasks for Today</h3>
      <form className="list">
        {data && data.map((event)=>{
           return (
            event.date === "today" &&
           <div className="list-item" key={event.id}>
            <label>
            <input type="checkbox" name={event.date} id={event.id} value={event.date} onChange={singleData}/><span>{event.title}</span>
          </label>
          </div>) 
        })}
      </form>  
    </div>
  )
}

export default Today
