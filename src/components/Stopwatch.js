import classes from "./Stopwatch.module.scss";
import { useContext, useEffect } from "react";
import { LogContext } from "../contexts/log-context";

const Stopwatch = (props) => {
  const { seconds, setSeconds, convertToHHMMSS } = useContext(LogContext);

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

  return (
    <>
      <p className={classes.stopwatchTime}>{convertToHHMMSS(seconds)}</p>
    </>
  );
};

export default Stopwatch;
