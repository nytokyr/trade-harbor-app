import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import HomePage from "./HomePage";

import reportWebVitals from "./reportWebVitals";
import Layout from "./container/Layout";
import { UserProvider } from "./context/UserContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            {/* Update routing */}
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
