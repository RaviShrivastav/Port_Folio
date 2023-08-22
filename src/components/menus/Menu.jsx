import React from "react";
import "./menu.css";
import { Link } from "react-scroll";
import { RxHalf1 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout, FcContacts, FcVoicePresentation } from "react-icons/fc";
import { FaReadme } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiCertificate } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="raviPic.png" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <PiCertificate />
                    Education
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="techStack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GrTechnology />
                    Tech Stack
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <LiaProjectDiagramSolid />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="training"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FaReadme />
                    Training And Certifications
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contactId"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiOutlineHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <PiCertificate />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrTechnology />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <LiaProjectDiagramSolid />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="training"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FaReadme />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contactId"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcContacts />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
