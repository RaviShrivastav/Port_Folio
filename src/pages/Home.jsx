import React from "react";
import { useTheme } from "../context/TheameContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/RAVI SHRIVASTAV (1).pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container " id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={25} />
          ) : (
            <BsFillSunFill size={25} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2> Hi I am Ravi Shrivastav</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer!", "Mern Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                href="https://api.whatsapp.com/send?phone=7xxxxxxxx5"
                className="btn btn-hire"
                rel="noreferrer"
                target="_blank"
              >
                Hire me
              </a>
              {/* <button className="btn btn-hire">Hire Me</button> */}
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
