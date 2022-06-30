import React from 'react'
import Button from './Button'

const Buttons = ({data, setData, eventId, setEventId}) => {
  const deleteData = (()=> {
    let counters = {} 
    let result = ( data.concat(eventId).map(cur => (counters[cur.id] ? counters[cur.id]++ : (counters[cur.id] = 1), cur)).filter(cur => counters[cur.id] === 1))
    setData(result)
    setEventId([])
  })

  const moveDataFromToday = (()=>{
    data.map(dataRow => {
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "tomorrow"]))
    } )
  })

  const moveDataFromTomorrow = (()=>{
    data.map(dataRow => {
      return eventId.some(item => item.id == dataRow.id) && (setEventId([]), setData([...data, dataRow.date = "today"]))
    } )
  })

  return (
    <div className='buttons'>
      <Button sendFunction={moveDataFromToday} text="Tomorrow" />
      <Button sendFunction={moveDataFromTomorrow} text="Today" />
      <Button sendFunction={deleteData} text="Delete" />
    </div>
  )
}

export default Buttons
