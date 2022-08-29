import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* BreadCrum  */}
      
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Contact Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact With Us */}

      <section className="modularize-contact-page-area pt-90 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title mb-35 mt-30">
                <span>Contact With Us</span>
                <h3 className="title">Feel Free to Get in Touch</h3>
              </div>
              <div className="conatct-info">
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon/phone-icon.png" alt="" />
                  </div>
                  <div className="content">
                    <span>Call Anytime</span>
                    <h5 className="title">
                      <a href="tel:+8898006802">( + 91 ) 99252 00545</a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon/mail-icon.png" alt="" />
                  </div>
                  <div className="content">
                    <span>Send Email</span>
                    <h5 className="title">
                      <a href="mailto:hello@appgambit.com">
                      hello@appgambit.com
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="assets/images/icon/map-icon.png" alt="" />
                  </div>
                  <div className="content">
                    <span>Visit Now</span>
                    <h5 className="title">
                    408-409, SNS Platina, Someshwara Enclave, Vesu, Surat, Gujarat 395007
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form-page-box mt-30">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <textarea
                          name="#"
                          id="#"
                          cols="30"
                          rows="10"
                          placeholder="Write a Message"
                        ></textarea>
                        <button type="submit" className="main-btn">
                          Send a message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
