import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <h1>NAV</h1>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="about" element={<p>about</p>} />
      </Routes>
    </div>
  );
};
export default App;
