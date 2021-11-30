import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import NotFound from './NotFound/NotFound';



function App() {
  return (
    <div className="bg-black App"> 
       <BrowserRouter>
       <Navbar/>
       <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="blog" element={<Blogs />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
