import React from "react";
import "./projects.css";
import projectImgM from "../../assets/images/Screenshot0.png";
import projectImgW from "../../assets/images/weather.png";
import projectImgB from "../../assets/images/bubble.png";
import Swing from "react-reveal/Swing";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          "Crafted with Code: Showcasing MERN Stack Prowess 🛠️"
        </p>
        {/* card Design */}

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front-End</span>
                <img src={projectImgM} alt="poject1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">XML</span>
                <span className="card-detail-badge">SCSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Movix</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://moviex-five.vercel.app/"
                  target="_black"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front-End</span>
                <img src={projectImgB} alt="poject1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">The Bubble Game</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://port-folio-jkuq.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front-End</span>
                <img src={projectImgW} alt="poject1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather-App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://weather-app-six-lime.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
