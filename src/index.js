import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import "./styles/Responsive.css";
import { Provider } from "react-redux";
import { store } from "./stored/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
