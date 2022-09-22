import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main id="overlay-body">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
