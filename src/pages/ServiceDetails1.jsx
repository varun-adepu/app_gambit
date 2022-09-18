import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";

const ServiceDetails1 = () => {
  const serviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Cloud Consultant</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cloud Consultant
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-servicesDetail-1 pt-65">
        {/* <div className="bgfixed">
          <div className="bgheading">
            <p>Cloud Consultant</p>
          </div>
        </div> */}

        <div className="container">
          <div className="row align-items-center mb-55">
            <div className="col-lg-12 ">
              <div className="section-title">
                <span>Cloud Consultant</span>
              </div>

              <div className="services-paragraphs mt-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus, esse ab? Temporibus mollitia ea, quisquam ad amet
                  voluptas, saepe reprehenderit vitae dicta, quaerat dolor
                  corporis officia fugiat adipisci atque. Dicta?
                </p>
              </div>
              <div className="services-paragraphs mt-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus, esse ab? Temporibus mollitia ea, quisquam ad amet
                  voluptas, saepe reprehenderit vitae dicta, quaerat dolor
                  corporis officia fugiat adipisci atque. Dicta?
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="services-paragraphs">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus, esse ab? Temporibus mollitia ea, quisquam ad amet
                  voluptas, saepe reprehenderit vitae dicta, quaerat dolor
                  corporis officia fugiat adipisci atque. Dicta?
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="services-image-style">
                <img src="../../assets/images/cloud-service.png" alt="" />
              </div>
            </div>

            <div className="col-lg-12 service-benefits-main">
              <div className="services-benefits">
                <span>Benefits</span>
              </div>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Exploring version
                  oflorem veritatis proin
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Auctor aliquet aenean
                  simply free text veritatis quis
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Consequat ipsum nec
                  lorem sagittis sem nibh.
                </li>
              </ul>
            </div>
          </div>
          <div className="services-tools-slider mb-55">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-55">
                  <span>Our Tools</span>
                  <h3 className="title">Which Tools We Use</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <Slider {...serviceSettings}>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="tool-item">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails1;
