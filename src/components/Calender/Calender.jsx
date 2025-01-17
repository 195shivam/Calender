import React, { useEffect, useState } from "react";
import Month from "../MonthComponent/Month";
import WeekDay from "../WeekDayComponent/WeekDay";
import "../Calender/Calender.css";
import Dates from "../DateComponent/Dates";
export default function Calender() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState("January");
  const monthDays = {
    January: 31,
    February:
      (year % 4 === 0 && year % 100 != 0) ||
      (year % 100 === 0 && year % 400 === 0)
        ? 29
        : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septeber",
    "October",
    "November",
    "December",
  ];
  const [monthNumber, setMonthNumber] = useState(0);
  const dates = [];
  function makeMonthDays(days) {
    const newMonth = [];
    for (let i = 1; i <= days; i++) {
      newMonth.push(i);
    }
    dates.push(newMonth);
  }
  makeMonthDays(
    monthDays[monthArr[monthNumber - 1 === -1 ? 11 : monthNumber - 1]]
  );
  makeMonthDays(monthDays[monthArr[monthNumber]]);
  makeMonthDays(
    monthDays[monthArr[monthNumber + 1 === 12 ? 0 : monthNumber + 1]]
  );
  
  
  useEffect(() => {
    makeMonthDays(
      monthDays[monthArr[monthNumber - 1 === -1 ? 11 : monthNumber - 1]]
    );
    makeMonthDays(monthDays[monthArr[monthNumber]]);
    makeMonthDays(
      monthDays[monthArr[monthNumber + 1 === 12 ? 0 : monthNumber + 1]]
    );
    console.log('run')
    console.log(dates)
  },[]);
  const tempArr=[[1,2,3,4,5],[6,7,8,9],[1,2,3,3,4,5,5]]

  return (
    <>
      <div className="celenderHead">
        <Month month={month} year={year} />
        <WeekDay />
      </div>
      <div className="calenderBody">
        r

        <div className="dateContainer">
          {dates.map((e) =>(
            e.map((v,i)=>(
              <div className="date" key={i}>
                <Dates date={v} />
              </div>
            ))
          ))}
         
        </div>
      </div>
    </>
  );
}
