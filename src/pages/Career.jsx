import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      <section className="breadcrumb-area mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Carriers</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Carrier
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-carrier-page-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 mb-5">
              <div className="modularize-carrier-job-card">
                <div className="modularize-carrier-item">
                  <div>
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <div>Front End Developer</div>
                  <div>Experience : 1 - 2 Years</div>
                  <div className="modularize-job-location">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p>Surat</p>
                  </div>
                  <div className="modularize-job-timing">
                    <p>Full Time</p>
                  </div>
                  <div className="modularize-job-apply">
                    <a href=""> Apply Here</a>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 mb-5">
              <div className="modularize-carrier-job-card">
                <div className="modularize-carrier-item">
                  <div>
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <div>Front End Developer</div>
                  <div>Experience : 1 - 2 Years</div>
                  <div className="modularize-job-location">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p>Surat</p>
                  </div>
                  <div className="modularize-job-timing">
                    <p>Full Time</p>
                  </div>
                  <div className="modularize-job-apply">
                    <a href=""> Apply Here</a>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
