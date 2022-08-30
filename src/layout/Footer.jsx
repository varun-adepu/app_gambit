import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="modularize-footer-area">   
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-about">
                <Link to="#">
                  <img src="assets/images/logo-white2.png" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-phone"></i>
                    <span><a href="tel:+919925200545">( + 91 )  99252 00545</a></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-phone"></i>
                    <span><a href="tel:+919925200545">( + 91 )  99041 57241</a></span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span><a href="mailto:hello@appgambit.com">hello@appgambit.com</a></span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker"></i>
                    <span>
                      408-409, SNS Platina, Someshwara Enclave, Vesu, Surat,
                      Gujarat 395007
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-newsletter">
                <div className="gmap_canvas">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.1359181428402!2d72.776026!3d21.148922000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac07e8d4b5bff36!2sSNS+Platina!5e0!3m2!1sen!2sus!4v1543994223146"
                    width="100% "
                    height="350"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen
                  ></iframe>
                </div>
                {/* <h4 className="title">Newsletter</h4>
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
                </form> */}
                {/* <div className="col-lg-4 col-lg-6">
                    <div className="map mt-30">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.1359181428402!2d72.776026!3d21.148922000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaac07e8d4b5bff36!2sSNS+Platina!5e0!3m2!1sen!2sus!4v1543994223146"
                                    width="500px" height="350" frameborder="0" style={{border :"0"}} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div> */}
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
