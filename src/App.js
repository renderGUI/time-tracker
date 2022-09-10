import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./pages/Log";
import NewTime from "./pages/NewTime";
import { LogContextProvider } from "./contexts/log-context";

const App = () => {
  return (
    <div>
      <LogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewTime />} />
            <Route path="/log" element={<Log />} />
          </Routes>
        </BrowserRouter>
      </LogContextProvider>
    </div>
  );
};

export default App;
