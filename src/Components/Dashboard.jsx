import React from "react";
import DashboardNavigation from "./DashboardNavigation";
import MyProducts from "./MyProducts";
import Payouts from "./Payouts";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Dashboard = () => {
  return <DashboardNavigation />;
};

export default Dashboard;
