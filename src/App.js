import "./App.css"
import AboutMe from "./PortfolioContainer/About/AboutMe";
import Contact from "./PortfolioContainer/Contact/Contact";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonials from "./PortfolioContainer/Testimonial/Testimonial";


function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Resume/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
