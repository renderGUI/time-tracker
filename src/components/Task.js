import classes from "./Task.module.scss";

const Task = (props) => {
  return (
    <div className={classes.taskContainer}>
      <p className={classes.task}>{props.task}</p>
      <p className={classes.time}>{props.time}</p>
    </div>
  );
};

export default Task;
