import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./Components/ProjectDetails";
import ProfilePage from "./Components/ProfilePage";

const App = () => {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:projectdetails" element={<ProjectDetails />} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
