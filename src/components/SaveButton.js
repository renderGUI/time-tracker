import classes from "./SaveButton.module.scss";
import { useContext } from "react";
import { LogContext } from "../contexts/log-context";
import { useNavigate } from "react-router-dom";

const SaveButton = () => {
  const { seconds, inputRef, convertToHHMMSS } = useContext(LogContext);
  const navigate = useNavigate();

  const saveHandler = () => {
    const newLoggedTask = {
      task: inputRef.current.value,
      time: convertToHHMMSS(seconds),
    };

    if (localStorage.getItem("log") === null) {
      localStorage.setItem("log", JSON.stringify([newLoggedTask]));
      navigate("/log");
    } else {
      const currentLog = JSON.parse(localStorage.getItem("log"));
      const updatedLog = [...currentLog, newLoggedTask];
      localStorage.setItem("log", JSON.stringify(updatedLog));
      navigate("/log");
    }
  };

  return (
    <div className={classes.buttonContainer}>
      <button
        className={classes.saveButton}
        type="button"
        onClick={saveHandler}
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
