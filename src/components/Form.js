import React from 'react'

const Form = ({data,singleData,header,day}) => {
  return (
    <div>
      <h3>{header}</h3>
     <form className="list">
       {data && data.map((event)=>{
           return (
            event.date === day &&
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

export default Form
