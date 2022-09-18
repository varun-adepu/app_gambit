import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slider from "react-slick/lib/slider";

const Services = () => {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const serviceTechTools = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    // BreadCrumer
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Services</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Computing */}

      <section className="modularize-about-4-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  Our Services
                </span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 animated wow fadeInLeft "
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="about-thumb-4 pr-50">
                <img src="assets/images/cloud-computing.jpg" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 animated wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="about-thumb-content">
                <div className="section-title">
                  <span>We Do More For Your Business</span>
                  <h3>Cloud Consulting </h3>
                </div>
                <div className="about-sub-item mt-25">
                  <div className="number">
                    {/* <span>01</span> */}
                    <i class="fa-solid fa-circle"></i>
                  </div>
                  <div className="content">
                    <p>
                      We have years of experience working around Cloud
                      Technologies.
                    </p>
                  </div>
                </div>
                <div className="about-sub-item mt-25">
                  <div className="number">
                    <i class="fa-solid fa-circle"></i>
                  </div>
                  <div className="content">
                    <p>
                      Our core skills include Evaluation, Migration,
                      Docker/Kubernetes, Serverless, DevOps, and
                      Well-Architected Cloud Environment.
                    </p>
                  </div>
                </div>
                <Link
                  onClick={scrolltoTop}
                  className="main-btn mt-55"
                  to="/services/cloud-consultant"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Tools for your Web Developement */}

      <section className="modularize-about-5-area">
        <div className="container">
          <div className="row">
            <Fade up>
              <div className="col-lg-6">
                <div className="about-thumb-content pr-50">
                  <div className="section-title">
                    <span>We Do More For Your Business</span>
                    <h3>Web Development </h3>
                  </div>
                  <div className="about-sub-item mt-25">
                    <div className="number">
                      <i
                        style={{ color: "#fff", fontSize: "11px" }}
                        class="fa-solid fa-circle"
                      ></i>
                    </div>
                    <div className="content">
                      <p>JavaScript and NodeJS is our core skills.</p>
                    </div>
                  </div>
                  <div className="about-sub-item mt-25">
                    <div className="number">
                      <i
                        style={{ color: "#fff", fontSize: "11px" }}
                        class="fa-solid fa-circle"
                      ></i>
                    </div>
                    <div className="content">
                      <p>
                        From server-based applications to server-less
                        applications, we have done it all.
                      </p>
                    </div>
                  </div>
                  <Link className="main-btn mt-55 mb-55" to="#">
                    Learn More
                  </Link>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div
                className="col-lg-6 animated wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="about-thumb-4">
                  <img
                    style={{
                      boxShadow: "0px 2px 2px 1px rgb(227 227 227)",
                    }}
                    src="assets/images/web-development.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Mobile App Developement */}

      <section className="modularize-about-6-area pt-120">
        <div className="container">
          <div className="row">
            <Fade left>
              <div className="col-lg-6">
                <div className="about-thumb-4 pr-50">
                  <img src="assets/images/mobile-development.jpg" alt="" />
                </div>
              </div>
            </Fade>
            <Fade up>
              <div className="col-lg-6">
                <div className="about-thumb-content">
                  <div className="section-title">
                    <span>We Do More For Your Business</span>
                    <h3>Mobile Development </h3>
                  </div>
                  <div className="about-sub-item mt-25">
                    <div className="number">
                      <i class="fa-solid fa-circle"></i>
                    </div>
                    <div className="content">
                      <p>
                        From Native iOS and Android to using hybrid technologies
                        like Ionic and React Native
                      </p>
                    </div>
                  </div>
                  <div className="about-sub-item mt-25">
                    <div className="number">
                      <i class="fa-solid fa-circle"></i>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, repellendus libero molestiae id ratione
                        minus reprehenderit hic, aut, cumque esse?
                      </p>
                    </div>
                  </div>
                  <Link className="main-btn mt-55" to="#">
                    Learn More
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Technology Path */}

      <section className="modularize-technology-area modularize-technology-service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="technology-box animated wow fadeIn"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="section-title">
                      <span>Technology Path</span>
                      <h3 className="title">
                        Trusted IT Solution & Service Business Agency
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-8 pl-70">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="technology-service">
                          <div className="icon">
                            <svg
                              height="24px"
                              width="24px"
                              fill="#fff"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              //   xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              //   style="enable-background:new 0 0 512 512;"
                              //   xml:space="preserve"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M469.333,106.667H362.667V85.333c0-23.531-19.135-42.667-42.667-42.667H192c-23.531,0-42.667,19.135-42.667,42.667
                                                                v21.333H42.667C19.135,106.667,0,125.802,0,149.333v64C0,236.865,19.135,256,42.667,256h170.667v-10.667
                                                                c0-5.896,4.771-10.667,10.667-10.667h64c5.896,0,10.667,4.771,10.667,10.667V256h170.667C492.865,256,512,236.865,512,213.333
                                                                v-64C512,125.802,492.865,106.667,469.333,106.667z M320,106.667H192V85.333h128V106.667z"
                                    />
                                    <path
                                      d="M506.083,267.51c-3.635-1.802-7.979-1.385-11.188,1.052c-7.583,5.74-16.417,8.771-25.563,8.771H298.667v32
                                                                c0,5.896-4.771,10.667-10.667,10.667h-64c-5.896,0-10.667-4.771-10.667-10.667v-32H42.667c-9.146,0-17.979-3.031-25.563-8.771
                                                                c-3.219-2.458-7.552-2.875-11.188-1.052C2.292,269.313,0,273.01,0,277.063v149.604c0,23.531,19.135,42.667,42.667,42.667h426.667
                                                                c23.531,0,42.667-19.135,42.667-42.667V277.063C512,273.01,509.708,269.313,506.083,267.51z"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="content">
                            <h4 className="title">Experienced</h4>
                            <p>Morbi nec finibus misd</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="technology-service">
                          <div className="icon">
                            <svg
                              height="24px"
                              width="24px"
                              fill="#fff"
                              id="Layer_1"
                              enableBackground="new 0 0 512 512"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clipRule="evenodd"
                                d="m64.673 211.213 94.098-82.356c-1.304-3.562-2.015-7.408-2.015-11.421 0-18.348 14.874-33.221 33.221-33.221 17.997 0 32.65 14.31 33.205 32.172l74.372 26.038c6.093-7.153 15.165-11.69 25.297-11.69 5.717 0 11.096 1.444 15.793 3.987l85.739-73.255c-1.216-3.454-1.88-7.168-1.88-11.038 0-18.347 14.874-33.221 33.221-33.221 18.349 0 33.223 14.874 33.223 33.221 0 18.349-14.874 33.223-33.223 33.223-5.716 0-11.096-1.444-15.792-3.987l-85.739 73.255c1.216 3.454 1.88 7.168 1.88 11.038 0 18.347-14.874 33.221-33.223 33.221-17.996 0-32.648-14.31-33.203-32.171l-74.372-26.038c-6.094 7.153-15.165 11.69-25.298 11.69-5.579 0-10.835-1.377-15.451-3.807l-94.098 82.356c1.304 3.561 2.015 7.408 2.015 11.421 0 18.349-14.874 33.221-33.223 33.221-18.346-.002-33.22-14.874-33.22-33.223s14.874-33.221 33.221-33.221c5.579 0 10.836 1.376 15.452 3.806zm365.779-61.954c-8.261 0-15 6.738-15 15v306.128c0 8.262 6.739 15 15 15h50.548c8.263 0 15.001-6.738 15.001-15v-306.128c0-8.262-6.737-15-15.001-15zm-132.875 122.33c-8.262 0-14.999 6.738-14.999 15v186.934c0 8.263 6.738 15 14.999 15h50.55c8.262 0 14.999-6.738 14.999-15 0-62.31 0-124.622 0-186.934 0-8.262-6.737-15-14.999-15-16.851 0-33.699 0-50.55 0zm-132.873-43.917c-8.263 0-15.001 6.738-15.001 15v233.987c0 8.262 6.737 15 15.001 15h50.548c8.261 0 15-6.738 15-15v-233.987c0-8.262-6.739-15-15-15zm-132.874 129.117h50.547c8.262 0 15.001 6.738 15.001 15v108.005c0 8.262-6.739 15-15.001 15h-50.547c-8.262 0-15.001-6.738-15.001-15v-108.005c.001-8.263 6.74-15 15.001-15z"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="content">
                            <h4 className="title">Convenience</h4>
                            <p>Morbi nec finibus misd</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="technology-service">
                          <div className="icon">
                            <svg
                              height="24px"
                              width="24px"
                              fill="#fff"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              //   xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 511.999 511.999"
                              //   style="enable-background:new 0 0 511.999 511.999;"
                              //   xml:space="preserve"
                            >
                              <g>
                                <g>
                                  <path
                                    d="M438.09,273.32h-39.596c4.036,11.05,6.241,22.975,6.241,35.404v149.65c0,5.182-0.902,10.156-2.543,14.782h65.461
                                                            c24.453,0,44.346-19.894,44.346-44.346v-81.581C512,306.476,478.844,273.32,438.09,273.32z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M107.265,308.725c0-12.43,2.205-24.354,6.241-35.404H73.91c-40.754,0-73.91,33.156-73.91,73.91v81.581
                                                            c0,24.452,19.893,44.346,44.346,44.346h65.462c-1.641-4.628-2.543-9.601-2.543-14.783V308.725z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M301.261,234.815h-90.522c-40.754,0-73.91,33.156-73.91,73.91v149.65c0,8.163,6.618,14.782,14.782,14.782h208.778
                                                            c8.164,0,14.782-6.618,14.782-14.782v-149.65C375.171,267.971,342.015,234.815,301.261,234.815z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M256,38.84c-49.012,0-88.886,39.874-88.886,88.887c0,33.245,18.349,62.28,45.447,77.524
                                                            c12.853,7.23,27.671,11.362,43.439,11.362c15.768,0,30.586-4.132,43.439-11.362c27.099-15.244,45.447-44.28,45.447-77.524
                                                            C344.886,78.715,305.012,38.84,256,38.84z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M99.918,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,36.655,29.82,66.475,66.475,66.475
                                                            c9.298,0,18.152-1.926,26.195-5.388c13.906-5.987,25.372-16.585,32.467-29.86c4.98-9.317,7.813-19.946,7.813-31.227
                                                            C166.393,151.51,136.573,121.689,99.918,121.689z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M412.082,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,11.282,2.833,21.911,7.813,31.227
                                                            c7.095,13.276,18.561,23.874,32.467,29.86c8.043,3.462,16.897,5.388,26.195,5.388c36.655,0,66.475-29.82,66.475-66.475
                                                            C478.557,151.509,448.737,121.689,412.082,121.689z"
                                  />
                                </g>
                              </g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                              <g></g>
                            </svg>
                          </div>
                          <div className="content">
                            <h4 className="title">Professional</h4>
                            <p>Morbi nec finibus misd</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use */}

      <section className="modularize-service-tools-area pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <span>Our Tools</span>
                <h3 className="title">What We Use</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <Slider {...serviceTechTools}>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-react"></i>
                  </div>
                  <div>
                    <h4>React</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-node"></i>
                  </div>
                  <div>
                    <h4>Node</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-angular"></i>
                  </div>
                  <div>
                    <h4>Angular</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-android"></i>
                  </div>
                  <div>
                    <h4>Android</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fas fa-quidditch"></i>
                  </div>
                  <div>
                    <h4>UI & UX </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-aws"></i>
                  </div>
                  <div>
                    <h4>AWS</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fas fa-infinity"></i>
                  </div>
                  <div>
                    <h4>DevOps</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fab fa-react"></i>
                  </div>
                  <div>
                    <h4>React-Native</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="service-techtool-icon">
                  <div>
                    <i className="fa-brands fa-docker"></i>
                  </div>
                  <div>
                    <h4>Docker</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
