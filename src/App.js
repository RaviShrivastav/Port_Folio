import LayOutes from "./components/LayOutes";
import About from "./pages/about.js/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import TechStack from "./pages/techStack/TechStack";
import Training from "./pages/training/Training";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/TheameContext";
import MobileNav from "./components/mobileNav/MobileNav";
import "./App.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <LayOutes />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Training />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center ">Ravi Shrivastav &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
