import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa' 
import {FaArrowAltCircleLeft} from 'react-icons/fa' 
import {BsTrashFill} from 'react-icons/bs' 


const Buttons = ({data, setData, eventId, setEventId}) => {
  const deleteData = (()=> {
    console.log(data, eventId)
    let counters = {} 
    let result = ( data.concat(eventId).map(cur => (counters[cur.id] ? counters[cur.id]++ : (counters[cur.id] = 1), cur)).filter(cur => counters[cur.id] === 1))
    console.log(result)
    setData(result)
    setEventId([])
  })

  const moveDataFromToday = (()=>{
    data.map(dataRow => {
      // return dataRow.id == "1656098719369" && (setData([...data, dataRow.date = "tomorrow"]))
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "tomorrow"]))
      // console.log(eventId.includes("1656098719369"))
      // console.log(eventId.some(item => item.id == dataRow.id)) 
    } )
  })

  const moveDataFromTomorrow = (()=>{
    data.map(dataRow => {
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "today"]))
    } )
  })

  return (
    <div className='buttons'>
      <div className="button" onClick={()=> moveDataFromToday()}>
      <p><FaArrowAltCircleRight /></p>
      <p>Tomorrow</p>
      </div>

      <div className="button" onClick={()=> moveDataFromTomorrow()}>
      <p><FaArrowAltCircleLeft /></p>
      <p>Today</p>
      </div>

      <div className="button" onClick={()=> deleteData()}>
      <p><BsTrashFill /></p>
      <p>Delete</p>
      </div>
    </div>
  )
}

export default Buttons
