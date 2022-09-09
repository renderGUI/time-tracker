import classes from "./Stopwatch.module.scss";
import { useState, useEffect } from "react";

const Stopwatch = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let stopwatch;
    if (props.stopwatchIsRunning) {
      stopwatch = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }

    return () => {
      clearInterval(stopwatch);
    };
  }, [props.stopwatchIsRunning]);

  const convertToHHMMSS = (seconds) => {
    const d = new Date(null);
    d.setSeconds(seconds);
    return d.toISOString().substr(11, 8);
  };

  return (
    <>
      <p className={classes.stopwatchTime}>{convertToHHMMSS(seconds)}</p>
    </>
  );
};

export default Stopwatch;
