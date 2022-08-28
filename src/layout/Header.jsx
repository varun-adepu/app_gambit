import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggal, setIsToggal] = useState(false);
  return (
    <>
      {isToggal && (
        <div class="offcanvas_menu">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="offcanvas_menu_wrapper">
                  <div class="canvas_close">
                    <div onClick={() => setIsToggal(false)}>
                      <i class="fa fa-times"></i>
                    </div>
                  </div>
                  <div class="offcanvas-social">
                    <ul class="text-center">
                      <li>
                        <a href="%24.html">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="%24.html">
                          <i class="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="menu" class="text-left ">
                    <ul class="offcanvas_main_menu">
                      <li class="menu-item-has-children active">
                        <a href="/">Home</a>
                      </li>
                      <li class="menu-item-has-children active">
                        <a href="about">About</a>
                      </li>
                      <li class="menu-item-has-children active">
                        <a href="/services">Services</a>
                      </li>
                      <li class="menu-item-has-children active">
                        <a href="/projects">Projects</a>
                      </li>
                      <li class="menu-item-has-children active">
                        <a href="contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div class="offcanvas_footer">
                    <span>
                      <a href="mailto:pixydrops@gmail.com">
                        <i class="fa fa-envelope-o"></i> pixydrops@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section class="infetech-header-area header-sticky">
        <div class="header-wrapper">
          <div class="templates-logo">
            <a href="/">
              <img src="assets/images/logo-white.png" alt="logo" />
            </a>
          </div>
          <div class="header-box">
            <div class="header-topbar">
              <div class="row g-0 align-items-center ">
                <div class="col-lg-6">
                  <div class="header-topbar-text">
                    <p>Welcome to IT Solutions & Services WordPress Theme </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="header-topbar-info-wrapper">
                    <div class="header-topbar-info">
                      <ul>
                        <li>
                          <i class="fas fa-envelope"></i> needhelp@company.com
                        </li>
                        <li>
                          <i class="fas fa-clock"></i> Mon - Sat: 8.00 am - 7.00
                          pm
                        </li>
                      </ul>
                    </div>
                    <div class="header-topbar-social">
                      <ul>
                        <li>
                          <i class="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fab fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fab fa-pinterest-p"></i>
                        </li>
                        <li>
                          <i class="fab fa-instagram"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-main-nav">
              <div class="header-main-nav-box">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    {/* <ul class="sub-menu">
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
                        <ul class="sub-menu">
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
                    <ul class="sub-menu">
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
                    {/* <ul class="sub-menu">
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
                    {/* <ul class="sub-menu">
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
                    <ul class="sub-menu">
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
              <div class="header-main-info">
                <div class="header-mini-btn">
                  <ul>
                    <li>
                      <a class="search-box-btn" href="#">
                        <i class="fal fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fal fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        class="toggle-bar canvas_open"
                        href="#"
                        onClick={() => setIsToggal(true)}
                      >
                        <i class="fal fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="header-main-info-contact">
                  <div class="icon">
                    <img src="assets/images/icon/phone.svg" alt="" />
                  </div>
                  <div class="content">
                    <span>Call Anytime</span>
                    <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
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
