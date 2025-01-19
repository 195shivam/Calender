import React from "react";
import "../WeekDayComponent/WeekDay.css";
export default function WeekDay() {
  return (
    <div className="d-grid container-fluid m-0 ">
      <div className="row bg-dark-subtle p-2">
        {/* <div className="col-1 dayBox"></div> */}
        <div className="dayBox">Sunday</div>
        <div className="dayBox">Monday</div>
        <div className="dayBox">Tuesday</div>
        <div className="dayBox">Wednesday</div>
        <div className="dayBox">Thursday</div>
        <div className="dayBox">Friday</div>
        <div className="dayBox">Saturday</div>
      </div>
    </div>
  );
}
