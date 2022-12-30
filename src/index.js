import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "wouter";
import Layout from "./components/Layout/Layout";
//import TestApp from "./components/TestApp/TestApp";
import runConfig from "./config";

runConfig();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router base="/krachpage">
      <Layout />
    </Router>
  </React.StrictMode>
);
