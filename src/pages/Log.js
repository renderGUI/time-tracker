import classes from "./Log.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LogContext } from "../contexts/log-context";
import Task from "../components/Task";
import ReactPaginate from "react-paginate";

const Log = () => {
  const navigate = useNavigate();
  const { inEditMode, setInEditMode, convertToHHMMSS } = useContext(LogContext);
  const [log, setLog] = useState(
    localStorage.getItem("log") === null
      ? []
      : JSON.parse(localStorage.getItem("log"))
  );

  // React Paginate
  const [pageNumber, setPageNumber] = useState(0);
  const tasksPerPage = 5;
  const pagesVisited = pageNumber * tasksPerPage;
  const displayTasks = log
    .slice(pagesVisited, pagesVisited + tasksPerPage)
    .map((item) => {
      return (
        <Task
          key={item.id}
          task={item.task}
          time={item.time}
          setLog={setLog}
          currentItemId={item.id}
        />
      );
    });
  const pageCount = Math.ceil(log.length / tasksPerPage);
  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const newHandler = () => {
    navigate("/");
  };

  const editHandler = () => {
    setInEditMode(!inEditMode);
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
            TOTAL:{" "}
            <span>
              {convertToHHMMSS(
                log.reduce((sum, item) => {
                  return (sum += item.seconds);
                }, 0)
              )}
            </span>
          </h2>
        </div>
        <hr />
        {log.length === 0 && (
          <p className={classes.emptyLog}>No logged tasks!</p>
        )}
        {log.length > 0 && displayTasks}
        {log.length > 0 && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePageHandler}
            containerClassName={classes.paginationButtons}
            activeClassName={classes.paginationActive}
          />
        )}
        <hr />
        <div className={classes.bottomSection}>
          {!inEditMode && (
            <button
              onClick={newHandler}
              className={classes.newButton}
              type="button"
            >
              Start a New Task
            </button>
          )}
          <button
            onClick={editHandler}
            className={classes.editButton}
            type="button"
          >
            {inEditMode ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Log;
