import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro.js'
import About from './Components/About/About';
import SkillBlock from './Components/SkillBlock/SkillBlock';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <SkillBlock />
    </div>
  );
}

export default App;
