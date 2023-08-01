import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro.js'
import About from './Components/About/About';
import SkillBlock from './Components/SkillBlock/SkillBlock';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <SkillBlock />
      <Experience />
      <Project/>
    </div>
  );
}

export default App;
