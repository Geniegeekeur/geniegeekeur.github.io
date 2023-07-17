import React, { useState, useEffect } from "react";
import "../fonts/font.css";
import { Typography } from "@mui/material";

const Stopwatch = (running) => {
  const { run } = running;
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(run);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // // Method to reset timer back to 0
  // const reset = () => {
  //   setTime(0);
  // };
  return (
    <div>
      <Typography
        id="text"
        className="stopwatch"
        fontWeight="400"
        fontFamily="Inter"
        variant="h3"
        textAlign="center"
      >
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </Typography>
    </div>
  );
};

export default Stopwatch;
