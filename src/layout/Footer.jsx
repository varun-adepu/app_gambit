import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="infetech-footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-about">
                <a href="#">
                  <img src="assets/images/logo-white.png" alt="" />
                </a>
                <p>
                  We work with a passion of taking challenges and creating new
                  ones in advertising sector.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer-nav">
                <h4 class="title">Links</h4>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Meet our Team</a>
                  </li>
                  <li>
                    <a href="#">News & Media</a>
                  </li>
                  <li>
                    <a href="#">Our Projects</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-newsletter">
                <h4 class="title">Newsletter</h4>
                <p>
                  Signup for our latest news & articles. We won’t give you spam
                  mails.
                </p>
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h4 class="title">Contact</h4>
                <ul>
                  <li>
                    <i class="fas fa-phone"></i>
                    <span>+ 88 ( 9800 ) 6802</span>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <span>needhelp@company.com</span>
                  </li>
                  <li>
                    <i class="fas fa-map-marker"></i>
                    <span>88 Broklyn Golden Road Street New York. USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-copyright text-center">
        <p>
          © All Copyright 2022 by{" "}
          <a href="mailto:pixydrops@gmail.com">Pixydrops</a>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
