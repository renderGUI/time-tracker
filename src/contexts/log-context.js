import { createContext, useState, useRef } from "react";

export const LogContext = createContext({});

export const LogContextProvider = (props) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef();
  const [loggedTask, setLoggedTask] = useState();
  const [loggedTime, setLoggedTime] = useState();

  const convertToHHMMSS = (seconds) => {
    const d = new Date(null);
    d.setSeconds(seconds);
    return d.toISOString().substr(11, 8);
  };

  const value = {
    inEditMode,
    setInEditMode,
    seconds,
    setSeconds,
    inputRef,
    loggedTask,
    setLoggedTask,
    loggedTime,
    setLoggedTime,
    convertToHHMMSS,
  };

  return (
    <LogContext.Provider value={value}>{props.children}</LogContext.Provider>
  );
};
