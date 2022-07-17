import { Routes, Route } from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Dashboard } from "./pages/Dashboard";
import { Details } from "./pages/Details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
