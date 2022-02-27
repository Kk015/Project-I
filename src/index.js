import React from "react";
import ReactDOM from "react-dom";
import "react-router-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv8CmPRlEX9e5PBr0cIdwk1PbnIA-P0As",
  authDomain: "project-i-28af1.firebaseapp.com",
  projectId: "project-i-28af1",
  storageBucket: "project-i-28af1.appspot.com",
  messagingSenderId: "454022025478",
  appId: "1:454022025478:web:af804661b5110e6454ce87",
  measurementId: "G-G1EB35VME4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
