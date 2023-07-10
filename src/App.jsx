import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/ProjectDetails";
import ProfilePage from "./Components/ProfilePage";
import Dashboard from "./Components/Dashboard";
import Payouts from "./Components/Payouts";
import MyProducts from "./Components/MyProducts";
import NewProductForm from "./Components/NewProductForm";
import DashboardMain from "./Components/DashboardMain";

const App = () => {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:id" element={<ProjectDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardMain />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="products" element={<MyProducts />} />
          </Route>
          <Route path="/new" element={<NewProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
