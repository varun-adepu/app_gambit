import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* BreadCrum Starts */}

      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">About us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Company We’re Partner of Your Innovations */}

      <section className="modularize-company-about-area">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="company-about-thumb">
                <img src="assets/images/company-thumb-2.png" alt="" />
                <div
                  className="icon"
                  style={{ width: "230px", height: "200px" }}
                >
                  <img src="assets/images/cloudPartner-footer.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modularize-about-content">
                <span>About Our Company</span>
                <h3 className="title">We’re Partner of Your Innovations</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </p>
                <ul>
                  <li>
                    <i className="fal fa-check"></i> Best quality support
                  </li>
                  <li>
                    <i className="fal fa-check"></i> Serve the best
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fal fa-check"></i> Money back guarantee
                  </li>
                  <li>
                    <i className="fal fa-check"></i> Trusted Professionals
                  </li>
                </ul>
                <Link to="#" className="main-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="modularize-company-about-area pt-0 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div class="modularize-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.1359181428402!2d72.776026!3d21.148922000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac07e8d4b5bff36!2sSNS+Platina!5e0!3m2!1sen!2sus!4v1543994223146"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
