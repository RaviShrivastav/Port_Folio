import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import ImgContact from "../../assets/images/contact1.jpeg";
import ImgContact from "../../assets/images/contact2.jpeg";
import Rotate from "react-reveal/Rotate";
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contactId">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Contact us
        </h2>
        {/* <hr /> */}
        <p className="pb-3 text-center">
          "Let's Connect and Create Something Amazing Together!"
        </p>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img className="image" src={ImgContact} alt="contact" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h6>Contact With </h6>
                  <div className="contact-Icons">
                    <Link
                      className="contact-link"
                      to="https://www.linkedin.com/in/ravi-shrivastav-ba156b214/"
                      target="_blank"
                    >
                      <BsLinkedin
                        color="blue"
                        className="ms-2 contact-Icon"
                        size={30}
                      />
                      Contact with Me on Linkdein
                    </Link>
                    <br />
                    <Link
                      to="https://github.com/RaviShrivastav"
                      target="_blank"
                    >
                      <BsGithub
                        color="black"
                        className="ms-2 contact-Icon"
                        size={30}
                      />
                      Contact with Me on GitHub
                    </Link>
                    <br />
                    <MdEmail
                      color="red"
                      className="ms-2 contact-Icon"
                      size={30}
                    />
                    ravishrivastav1126@gmail.com
                    <br />
                    <BsTelephoneFill
                      color="blue"
                      className="ms-2 contact-Icon"
                      size={30}
                    />
                    +91 7000132275
                  </div>
                  {/* <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="small or text-center">OR</small>
                      <div className="line" />
                    </div> */}
                </div>
              </div>
              {/* <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name "
                    className="mb-3"
                  />
                </div> */}
              {/* <div className="row px-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Address "
                    className="mb-3"
                  />
                </div> */}
              {/* <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Enter Your Message "
                    className="mb-3"
                  />
                </div> */}
              {/* <div className="row px-3">
                  <button type="submit" className=" ">
                    Send Message
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
