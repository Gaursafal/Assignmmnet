import React from "react";
import ReactDOM from "react-dom";
// import {  BrowserRouter as Router } from "react-router-dom"
// import App from "./App";
import Dashboard from "./Dashboard/Dashboard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
      <Dashboard />
      // </React.StrictMode>
      ,
  rootElement
);
