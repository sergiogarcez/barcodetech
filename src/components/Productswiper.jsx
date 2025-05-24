import React, { useEffect, useRef } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const slides = [
  {
    id: 1,
    image: 'src/assets/images/teste.png',
    title: 'Equipamento'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/300x400?2',
    title: 'Equipamento'
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/300x400?3',
    title: 'Equipamento'
  },
];

const CustomSwiper = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <SwiperReact
        modules={[Navigation, EffectCoverflow]}
        slidesPerView={3}
        centeredSlides={true}
        loop={false}
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
        className="w-full py-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="transition-all duration-300 ease-in-out blur-[3px] scale-85 swiper-slide-blur">
            <div className="bg-white rounded-[10px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] h-full flex flex-col group">
              <div className="w-full h-[300px] overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={`Imagem ${slide.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="p-[15px] text-center text-lg text-[#333]">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
               
        <div className="swiper-button-next !text-[#333]"></div>
        <div className="swiper-button-prev !text-[#333]"></div>
      </SwiperReact>
    </div>
  );
};

export default CustomSwiper;