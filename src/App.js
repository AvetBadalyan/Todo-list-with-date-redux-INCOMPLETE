import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleTask from "./Pages/singleTask/SingleTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="single-task" element={<SingleTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
