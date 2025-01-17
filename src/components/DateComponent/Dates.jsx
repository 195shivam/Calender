import React from 'react'
import '../DateComponent/Dates.css'
export default function Dates({date,disabled}) {
  return (
    <span className='dateBox'>{date}</span>
  )
}
