import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Blogs from "./Blogs/Blogs";
import NotFound from "./NotFound/NotFound";
import SingleProject from "./MyProjects/SingleProject/SingleProject";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";


function App() {
  return (
    <>
      {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
    <div className="bg-black App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="/:" element={<SingleProject />} />
          <Route path="singleProject/:id" element={<SingleProject />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
   
    </>
  );
}

export default App;
