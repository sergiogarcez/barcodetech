import React, { useEffect, useRef } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/productswiper.css';

// Importe as imagens ou use URLs
const slides = [
  {
    id: 1,
    image: 'src/assets/images/teste.png',
    title: 'Equipamento'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/300x400?2',
    title: 'Título 2'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/300x400?3',
    title: 'Título 3'
  },

];

const CustomSwiper = () => {
  return (
    <div className="container">
      <SwiperReact
        modules={[Navigation, EffectCoverflow]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="card">
              <div className="image-container">
                <img src={slide.image} alt={`Imagem ${slide.id}`} />
              </div>
              <h3 className="card-title">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </SwiperReact>
    </div>
  );
};

export default CustomSwiper;