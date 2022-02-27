import React from "react";
import "./App.css";
import Navbaro from "./Navbar/Navbar";
import Navbaro2 from "./Navbar2/Navbar2";
import Home from "./Homepage/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./Sign-in/sign-in";
import Sign2 from "./Sign2/Sign2";
import Home2 from "./Home2/Home2";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbaro />
              <Home />
            </div>
          }
        />
        <Route
          path="/sign-in"
          element={
            <div>
              <Navbaro />
              <Home />
              <Signin />
            </div>
          }
        ></Route>
        <Route
          path="/sign2"
          element={
            <div>
              <Navbaro />
              <Home />
              <Sign2 />
            </div>
          }
        ></Route>
        <Route
          path="/Home2"
          element={
            <div>
              <Navbaro2 />
              <Home2 />
            </div>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
