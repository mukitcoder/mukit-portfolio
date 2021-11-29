import './App.css';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MyProjects from './MyProjects/MyProjects';
import Reviews from './Reviews/Reviews';
import Footer from './Shared/Footer';
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
      <MyProjects></MyProjects>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
