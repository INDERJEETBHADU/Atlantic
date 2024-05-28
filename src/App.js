import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeroSection from "../src/components/HeroSection"
import Blog from './components/Blog';
import Pionner from "./components/Pionner"
import Arrovals from "./components/Arrovals"
import About from "./components/About"


function App() {
  return (
    <>
      <HeroSection />
      <Pionner />
      <Arrovals />
      <About />
      <Blog />




    </>
  );
}

export default App;
