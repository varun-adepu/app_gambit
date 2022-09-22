import React from "react";
import { Link } from "react-router-dom";
import { scrolltoTop } from "./Landing";

const PageNotFound = () => {
  return (
    <section className="modularize-page-not-found-area">
      <div className="page-not-found-both">
        <div className="page-not-found-text">
          <span>Sorry Page Not Found</span>
        </div>
        <div className="page-not-found-img">
          <img src="assets/images/404.png" alt="" />
        </div>
        <div className="pb-10">
          <Link
            onClick={scrolltoTop}
            style={{ border: "1px solid #000" }}
            to="/"
            className="main-btn"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
