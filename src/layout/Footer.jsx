import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../src/assets/img/logo-white2.png";

const Footer = () => {
  const scrolltoTop = () => {
    console.log("heyy");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="modularize-footer-area">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="footer-about">
                <Link to="#">
                  <img src={FooterLogo} alt="" />
                </Link>
                <p>
                  We provide all-around services to help you convert your idea
                  into a successful product. Our business strategy is quite
                  simple, whether you are boostraping or already a successful
                  business.
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
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-nav">
                <h4 className="title">Links</h4>
                <ul>
                  <li onClick={scrolltoTop}>
                    <Link to="/about">About us</Link>
                  </li>

                  <li onClick={scrolltoTop}>
                    <Link to="/team">Meet our Team</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/project">Our Projects</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-phone"></i>
                    <span>
                      <a href="tel:+919925200545">( + 91 ) 99252 00545</a>
                    </span>
                  </li>
                  <li>
                    <i class="fa-solid fa-phone"></i>
                    <span>
                      <a href="tel:+919925200545">( + 91 ) 99041 57241</a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>
                      <a href="mailto:hello@appgambit.com">
                        hello@appgambit.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker"></i>
                    <span>
                      <a
                        href="https://www.google.com/maps?ll=21.149136,72.77547&z=19&t=m&hl=en-GB&gl=US&mapclient=embed&cid=12303973327296003894"
                        rel="noreferrer"
                        target="_blank"
                      >
                        408-409, SNS Platina, Someshwara Enclave, Vesu, Surat,
                        Gujarat 395007
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
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
                </div> */}
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
            {/* </div>
            </div> */}
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
