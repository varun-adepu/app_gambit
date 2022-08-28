import React from "react";

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
                      <a href="#">Home</a>
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

      <section className="infetech-company-about-area">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="company-about-thumb">
                <img src="assets/images/company-thumb-2.png" alt="" />
                <div className="icon">
                  <img src="assets/images/about-logo.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="infetech-about-content">
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
                <a href="#" className="main-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
