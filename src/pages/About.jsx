import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";

const About = () => {
  const TeamReview = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
                      <Link to="#">Home </Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
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
            <div className="col-lg-6 animated wow fadeInRight">
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
                {/* <Link to="#" className="main-btn">
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}

      <section className="modularize-company-history">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <span>Our History</span>
                <h3 className="title">It Started Like This</h3>
              </div>
            </div>
          </div>

          <div className="row pb-20">
            <div className="col-lg-12">
              <div className="modularize-company-history-paragraphs">
                <div className="para-1">
                  <span className="pb-10">What is Lorem Ipsum?</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="modularize-company-history-paragraphs">
                <div className="para-1">
                  <span className="pb-10">What is Lorem Ipsum?</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Review About Company */}

      <section className="modularize-company-team-review pt-80 pb-120  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-30">
                <span>Response</span>
                <h3 className="title">What They Say</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <Slider {...TeamReview}>
              <div className="col-lg-6 col-md-12">
                <div className="innerdiv">
                  <div className="div5 eachdiv">
                    <div className="userdetails">
                      <div className="imgbox">
                        <img
                          src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detbox">
                        <p className="name">Patrick Abrams</p>
                        <p className="designation">Verified Graduate</p>
                      </div>
                    </div>
                    <div className="review">
                      <h4>
                        Awesome teaching support from TAs who did the bootcamp
                        themselves. Getting guidance from them and learning from
                        their experiences was easy.
                      </h4>
                      <p>
                        “ The staff seem genuinely concerned about my progress
                        which I find really refreshing. The program gave me the
                        confidence necessary to be able to go out in the world
                        and present myself as a capable junior developer. The
                        standard is above the rest. You will get the personal
                        attention you need from an incredible community of smart
                        and amazing people. ”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="innerdiv">
                  <div className="div5 eachdiv">
                    <div className="userdetails">
                      <div className="imgbox">
                        <img
                          src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detbox">
                        <p className="name">Patrick Abrams</p>
                        <p className="designation">Verified Graduate</p>
                      </div>
                    </div>
                    <div className="review">
                      <h4>
                        Awesome teaching support from TAs who did the bootcamp
                        themselves. Getting guidance from them and learning from
                        their experiences was easy.
                      </h4>
                      <p>
                        “ The staff seem genuinely concerned about my progress
                        which I find really refreshing. The program gave me the
                        confidence necessary to be able to go out in the world
                        and present myself as a capable junior developer. The
                        standard is above the rest. You will get the personal
                        attention you need from an incredible community of smart
                        and amazing people. ”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="innerdiv">
                  <div className="div5 eachdiv">
                    <div className="userdetails">
                      <div className="imgbox">
                        <img
                          src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detbox">
                        <p className="name">Patrick Abrams</p>
                        <p className="designation">Verified Graduate</p>
                      </div>
                    </div>
                    <div className="review">
                      <h4>
                        Awesome teaching support from TAs who did the bootcamp
                        themselves. Getting guidance from them and learning from
                        their experiences was easy.
                      </h4>
                      <p>
                        “ The staff seem genuinely concerned about my progress
                        which I find really refreshing. The program gave me the
                        confidence necessary to be able to go out in the world
                        and present myself as a capable junior developer. The
                        standard is above the rest. You will get the personal
                        attention you need from an incredible community of smart
                        and amazing people. ”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Company Mission and Vision */}

      <section className="modularize-about-ourmission">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="section-title text-center mb-55">
                <span>Our Motive</span>
                <h3 className="title">What You Get</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 animated wow fadeInLeft pb-20">
              <div className="mission">
                <div className="mission-icon pb-20">
                  <span>Our Mission</span>
                  <i class="fa-solid fa-bullseye"></i>
                </div>
                <div className="mission-details">
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
                      <i className="fal fa-check"></i> Client happiness
                    </li>
                    <li>
                      <i className="fal fa-check"></i> World-class service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 animated wow fadeInRight">
              <div className="mission">
                <div className="mission-icon pb-20">
                  <span>Our Vision</span>
                  <i class="fa-solid fa-crosshairs"></i>
                </div>
                <div className="mission-details">
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
                      <i className="fal fa-check"></i> Client happiness
                    </li>
                    <li>
                      <i className="fal fa-check"></i> World-class service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map  */}

      {/* <section className="modularize-company-about-area pt-0 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="modularize-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.1359181428402!2d72.776026!3d21.148922000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac07e8d4b5bff36!2sSNS+Platina!5e0!3m2!1sen!2sus!4v1543994223146"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="modularize-about-get-in-touch pt-120 pb-115">
        <div className="container">
          <div className="row align-items-center mb-55">
            <div className="col-lg-6">
              <div className="section-title">
                <span>Contact Us</span>
                <h4 className="title"> Get in touch</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title pl-100">
                <p style={{ color: "#6c6a72" }}>
                  We are always looking for great ideas to work on. If you think
                  you have good idea and need help either on the validation,
                  execution or analytics side. Please do connect with us and we
                  can surely help you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="modularize-map mt-30">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.1359181428402!2d72.776026!3d21.148922000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac07e8d4b5bff36!2sSNS+Platina!5e0!3m2!1sen!2sus!4v1543994223146"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="contact-form-page-box mt-30"
                style={{ padding: "29px 28px 0px" }}
              >
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <textarea
                          name="#"
                          id="#"
                          cols="30"
                          rows="10"
                          placeholder="Write a Message"
                        ></textarea>
                        <button type="submit" className="main-btn">
                          Send a message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
