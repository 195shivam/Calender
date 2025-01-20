import React, { useState } from "react";
import "../DateComponent/Dates.css";
export default function Dates({ dates, month, year }) {
  function handleClick() {
    console.log(
      dates,
      month,
      year,
      new Date().getDate(),
      new Date().getMonth(),
      new Date().getFullYear()
    );
  }
  return (
    <div
      onClick={handleClick}
      className={` ${
        dates === new Date().getDay() &&
        month === new Date().getMonth() + 1 &&
        year === new Date().getFullYear()
          ? "bg-primar"
          : ""
      }`}
    >
      {dates}
    </div>
  );
}
