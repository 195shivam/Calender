import React from 'react'

export default function Month({month,year}) {
  return (
    <div className=' bg-primary'>
        <h2 className=' text-white p-3 fw-bold m-0'>{month} , {year}</h2>
    </div>
  )
}
