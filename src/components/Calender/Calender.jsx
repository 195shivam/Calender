import React, { useEffect, useState } from "react";
import Month from "../MonthComponent/Month";
import WeekDay from "../WeekDayComponent/WeekDay";
import "../Calender/Calender.css";
import Dates from "../DateComponent/Dates";
export default function Calender() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState("January");
  const date = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  // const [scrollDir, setScrollDir] = useState(0);
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
  const [dates, setDates] = useState([]);
  function makeMonthDays(days) {
    const newMonth = [];
    for (let i = 1; i <= days; i++) {
      newMonth.push(i);
    }
    return newMonth;
  }
  function addMonth() {
    setDates((d) => [
      ...d,
      makeMonthDays(monthDays[monthArr[monthNumber % 12]]),
    ]);
  }

  useEffect(() => {
    if (monthNumber == 12) {
      setYear((e) => e + 1);
      setMonthNumber(0);
    }

    addMonth();
    setMonth(monthArr[monthNumber]);
  }, [monthNumber]);

  useEffect(() => {
    let lastScrolled = 0;
    let totalScrollUp = 0;
    window.addEventListener("scroll", () => {
      const scrolled = Math.floor(window.scrollY);
      if (scrolled === 0) {
        totalScrollUp = 0;
        setMonthNumber(0);
      } else if (
        scrolled > lastScrolled &&
        (scrolled + window.innerHeight ==
          document.documentElement.scrollHeight - 1 ||
          scrolled + window.innerHeight ==
            document.documentElement.scrollHeight)
      ) {
        totalScrollUp = 0;
        setMonthNumber((m) => m + 1);
      } else if (lastScrolled > scrolled) {
        totalScrollUp += lastScrolled - scrolled;
        if (totalScrollUp >= window.innerHeight) {
          setMonthNumber((e) => e - 1);
          totalScrollUp = 0;
        }
      }
      lastScrolled = scrolled;
    });
  }, []);

  return (
    <div>
      <div className="celenderHead">
        <Month month={month} year={year} />
        <WeekDay />
      </div>
      <div className=" d-grid  ">
        <div className="row container-fluid m-0 p-0">
          <div className="col-12">
            <div className="row ">
              <div className=" col">
                <Dates />
              </div>
              <div className=" col">
                <Dates />
              </div>
              <div className=" col">
                <Dates />
              </div>
              {dates.map((e) =>
                e.map((v, i) => {
                  return (
                    <div
                      className={`col fs-3 ${
                        date === v &&
                        monthNumber === currentMonth &&
                        currentYear === year
                          ? "bg-danger bg-opacity-25"
                          : ""
                      }`}
                      key={i}
                    >
                      <Dates dates={v} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
