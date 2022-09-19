import React from "react";
import { Link } from "react-router-dom";
import { careersData } from "../js/Careers";
import Frontend from "../../src/assets/img/frontend.jpg";
import Bounce from "react-reveal/Bounce";

const Career = () => {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
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
                    <li className="breadcrumb-item active">/</li>
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

      <section className="modularize-career-area-environment pt-25 pb-115">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="career-environment-thumb pt-5">
                <img src="assets/images/office-environment.jpg" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 animated wow fadeInRight pt-5"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="modularize-career-environment">
                <div className="environment-title">
                  <span style={{ color: "#000" }}>
                    Come and Celebrate Success
                  </span>
                </div>
                <div>
                  <p>
                    <b>Be a solution ambassador : </b> We are proud to be
                    problem solvers. We just like the humans we work with –
                    coworkers, managers, clients – and genuinely experience
                    supporting one another succeed.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Enjoy the journey : </b> We ensure our crew feels
                    appreciated and valued. Launch Lunches and quarterly
                    show-and-tells are some of the methods we have fun our human
                    beings. We make the effort to forestall and acknowledge in
                    which we got here from in order that we don’t leave out how
                    outstanding the climb is.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Get it done : </b>
                    Clients trust us to build things that paintings and we take
                    that seriously. Our team will conquer obstacles, locate
                    answers and deliver notable results.
                  </p>
                </div>
                <div>
                  <p>
                    <b>Evolve and adapt : </b>
                    The humans that work here are smart, and smart humans know
                    you could usually get better. Mistakes are even ok as long
                    as you learn some thing from them. We trust a while at IT
                    Path, need to make you better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-career-third pt-120">
        <div className="row1-container-career">
          <Bounce left duration={2000}>
            <div className="box1 box1-down cyan-career">
              <h4>Competive & On-time Salary</h4>
              <p>Monitors activity to identify project roadblocks</p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
            </div>
          </Bounce>

          <Bounce down duration={1000}>
            <div className="box1 red-career">
              <h4>Flexible Working Hours</h4>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
            </div>
          </Bounce>

          <Bounce right duration={2000}>
            <div className="box1 box1-down blue-career">
              <h4>Daily Refreshment</h4>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
            </div>
          </Bounce>
        </div>

        <div className="row2-container-career">
          <Bounce up duration={3000}>
            <div className="box1 orange-career">
              <h4>Yearly Bonus and Hike</h4>
              <p>Regularly evaluates our talent to ensure quality</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
            </div>
          </Bounce>
        </div>
      </section>

      <section className="modularize-carrier-page-area pt-120 pb-90">
        <div className="modularize-career-openings mb-4 ">
          <span>Current Openings</span>
        </div>
        <div className="container">
          <div className="row">
            {careersData?.map((i, index) => {
              return (
                <div key={index} className="col-lg-12 col-md-12 mb-5">
                  <div className="modularize-carrier-job-card">
                    <div className="modularize-carrier-item">
                      <div className="modularize-career-img">
                        <img src={Frontend} alt="" />
                      </div>
                      <div>{i.jobTitle}</div>
                      <div>{i.Experience}</div>
                      <div className="modularize-job-location">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <p>{i.jobLocation}</p>
                      </div>
                      <div className="modularize-job-timing">
                        <p>{i.jobType}</p>
                      </div>
                      <div className="modularize-job-apply">
                        <Link onClick={scrolltoTop} to={`careerDetail/${i.id}`}>
                          {" "}
                          Apply Here
                        </Link>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
