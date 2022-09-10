import classes from "./NewTime.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "../components/Stopwatch";
import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { LogContext } from "../contexts/log-context";
import SaveButton from "../components/SaveButton";

const NewTime = () => {
  const { inputRef } = useContext(LogContext);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [stopwatchStarted, setStopwatchStarted] = useState(false);
  const [shake, setShake] = useState(0);

  const toggleStopwatchHandler = () => {
    if (inputRef.current.value.trim().length === 0) {
      setShake(1);
    } else {
      setStopwatchStarted(true);
      setStopwatchIsRunning(!stopwatchIsRunning);
    }
  };

  return (
    <div className={classes.newTimeContainer}>
      <div
        className={classes.pillContainer}
        onAnimationEnd={() => setShake(0)}
        shake={shake}
        style={{ boxShadow: stopwatchIsRunning ? "0px 0px 15px #01315a" : "" }}
      >
        <input
          className={classes.inputField}
          type="text"
          placeholder="Start with a new task..."
          disabled={stopwatchStarted}
          ref={inputRef}
        ></input>
        <Stopwatch stopwatchIsRunning={stopwatchIsRunning} />
        <button
          onClick={toggleStopwatchHandler}
          className={classes.stopwatchButton}
          type="button"
          style={{
            backgroundColor: stopwatchIsRunning ? "#dd7777" : "#77dd77",
          }}
        >
          <FontAwesomeIcon icon={stopwatchIsRunning ? faPause : faPlay} />
        </button>
        {!stopwatchIsRunning && !stopwatchStarted && (
          <Link className={classes.toLogLink} to="/log">
            >>>
          </Link>
        )}
      </div>
      {!stopwatchIsRunning && stopwatchStarted && <SaveButton />}
    </div>
  );
};

export default NewTime;
