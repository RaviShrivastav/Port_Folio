import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; //from usages of NPM.js.com
import "react-vertical-timeline-component/style.min.css"; //from usages of NPM.js.com
import { FaBookReader } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Educational Qualifications
        </h2>
        <hr />
        <VerticalTimeline>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Persuing"
            iconStyle={{ background: "#138781", color: "#fff" }} */}
          {/* // icon={<FaBookReader />}> */}
          {/* <h3 className="vertical-timeline-element-title">MCA</h3> */}
          {/* <h4 className="vertical-timeline-element-subtitle">Jabalpur, IN</h4> */}
          {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          {/* </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaBookReader />}
          >
            <h3 className="vertical-timeline-element-title">PGDCA</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhopal, IN</h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2014 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaBookReader />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor Of Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Jabalpur, IN</h4>
            <p>Mechanical Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2013 - 2014"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaBookReader />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Certificate Examination
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lakhnadon, IN
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - 2012"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaBookReader />}
          >
            <h3 className="vertical-timeline-element-title">
              High School Certificate Examination
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Lakhnadon, IN
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
