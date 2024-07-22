import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Coaches from "./Coaches";

function Trainer() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    variableWidth: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ul className="coaches__slider">
      <Slider {...settings}>
        {Coaches.map((coache, index) => (
          <li key={index} className="coaches__item">
            <img src={coache.image} className="coaches__item_img" />
            <div className="coaches__item_name">{coache.name}</div>
            <div className="coaches__item_info">{coache.info}</div>
          </li>
        ))}
      </Slider>
    </ul>
  );
}

export default Trainer;
