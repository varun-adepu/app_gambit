import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { careersData } from "../js/Careers";

const CareerDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [careerDetail, setcareerDetail] = useState("");
  console.log("careerDetail", careerDetail);

  useEffect(() => {
    let findedId = careersData?.find((i) => i.id == id);
    setcareerDetail(findedId);
  }, [id]);
  return (
    <>
      <section className="breadcrumb-area mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">{careerDetail.jobTitle}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-career-detail-page-area pb-90">
        <div className=" new-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-30">
              <div className="career-info-details">
                <div className="career-info-job-role">Job Role</div>
                <div>
                  <h4>{careerDetail.jobTitle}</h4>
                </div>
                <div className="career-info-job-skills">
                  <span>Skills</span>
                  {careerDetail?.skills?.map((i) => (
                    <li>{i}</li>
                  ))}
                </div>

                <div className="career-info-job-pluses">
                  <span>Pluses</span>
                  {careerDetail?.pluses?.map((i) => (
                    <li>{i}</li>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-page-box mt-30">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-box">
                        <input type="text" placeholder="Last Name" />
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
                    <div className="col-lg-12">
                      <div className="input-box input-file">
                        <input
                          style={{
                            paddingTop: "15px",
                          }}
                          type="file"
                          placeholder="Resume/CV"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button type="submit" className="main-btn">
                        Submit
                      </button>
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

export default CareerDetail;
