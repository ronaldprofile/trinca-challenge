import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/Auth/AuthProvider";
import { BarbecueContextProvider } from "./context/Barbecue/BarbecueProvider";
import { ToastContainer } from "react-toastify";
import { App } from "./App";

import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <BarbecueContextProvider>
          <App />
        </BarbecueContextProvider>
        <ToastContainer />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
