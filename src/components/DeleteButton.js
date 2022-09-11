import classes from "./DeleteButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = () => {  
  const deleteHandler = () => {};

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
