import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro.js'
import About from './Components/About/About';
import SkillBlock from './Components/SkillBlock/SkillBlock';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './UI/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <SkillBlock />
      <Experience />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
