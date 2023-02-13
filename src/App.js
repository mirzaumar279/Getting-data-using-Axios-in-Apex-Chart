import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Chairman from "./Chairman";
import Dark from "./Dark";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Chairman />}></Route>
        <Route path="/d" element={<Dark />}></Route>
      </Routes>
    </div>
  );
}
export default App;
