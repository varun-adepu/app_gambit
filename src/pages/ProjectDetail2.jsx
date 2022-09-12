import React from "react";
import { Link } from "react-router-dom";

const ProjectDetail2 = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Investment loop</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Project
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Investment loop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-projects-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="modularize-project-tools mt-5">
            <div className="row ">
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Platform</span>
                  <p>Angular, AWS</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Language</span>
                  <p>Angular 6</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>SDK : Plivo</span>
                  <p>
                    SMS API, Voice API, & Global Carrier Provider SMS API, Voice
                    API, & Global Carrier Provider
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Category</span>
                  <p>Web Development</p>
                </div>
              </div>

              {/* <div className=""></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail2;
