import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggal, setIsToggal] = useState(false);
  return (
    <>
      {isToggal && (
        <div className="offcanvas_menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="offcanvas_menu_wrapper">
                  <div className="canvas_close">
                    <div onClick={() => setIsToggal(false)}>
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="offcanvas-social">
                    <ul className="text-center">
                      <li>
                        <a href="%24.html">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li className="menu-item-has-children active">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link to="about">About</Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link to="services">Services</Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link to="project">Projects</Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link to="contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas_footer">
                    <span>
                      <a href="mailto:hello@appgambit.com">
                        <i className="fa fa-envelope-o"></i> hello@appgambit.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="modularize-header-area header-sticky">
        <div className="header-wrapper">
          <div className="templates-logo">
            <Link to="/">
              <img src="assets/images/logo-white.png" alt="logo" />
            </Link>
          </div>
          <div className="header-box">
            <div className="header-topbar">
              <div className="row g-0 align-items-center ">
                <div className="col-lg-6">
                  <div className="header-topbar-text">
                    {/* <p>Welcome to IT Solutions & Services WordPress Theme </p> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-topbar-info-wrapper">
                    <div className="header-topbar-info">
                      <ul>
                        <li>
                          <i className="fas fa-envelope"></i> hello@appgambit.com
                        </li>
                        <li>
                          <i className="fas fa-clock"></i> Mon - Sat: 8.00 am - 7.00
                          pm
                        </li>
                      </ul>
                    </div>
                    <div className="header-topbar-social">
                      <ul>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fab fa-facebook-f"></i>
                        </li>
                        <li>
                          <i className="fab fa-pinterest-p"></i>
                        </li>
                        <li>
                          <i className="fab fa-instagram"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-main-nav">
              <div className="header-main-nav-box">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 5</a>
                      </li>
                      <li>
                        <a href="#">Header Versions</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Header Style 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Header Style 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Header Style 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Header Style 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Header Style 5</a>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  {/* <li>
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="our-team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="services">Services</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="service-1.html">Service 1</a>
                      </li>
                      <li>
                        <a href="service-2.html">Service 2</a>
                      </li>
                      <li>
                        <a href="service-3.html">Service 3</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="project">Projects</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li>
                        <a href="projects-details.html">Project Details</a>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li>
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="header-main-info">
                <div className="header-mini-btn">
                  <ul>
                    {/* <li>
                      <a className="search-box-btn" href="#">
                        <i className="fal fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-shopping-cart"></i>
                      </a>
                    </li> */}
                    <li>
                      <Link
                        className="toggle-bar canvas_open"
                        to="#"
                        onClick={() => setIsToggal(true)}
                      >
                        <i className="fal fa-bars"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-main-info-contact">
                  <div className="icon">
                    <img src="assets/images/icon/phone.svg" alt="" />
                  </div>
                  <div className="content">
                    <span>Call Anytime</span>
                    <a href="tel:+919925200545">( + 91 )  99252 00545</a>
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

export default Header;
