import React from "react";
import Swiper from "react-id-swiper";
import "./Projects.css";

// css
// import 'swiper/css/swiper.css';
// scss
import "swiper/swiper.scss";
// less
import "swiper/swiper.less";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Projects = () => {
  const params = {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="my-16">
      <Swiper {...params}>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
