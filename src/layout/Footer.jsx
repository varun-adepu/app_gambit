import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="modularize-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-about">
                <Link to="#">
                  <img src="assets/images/logo-white.png" alt="" />
                </Link>
                <p>
                  We work with a passion of taking challenges and creating new
                  ones in advertising sector.
                </p>
                <ul>
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
                  <li>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-nav">
                <h4 className="title">Links</h4>
                <ul>
                  <li>
                    <Link to="#">About us</Link>
                  </li>
                  <li>
                    <Link to="#">Meet our Team</Link>
                  </li>
                  <li>
                    <Link to="#">News & Media</Link>
                  </li>
                  <li>
                    <Link to="#">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="#">Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-newsletter">
                <h4 className="title">Newsletter</h4>
                <p>
                  Signup for our latest news & articles. We won’t give you spam
                  mails.
                </p>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>( + 91 )  99252 00545</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>hello@appgambit.com</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker"></i>
                    <span>408-409, SNS Platina, Someshwara Enclave, Vesu, Surat, Gujarat 395007</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center">
        <p>
          © All Copyright 2022 by{" "}
          <Link to="mailto:hello@appgambit.com">Modularize</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
