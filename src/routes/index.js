import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { Landing } from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
