import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Dashboard } from "./pages/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
