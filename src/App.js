import React from "react";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Routes, Route, NavLink } from "react-router-dom"; //link
import HomePage from "./Page/HomePage/HomePage";
import TeamPage from "./Page/TeamPage/TeamPage";
import { useLocation } from "react-router-dom";

export default function App() {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  let activeClassName = "underline";
  const location = useLocation();
  console.log(location);

  return (
    <div className="card-container">
      <h1>Welcome to React Router!</h1>
      <BottomNavigation showLabels>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Home </h4>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>About </h4>
        </NavLink>
        <NavLink
          to="/team"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Team </h4>
        </NavLink>
      </BottomNavigation>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h1>ABOUT PAGE</h1>} />
        <Route path="team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}
