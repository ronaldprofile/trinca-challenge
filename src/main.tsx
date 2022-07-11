import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import { App } from "./App";

import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        <ToastContainer />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
