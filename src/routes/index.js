import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { Landing } from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Services from "../pages/Services";
import OurTeam from "../pages/OurTeam";
import Blog from "../pages/Blog";
import Career from "../pages/Career";
import CareerDetail from "../pages/CareerDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/careerDetail/:id" element={<CareerDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
