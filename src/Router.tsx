import { Routes, Route } from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Dashboard } from "./pages/Dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
