import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="title">Blog</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="modularize-blog-page-area pt-90 pb-90">
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center mb-55">
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  Our Blogs
                </span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*G0C1CG-SfU4UmK4ASHIpPA.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Rajan Shah
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 19 Jul
                        2022
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">How to design & code Alexa skills</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/how-to-design-code-alexa-skills-7ed96c305160"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*xGEzFVEESz1SfF-KSvSAjg.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 28 Jun
                        2022
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Provisioning a Jenkins Server on AWS With Terraform.
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/provisioning-a-jenkins-server-on-aws-with-terraform-bf04a6a6ef7f"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*EnYyiTcHkh2GZOg3NmROkg.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Dhaval Nagar
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 01 Sep
                        2021
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Serverless with Redis Database(less).</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/serverless-with-redis-database-less-92264c2e8625"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*K6G5st7YnAd3TZU4eYOcAg.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Dhaval Nagar
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 30 Aug
                        2021
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">MongoDB Atlas Serverless Testing</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/mongodb-atlas-serverless-testing-9e9ee3860d4c"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*q296DIiygo9qYYBeLJsJag.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 01 Apr
                        2021
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Terraform — Deploy AWS Inspector A cloud-based
                        Vulnerability Assessment Tools.
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/terraform-deploy-aws-inspector-a-cloud-based-vulnerability-assessment-tools-a4e2f5987e48"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*uYrJjNqPJ6uvGIuZds5W_w.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 03 Feb
                        2021
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        AWS CodePipeline — Alexa Skill Deployment Pipeline.
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/aws-codepipeline-alexa-skill-deployment-pipeline-a77d1e6a8da5"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*mc25PdPbWp0L6Xxuo64h7A.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Dhaval Nagar
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 24 Dec
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Event Failures (and Retries) with AWS Serverless
                        Messaging Services.
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/event-failures-and-retries-with-aws-serverless-messaging-services-a3990fce184d"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/710/1*mDyoxznc5MKTV-Jo33hOhA.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Dhaval Nagar
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 22 Dec
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        What all has changed in the AWS Lambda in the past one
                        year…
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/what-all-has-changed-in-the-aws-lambda-in-the-past-one-year-c5ff69f2df60"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*KZixg7VK_dF1b046QdDOHQ.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Dhaval Nagar
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 18 Dec
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        PAY per USE can derail your Serverless (dream) Budget
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/pay-per-use-can-derail-your-serverless-dream-budget-6884a8de0b75"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://cdn-images-1.medium.com/max/1024/1*ynd5Vnn0DOhGdpsmDdnTtg.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 09 Oct
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Quick Start: Alexa Skills Kit Command Line Interface
                        (ASK CLI)
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/quick-start-alexa-skills-kit-command-line-interface-ask-cli-173146f6da8b"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/700/1*3ymOltw47iXEd-KTDJWkjg.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 23 Jul
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Configure Jitsi — Open source web conferencing solution
                        on AWS with Terraform
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/configure-jitsi-open-source-web-conferencing-solution-on-aws-with-terraform-b4191ba04d2b"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/700/1*eSiRatL4BQACRTKjD1ChOQ.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 03 Jul
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Terraform —  AWS VPC with Private, Public Subnets with
                        NAT
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/terraform-aws-vpc-with-private-public-subnets-with-nat-4094ad2ab331"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/700/1*PFYe_s4i3j6ze7NvwHMagA.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Rahul Ladumor
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 30 May
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Datastore with AWS Amplify & React</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/datastore-with-aws-amplify-react-c04c5994b303"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/700/1*iBZ44H9aF6ewsv6fmbJG6A.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Rahul Ladumor
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 29 May
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Authentication with AWS Amplify & React</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/authentication-with-aws-amplify-react-3a811b49260e"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*eBw535tobQFVyIqlXoBWpw.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 17 Apr
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">AWS Lambda — Sending Slack notification</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/aws-lambda-sending-slack-notification-1beccc070bd3"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*dAgqkwaWLauZtSbes0Cg6A.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 13 Apr
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Integrating AWS Chatbot with Slack Notifications
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/integrating-aws-chatbot-with-slack-notifications-280a9f290b8a"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*8NPQD0O9W8R5uSAiyj1GHQ.png"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 10 Apr
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Terraform with Jenkins pipeline</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/terraform-with-jenkins-pipeline-439babe4095c"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*duTJBgzQrssapQanzE-GhQ.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 10 Apr
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">AWS Lambda — Managing EC2 Instances</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/aws-lambda-managing-ec2-instances-33fcae52f3a8"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*cHtHvYnkv8e0NmlFmjkxaQ.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 09 Mar
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">AWS Lambda — Launch EC2 Instances</a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/aws-lambda-launch-ec2-instances-40d32d93fb58"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-item">
                <div className="thumb">
                  <a href="#">
                    <img
                      src="https://miro.medium.com/max/1400/1*XlTqEyZz0Kbf7pi7N7vMyg.jpeg"
                      alt=""
                    />
                  </a>
                  {/* <span>18 mar</span> */}
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <i class="fa-sharp fa-solid fa-user"></i> Prashant
                        Bhatasana
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i> 08 Jan
                        2020
                      </li>
                    </ul>
                    <h4 className="title">
                      <a href="#">
                        Automating AWS Lambda deployment with Bitbucket
                        Pipelines
                      </a>
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://medium.com/appgambit/automating-aws-lambda-deployment-with-bitbucket-pipelines-28cf3f04b78c"
                    >
                      Read More
                    </a>
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

export default Blog;
