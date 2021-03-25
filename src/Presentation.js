import React, { useState } from 'react'

import { Link } from 'react-router-dom'

// Styles
import './presentation.css'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";


// Images
import uno from './images/1.jpg'
import dos from "./images/2.jpg";
import tres from "./images/3.jpg";
import cuatro from "./images/4.jpg";
import cinco from "./images/5.jpg";

// Meterial UI Icons
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// Execute Swipe Core
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Presentation = () => {
  const [currentBackground, setCurrentBackground] = useState(uno)

  const changeBackground = () => {
    setTimeout(() => {
      const thisElement = document.querySelector(".swiper-slide-active").firstChild.src
      setCurrentBackground(thisElement)
    }, 150)
  }
  return (
    <div className="presentation">
      <div className="presentation__container">
        <div className="presentation__back">
          <div className="presentation__back__color"></div>
          <div
            className="presentation__back__container"
            style={{
              backgroundImage: `url(${currentBackground})`,
              backgroundSize: "cover",
              backgroundRepeat: "none",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="presentation__content">
          <div className="presentation__content__container">
            <div className="presentation__description">
              <h1 className="presentation__title">Delish</h1>
              <p className="presentation__message">
                Atrevete a disfrutar de la auténtica comida de los Dioses!!!
              </p>
              <div className="presentation__stars">
                <StarIcon className="star__icon" />
                <StarIcon className="star__icon" />
                <StarIcon className="star__icon" />
                <StarIcon className="star__icon" />
                <StarIcon className="star__icon" />
              </div>
            </div>
            <div className="presentation__slide">
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={changeBackground}
              >
                <SwiperSlide className="swiper__slide">
                  <img src={uno} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper__slide">
                  <img src={dos} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper__slide">
                  <img src={tres} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper__slide">
                  <img src={cuatro} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper__slide">
                  <img src={cinco} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="ir">
                <Link to="/menu">
                  Ver Menú
                  <ArrowForwardIcon className="arrow__for__ward__icon"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation