import React from 'react'
import Buttons from './Buttons'
import Today from './Today'
import Tomorrow from './Tomorrow'

const Tasks = () => {
  return (
    <div className='tasks'> 
         <Today />
         <Buttons />
         <Tomorrow />
    </div>
  )
}

export default Tasks
