
import './App.css';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Navbar from './Shared/Navbar';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="bg-black"> 
      <div className="">
      <Navbar></Navbar>
      </div>
      <div className="pt-16">
      <Banner></Banner>
      </div>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
