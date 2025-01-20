import React from 'react'
import  { useEffect, useState ,useRef } from "react";

export default function InfiniteCalender() {const [currentMonth, setCurrentMonth] = useState(new Date()); // The current month to display
    const [displayedMonths, setDisplayedMonths] = useState([new Date()]); // List of months that are displayed
    const containerRef = useRef();
  
    // Utility function to generate an array of dates for the current month
    const generateMonthDates = (date) => {
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const daysInMonth = [];
  
      for (let day = startOfMonth.getDate(); day <= endOfMonth.getDate(); day++) {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        daysInMonth.push(currentDate);
      }
  
      return daysInMonth;
    };
  
    // Event listener for scroll events to detect when the user reaches the top or bottom
    const handleScroll = (e) => {
      if (!containerRef.current) return;
  
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      
      // When reaching the top, load the previous month
      if (scrollTop === 0) {
        loadPreviousMonth();
      }
  
      // When reaching the bottom, load the next month
      if (scrollTop + clientHeight === scrollHeight) {
        loadNextMonth();
      }
    };
  
    // Load the previous month
    const loadPreviousMonth = () => {
      setCurrentMonth((prevDate) => {
        const newMonth = new Date(prevDate);
        newMonth.setMonth(newMonth.getMonth() - 1);
        return newMonth;
      });
    };
  
    // Load the next month
    const loadNextMonth = () => {
      setCurrentMonth((prevDate) => {
        const newMonth = new Date(prevDate);
        newMonth.setMonth(newMonth.getMonth() + 1);
        return newMonth;
      });
    };
  
    // Effect to update the displayed months when the current month changes
    useEffect(() => {
      setDisplayedMonths((prevMonths) => {
        const lastMonth = prevMonths[prevMonths.length - 1];
        const firstMonth = prevMonths[0];
        
        // Add the new month to the displayed list
        const newMonths = [...prevMonths];
        
        // Insert the new previous month at the beginning or the new next month at the end
        if (currentMonth.getMonth() < lastMonth.getMonth()) {
          newMonths.unshift(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1));
        } else if (currentMonth.getMonth() > firstMonth.getMonth()) {
          newMonths.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1));
        }
        
        return newMonths;
      });
    }, [currentMonth]);
  
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
  
    return (
      <div
        ref={containerRef}
        style={{
          height: "500px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {displayedMonths.map((month, index) => {
          const monthDates = generateMonthDates(month);
          const monthName = month.toLocaleString("default", { month: "long", year: "numeric" });
  
          return (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>{monthName}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
                {monthDates.map((date) => (
                  <div key={date.toString()} style={{ textAlign: "center" }}>
                    {date.getDate()}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
}
