import React from "react";
import "./App.css";
import Login from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import ResultPage from "./ResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/" element = {<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
