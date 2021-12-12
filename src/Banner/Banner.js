import React from "react";
import Typical from "react-typical";
import Zoom from "react-reveal/Zoom";
import Wobble from "react-reveal/Wobble";
import Swal from 'sweetalert2';
import bannerImage from "../images/mukit1.png";
import Particles from "react-tsparticles";


const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };



  const downloadBtn = ()=>{
    Swal.fire(
      'Thanks For Download My Resume',
      'Plz give me your feedback !',
      'success'
    )
  }
  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
     
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 4000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <div
      className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 container mx-auto px-4 text-white py-5"
      id="home"
    >
      

      <div className="m-auto text-center">
        <Zoom>
          {" "}
          <div>
            <h4 className="text-1xl mb-6">WELCOME TO MY WORLD !</h4>
            <h1 className="text-5xl mb-6">
              Hello, I'M <span className="text-yellow-500 text-6xl">Mukit</span>
            </h1>
          </div>
        </Zoom>
        <Typical
          className="text-4xl mb-6"
          steps={[
            "Professional Coder ✔",
            2000,
            "React Developer 😎",
            2200,
            "Front-End Developer 😍",
            2400,
            "MERN Stack Developer ✔",
            2600,
          ]}
          loop={Infinity}
          wrapper="p"
        ></Typical>

        <Wobble delay={4000}>
          {" "}
          <blockquote className="text-yellow-500">
            “To win big, you sometimes have to take big risks.” --- Bill Gates
          </blockquote>
        </Wobble>

        <div className="mt-16">
    {/* <!-- buttons --> */}
    <div className="text-center mb-16 ">
        <a href="https://drive.google.com/uc?export=download&id=1IM0O2Hb_5Ast4rNxO9i9DED5MHeeBXc_" className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-yellow-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300" onClick={()=>downloadBtn()}>Download Resume <i className="fas fa-arrow-circle-down ml-2"></i></a>
    </div>
        </div>
      </div>
      <div className="bg-no-repeat bg-center ">
        <img className="" src={bannerImage} alt="bannerImage" />
      </div>
    </div>
    </>
  );
};

export default Banner;
