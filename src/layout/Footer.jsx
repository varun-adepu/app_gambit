import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../src/assets/img/logo-white2.png";

export const scrolltoTopV2 = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  let date = new Date().getFullYear();
  return (
    <>
      <footer className="modularize-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="footer-about">
                <Link to="#">
                  <img src={FooterLogo} alt="" />
                </Link>
                <p>
                  We provide all-around services to help you convert your idea
                  into a successful product. Our business strategy is quite
                  simple whether you are boostraping or already a successful
                  business.
                </p>
                <ul>
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
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-nav">
                <h4 className="title">Links</h4>
                <ul>
                  <li onClick={scrolltoTop}>
                    <Link to="/about">About us</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/project">Our Projects</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/career">Career</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-services">
                <h4 className="title">Services</h4>
                <ul>
                  <li onClick={scrolltoTop}>
                    <Link to="/services">Cloud Consulting</Link>
                  </li>

                  <li onClick={scrolltoTop}>
                    <Link to="/services">Web Development</Link>
                  </li>
                  <li onClick={scrolltoTop}>
                    <Link to="/services">Mobile Development</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  {/* <li>
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
                  </li> */}
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
                        408-409, SNS Platina, Someshwara Enclave Vesu, Surat,
                        Gujarat 395007
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center">
        <p>
          All Copyright © {date} by{" "}
          <Link onClick={scrolltoTopV2} to="/">
            Modularize
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
