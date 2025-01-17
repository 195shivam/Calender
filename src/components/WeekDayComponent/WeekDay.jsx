import React from 'react'
import '../WeekDayComponent/WeekDay.css'
export default function WeekDay() {
  return (
    <div className='d-grid container-fluid m-0 '>
        <div className="row bg-dark-subtle p-2">
            <div className="col-1 dayBox"></div>
            <div className="col-1 dayBox">Sunday</div>
            <div className="col-1 dayBox">Monday</div>
            <div className="col-1 dayBox">Tuesday</div>
            <div className="col-1 dayBox">Wednesday</div>
            <div className="col-1 dayBox">Thursday</div>
            <div className="col-1 dayBox">Friday</div>
            <div className="col-1 dayBox">Saturday</div>
        </div>

    </div>
  )
}
