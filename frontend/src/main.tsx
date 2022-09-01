import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/Auth/AuthProvider";
import { BarbecueContextProvider } from "./context/Barbecue/BarbecueProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { App } from "./App";

import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <BarbecueContextProvider>
            <App />
          </BarbecueContextProvider>
          <ToastContainer />
        </AuthContextProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
