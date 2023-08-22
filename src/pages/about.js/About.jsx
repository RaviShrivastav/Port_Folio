import React from "react";
import "./about.css";
import Jump from "react-reveal/Jump";
import img from "../../assets/images/img3.png";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 about-img">
              {/* <img src="raviPic.png" alt="profile pic" /> */}
              <img src={img} alt="profile pic" />
            </div>
            <div className="col-md-7 col-xl-7 col-lg-7 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hey there! I'm Ravi Shrivastav, a passionate Mechanical Engineer
                with an insatiable curiosity for the world of computers and
                technology. My journey began with mechanical systems, but my
                fascination with the limitless possibilities of the digital
                realm led me to pursue a PGDCA and delve into the realm of web
                development. With a strong foundation in both Mechanical
                Engineering and Computer Science, I've embarked on a path that
                bridges the gap between the physical and the virtual. My fervor
                for learning and growth led me to complete a comprehensive Full
                Stack Web Development course with a focus on the MERN stack.
                This exciting journey allowed me to combine my analytical
                problem-solving skills with the creativity demanded by the world
                of frontend development. When it comes to crafting immersive
                digital experiences, my frontend skills truly shine. I'm
                passionate about design and user experience. From user-friendly
                interfaces to stunning layouts, I bring websites to life for an
                engaging online journey. However, my journey is not just about
                code and design – it's also about the qualities that define me
                as a developer. I'm a firm believer in the power of teamwork, I
                thrive on teamwork for creative innovation. Diverse team
                experiences have shown me the power of each member's strengths,
                leading to exceptional outcomes. Efficient task management, a
                product of my engineering and web background, ensures timely,
                high-quality project delivery. As I continue to explore the
                world of web development, my aspiration is clear: to contribute
                my skills and passion to create exceptional digital experiences.
                Every line of code I write and every design choice I make is
                fueled by a dedication to excellence and a desire to make a
                meaningful impact. Thank you for visiting my portfolio, and I
                look forward to the exciting opportunities ahead.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
