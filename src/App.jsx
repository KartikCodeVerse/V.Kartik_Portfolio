import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Intro from "./Components/Into/Intro";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Scroll_Top from "./Components/Scroll_Top/Scroll_Top";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Project />
      <Contact />
      <Scroll_Top />
    </>
  );
}

export default App;
