import classes from "./Task.module.scss";
import DeleteButton from "./DeleteButton";
import { useContext } from "react";
import { LogContext } from "../contexts/log-context";

const Task = (props) => {
  const { inEditMode } = useContext(LogContext);

  return (
    <div className={classes.taskContainer}>
      <p className={classes.task}>{props.task}</p>
      <p className={classes.time}>{props.time}</p>
      {inEditMode && (
        <DeleteButton
          setLog={props.setLog}
          currentItemId={props.currentItemId}
        />
      )}
    </div>
  );
};

export default Task;
