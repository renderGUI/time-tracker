import classes from "./DeleteButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = (props) => {
  const deleteHandler = () => {
    const currentLog = JSON.parse(localStorage.getItem("log"));
    const updatedLog = currentLog.filter((item) => {
      return item.id !== props.currentItemId;
    });
    localStorage.setItem("log", JSON.stringify(updatedLog));
    props.setLog(updatedLog);
  };

  return (
    <>
      <button
        onClick={deleteHandler}
        className={classes.deleteButton}
        type="button"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};

export default DeleteButton;
