import React from "react";
import "./App.css";
import Navbaro from "./Navbar/Navbar";
import Home from "./Homepage/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbaro />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
