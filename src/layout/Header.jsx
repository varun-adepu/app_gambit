import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../../src/assets/img/logo-white.png";

const Header = () => {
  const [isToggal, setIsToggal] = useState();

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

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
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/company/appgambit/"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://medium.com/appgambit"
                        >
                          <i class="fab fa-medium-m"></i>
                        </a>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="services"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="career"
                        >
                          Career
                        </Link>
                      </li>
                      <li className="menu-item-has-children active">
                        <Link
                          onClick={() => {
                            setIsToggal(false);
                            scrolltoTop();
                          }}
                          to="contact"
                        >
                          Contact
                        </Link>
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
              <img src={HeaderLogo} alt="logo" />
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
              </div>
            </div>
            <div className="header-main-nav">
              <div className="header-main-nav-box">
                <ul>
                  <li onClick={scrolltoTop}>
                    {/* <Link to="/">Home</Link> */}

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li onClick={scrolltoTop}>
                    <NavLink
                      to="about"
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                    >
                      About
                    </NavLink>
                  </li>
                  <li onClick={scrolltoTop}>
                    <NavLink
                      to="services"
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                    >
                      Services
                    </NavLink>
                  </li>

                  <li
                    onClick={scrolltoTop}
                    className="menu-item-has-children active"
                  >
                    <NavLink
                      to="blog"
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li onClick={scrolltoTop}>
                    <NavLink
                      to="career"
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                    >
                      Career
                    </NavLink>
                  </li>
                  <li onClick={scrolltoTop}>
                    <NavLink
                      to="contact"
                      style={({ isActive }) => ({
                        color: isActive ? "#343434" : "#6c6a72",
                      })}
                      className={({ isActive }) =>
                        isActive ? "header-nav-after" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="header-main-info">
                <div className="header-mini-btn">
                  <ul>
                    <li>
                      <Link
                        className="toggle-bar canvas_open"
                        to="#"
                        onClick={() => setIsToggal(!isToggal)}
                      >
                        <i class="fa-solid fa-bars"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-main-info-contact">
                  <div className="icon">
                    {/* <img src="assets/images/icon/phone.svg" alt="" /> */}
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <span>Connect With Us</span>
                    <a href="mailto:hello@appgambit.com">hello@appgambit.com</a>
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
