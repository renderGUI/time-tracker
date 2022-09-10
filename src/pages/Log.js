import classes from "./Log.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Task from "../components/Task";

const Log = () => {
  const [log, setLog] = useState(
    localStorage.getItem("log") === null
      ? []
      : JSON.parse(localStorage.getItem("log"))
  );

  const navigate = useNavigate();

  const newHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes.logContainer}>
      <div className={classes.logCard}>
        <div className={classes.topSection}>
          <h1 className={classes.mainHeading}>
            Time
            <br />
            <span>Tracker</span>
          </h1>
          <h2 className={classes.totalTime}>
            TOTAL: <span>00:00:00</span>
          </h2>
        </div>
        <hr />
        {log.length === 0 && (
          <p className={classes.emptyLog}>No logged tasks!</p>
        )}
        {log.length > 0 &&
          log.map((item) => {
            return <Task task={item.task} time={item.time} />;
          })}
        <hr />
        <div className={classes.bottomSection}>
          <button
            onClick={newHandler}
            className={classes.newButton}
            type="button"
          >
            Start a New Task
          </button>
          <button className={classes.editButton} type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Log;
