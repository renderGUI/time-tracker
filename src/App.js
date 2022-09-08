import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./pages/Log";
import NewTime from "./pages/NewTime";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewTime />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
