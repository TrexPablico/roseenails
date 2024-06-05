import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Cards from "./components/Cards.jsx";
import Slides from "./components/Slides.jsx";
import Studio from "./components/Studio.jsx";
import Slider from "./components/Slider.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Studio />
      <Slides />
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
