import React from "react";
import { Link } from "react-router-dom";
import { scrolltoTop } from "./Landing";

const Project = () => {
  return (
    <>
      {/* BreadCrum  */}

      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Our Projects</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Projects
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Card  */}

      <section className="modularize-projects-grid-area pt-120 pb-90">
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-55">
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  Our Projects
                </span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Link onClick={scrolltoTop} to="balance-it">
                <div className="single-project-item">
                  <img src="assets/images/project-1.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">BALANCE IT</h4>
                    <span>DESIGN / IDEAS</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link onClick={scrolltoTop} to="star-oil">
                <div className="single-project-item">
                  <img src="assets/images/project-2.jpg" alt="" />
                  <div className="single-project-overlay">
                    <h4 className="title">STAR OIL</h4>
                    <span>DESIGN / IDEAS</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-3.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">CONTENTBIN</h4>
                  <span>DESIGN / IDEAS</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-4.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">ANOMALY</h4>
                  <span>DESIGN / IDEAS</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-5.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">INVESTMENT LOOP</h4>
                  <span>DESIGN / IDEAS</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-6.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">TECH SOLUTIONS</h4>
                  <span>DESIGN / IDEAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
