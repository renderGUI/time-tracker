import classes from "./NewTime.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "../components/Stopwatch";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const NewTime = () => {
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [shake, setShake] = useState(0);

  const inputRef = useRef();

  const toggleStopwatchHandler = () => {
    if (inputRef.current.value.trim().length === 0) {
      setShake(1);
    } else {
      setStopwatchIsRunning(!stopwatchIsRunning);
    }
  };

  return (
    <div className={classes.newTimeContainer}>
      <div
        className={classes.pillContainer}
        onAnimationEnd={() => setShake(0)}
        shake={shake}
      >
        <input
          className={classes.inputField}
          type="text"
          placeholder="What are you doing?"
          ref={inputRef}
        ></input>
        <Stopwatch />
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
        {!stopwatchIsRunning && (
          <Link className={classes.toLogLink} to="/log">
            >>>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewTime;
