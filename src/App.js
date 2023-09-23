import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Expertise";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
