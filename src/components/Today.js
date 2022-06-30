import React from 'react'
import Form from './Form'

const Today = ({data,singleData}) => {
  return (
    <div className='today common'>
      <Form data={data} singleData={singleData} header="Tasks for Today" day="today" />
    </div>
  )
}

export default Today
