import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Scan from "./components/Scan";
import Profile from "./components/Profile";
import Reward from "./components/Reward";
import Redeem from "./components/Redeem";
import Rank from "./components/Rank";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/scan" element={<Scan />} />
        <Route path="/dashboard/profile" element={<Profile/>} />
        <Route path="/dashboard/reward" element={<Reward/>} />
        <Route path="/dashboard/redeem" element={<Redeem/>} />
        <Route path="/dashboard/rank" element={<Rank/>} />
      </Route>
    </Routes>
  );
};

export default App;
