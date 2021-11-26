import './App.css';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Reviews from './Reviews/Reviews';
import Navbar from './Shared/Navbar';
import Skills from './Skills/Skills';



function App() {
  return (
    <div className="bg-black App"> 
      <div className="">
      <Navbar></Navbar>
      </div>
      <div className="pt-16">
      <Banner></Banner>
      </div>
      <Skills></Skills>
      <Projects></Projects>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
}

export default App;
