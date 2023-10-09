import React from "react";
import "./App.css";
import Login from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import ResultPage from "./Components/ResultPage";
import UseContextProvider from "./Context/UseContextProvider";

function App() {
  return (
    <div className="App">
      <UseContextProvider>
      <Routes>
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/" element = {<Login/>} />
        </Routes>
      </UseContextProvider>
      </div>
  );
}

export default App;
