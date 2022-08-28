import React from "react";

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
                      <a href="#">Home</a>
                    </li>
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

      <section className="infetech-projects-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-1.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Tech Solutions</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-2.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Smart Visions</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-3.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Platform Integration</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-4.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Web Development</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-5.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Virtual Reality</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-project-item">
                <img src="assets/images/project-6.jpg" alt="" />
                <div className="single-project-overlay">
                  <h4 className="title">Tech Solutions</h4>
                  <span>DESIGN / IDEAS</span>
                  <a href="#">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
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
