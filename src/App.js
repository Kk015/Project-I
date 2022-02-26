import React from "react";
import "./App.css";
import Navbaro from "./Navbar/Navbar";
import Home from "./Homepage/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./Sign-in/sign-in";
import Sign2 from "./Sign2/Sign2";

function App() {
  return (
    <main>
      <Navbaro />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in"
          element={
            <div>
              <Home /> <Signin />
            </div>
          }
        ></Route>
        <Route
          path="/sign2"
          element={
            <div>
              <Home /> <Sign2 />
            </div>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
