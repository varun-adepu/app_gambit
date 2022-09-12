import React from "react";
import { Link } from "react-router-dom";

const ProjectDetail1 = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Balance It</h2>
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
                      Balance It
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
            <div className="col-lg-3">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="projects-details-thumb">
                <img src="/assets/images/balance_it_4.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="projects-details-list-box">
                <div className="projects-list-item">
                  <span>Platform:</span>
                  <h4 className="title">Android</h4>
                </div>
                <div className="projects-list-item">
                  <span>Language:</span>
                  <h4 className="title">Kotlin</h4>
                </div>
                <div className="projects-list-item">
                  <span>SDK : Plivo :</span>
                  <h4 className="title">
                    SMS API, Voice API, & Global Carrier Provider
                  </h4>
                </div>
                <div className="projects-list-item">
                  <span>Category:</span>
                  <h4 className="title">Mobile Development</h4>
                </div>
                {/* <div className="projects-list-item">
                  <span>Date:</span>
                  <h4 className="title">26 Feb, 2022</h4>
                </div> */}
                {/* <div className="projects-list-item border-0">
                  <span>Value:</span>
                  <h4 className="title">6800 USD</h4>
                </div> */}
                {/* <div className="social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="projects-details-content">
                <div className="text">
                  <h3 className="title">Balance It</h3>
                  <p>
                    We believe technology is just a carrier to help build a
                    solution, there is no one right way if the execution is done
                    properly. These are some of the current technologies we use
                    to build solutions.
                  </p>
                </div>
                <div className="small-text">
                  <h4 className="title">The Challenge of Project</h4>
                  <p>
                    Lorem Ipsum has been the ndustry standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries. Lorem Ipsum is simply
                    dummy text of the new design printng and type setting Ipsum
                    Take a look at our round up of the best shows coming soon to
                    your telly box has been the is industrys.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Lorem Ipsum
                      generators on the Internet tend uses a dictionary.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> The majority have
                      alteration in some form of over 200 Latin words.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> There are many
                      variations of passages of available slightly.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> We are providing
                      across ome form our customer base.
                    </li>
                  </ul>
                </div>
                {/* <div className="projects-details-page-changer mt-120">
                  <ul>
                    <li>
                      <div className="icon">
                        <a href="#">
                          <i className="fal fa-long-arrow-left"></i> Previous
                        </a>{" "}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <a href="#">
                          Next <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail1;
