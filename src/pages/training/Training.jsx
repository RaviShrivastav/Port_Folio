import React from "react";
import "./training.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Training = () => {
  return (
    <>
      <div className=" work" id="training">
        <div className=" container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Training And Certifications
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="March, 2022 - September, 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<AiFillSafetyCertificate />}
            >
              <h3 className="vertical-timeline-element-title">
                Full-Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At Edureka</h4>
              <p>
                During my Edureka internship, I immersed myself in MERN stack
                projects, mastering HTML, CSS, JavaScript, Node.js, Express.js,
                React, and MongoDB. I learned to create UI design with React,
                and database management. This experience honed my skills and
                deepened my understanding of full-stack web development.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="March, 2022 - September, 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<AiFillSafetyCertificate />}
            >
              <h3 className="vertical-timeline-element-title">
                Full-Stack Developler Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At Edureka</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Training;
