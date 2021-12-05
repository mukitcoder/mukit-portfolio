import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MyProjects from "../MyProjects/MyProjects";
import Reviews from "../Reviews/Reviews";
import Skills from "../Skills/Skills";


const Home = () => {
  return (
    <div>
      <div className="pt-16">
        <Banner>  
        </Banner>
      </div>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
