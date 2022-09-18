import React from "react";
import { Link } from "react-router-dom";

const ProjectDetail2 = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Star Oil</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Project
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Star Oil
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modularize-projects-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="projects-details-thumb">
                <img src="/assets/images/star-oil-case.png" alt="" />
              </div>
            </div>
          </div>
          <div className="modularize-project-tools mt-5">
            <div className="row ">
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Platform</span>
                  <p>Angular, AWS</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Language</span>
                  <p>Angular 6</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>SDK : Plivo</span>
                  <p>
                    SMS API, Voice API, & Global Carrier Provider SMS API, Voice
                    API, & Global Carrier Provider
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="detail-of-project">
                  <span>Category</span>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="projects-details-content">
              <div className="text">
                <h3 className="title">Star Oil</h3>
                <p>
                  We believe technology is just a carrier to help build a
                  solution, there is no one right way if the execution is done
                  properly. These are some of the current technologies we use to
                  build solutions.
                </p>
              </div>
              <div className="small-text">
                <h4 className="title">The Challenge of Project</h4>
                <p className="pb-20">
                  Star Oil (Dhruv Management) is building a gas price
                  distribution system that aggregates different fuel prices on a
                  daily basis from different sources and then distributes to all
                  the retailers for analysis and ordering purposes. The platform
                  has multiple components and all the retailers are connected
                  via the mobile application.
                </p>
                <p>
                  The new platform consists of the serverless infrastructure
                  hosted on Amazon Web Services (AWS). The challenge was to
                  build the overall application with secure, scalable, robust,
                  and cost-effective infrastructure and test its critical
                  components. AppGambit played an important part in the
                  implementation of the system to effectively rollout to AWS for
                  production.
                </p>
              </div>
              <div className="small-text">
                <h4 className="title">Solution</h4>
                <p>
                  AppGambit performed the overall analysis of the system and
                  selected the AWS Serverless stack for the final product. Our
                  team is doing the serverless development for a long time, and
                  we quickly identified the key areas. We selected the popular
                  Serverless Framework as our development framework and decided
                  to build an MVP first. Once the MVP part is completed, we had
                  all the pieces together that we needed, DynamoDB, SQS/SNS,
                  Pinpoint and CloudWatch Alarms for Jobs became the key AWS
                  services for the overall solution.
                </p>

                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i> Building a DevOps
                    pipeline to allow the development and deployment of code on
                    the platform, with continuous integration / continuous
                    deployment (CI/CD). This includes AWS services like
                    CodeCommit, CodeBuild, CodePipeline, and Terraform
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Backend system
                    development using the Serverless Framework and NodeJS 12.x
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Mobile application
                    development using the Flutter Mobile Framework
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Web application
                    development using the Angular Web Framework
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We are using key
                    serverless services like Cognito, API Gateway, Lambda,
                    DynamoDB, CloudWatch Alarms (for Logs and Periodic Jobs),
                    X-Ray, Pinpoint, SNS, etc
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Using AWS
                    ControlTower to separate the account creation and manage
                    multiple stages with CloudFormation
                  </li>
                </ul>
              </div>
              <div className="small-text">
                <h4 className="title">Benefits</h4>
                <p className="pb-20">
                  Star Oil now has a working application that can scale up/down
                  depending on the load. All the components are highly
                  distributed and self fault-tolerant. Using the serverless
                  approach was the best fit for their business operations which
                  sees heavy operations in certain hours and goes to complete
                  stand-off in others.
                </p>
                <p>
                  Star Oil is not exploring more business cases that can be
                  modernized using AWS serverless technologies and our
                  relationships with them will definitely help them get better
                  results.
                </p>
              </div>
              <div className="small-text">
                <h4 className="title">AppGambit Consulting</h4>
                <p>
                  AppGambit selects the right set of tools and technologies to
                  deliver the solution to its customers. Serverless is still a
                  new and less-explored area, we take honest pride in our
                  understanding of the field and help it explain to our
                  customers.
                </p>
              </div>
              {/* <div className="projects-details-page-changer mt-120">
                  <ul>
                    <li>
                      <div className="icon">
                        <a href="#">
                          <i className="fal fa-long-arrow-left"></i> Previous
                        </a>{" "}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <a href="#">
                          Next <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail2;
