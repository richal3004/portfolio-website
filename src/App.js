import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro.js'
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
