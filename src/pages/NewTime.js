import classes from "./NewTime.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Stopwatch from "../components/Stopwatch";
import { Link } from "react-router-dom";

const NewTime = () => {
  const toggleStopwatchHandler = () => {};
  
  return (
    <div className={classes.newTimeContainer}>
      <div className={classes.pillContainer}>
        <input
          className={classes.inputField}
          type="text"
          placeholder="What are you doing?"
        ></input>
        <Stopwatch />
        <button
          onClick={toggleStopwatchHandler}
          className={classes.stopwatchButton}
          type="button"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <Link className={classes.toLogLink} to="/log">
          >>>
        </Link>
      </div>
    </div>
  );
};

export default NewTime;
