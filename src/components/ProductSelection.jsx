import '../styles/ProductSelection.css';
import * as React from 'react';

import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import HONEYWELL_EDA52 from "../assets/images/coletores/HONEYWELL_EDA52.jpeg";
import UROVO_RT40 from "../assets/images/coletores/UROVO_RT40.jpeg";
import ZEBRA_MC33 from "../assets/images/coletores/ZEBRA_MC33_MC94.jpeg";

import HONEYWELL_1960G from "../assets/images/leitores-c-fio/HONEYWELL_1960G.webp";
import ZEBRA_DS2208 from "../assets/images/leitores-c-fio/ZEBRA_DS2208.jpeg";

import HONEYWELL_1962G from "../assets/images/leitores-s-fio/HONEYWELL_1962G.jpeg";
import ZEBRA_2278 from "../assets/images/leitores-s-fio/ZEBRA_2278.png";
import UROVO_5203 from "../assets/images/leitores-s-fio/UROVO_5203.png";

import ZD400 from "../assets/images/impressoras/ZD400.png";
import ZD510_HC from "../assets/images/impressoras/ZD510‑HC.png";
import ZD600 from "../assets/images/impressoras/ZD600.png";
const productsData = [
  // CATEGORIA: COLETORES DE DADOS
  {
    name: "HONEYWELL EDA52",
    description: "Coletor robusto para ambientes industriais.",
    category: "Coletores de Dados",
    image: HONEYWELL_EDA52 , 
  },
  
  {
    name: "UROVO RT40",
    description: "Coletor ágil e eficiente.",
    category: "Coletores de Dados",
    image: UROVO_RT40,
  },
  
  {
    name: "ZEBRA MC33",
    description: "Ideal para logística e armazenagem.",
    category: "Coletores de Dados",
    image: ZEBRA_MC33,
  },

  // CATEGORIA: LEITORES COM FIO

  {
    name: "HONEYWELL 1960G",
    description: "Leitor com fio de alto desempenho.",
    category: "Leitores Com Fio",
    image: HONEYWELL_1960G,
  },
  {
    name: "ZEBRA DS2208",
    description: "Leitor com fio de alto desempenho.",
    category: "Leitores Com Fio",
    image: ZEBRA_DS2208
  },

// CATEGORIA: LEITORES SEM FIO
  {
    name: "HONEYWELL 1962G",
    description: "Leitor sem fio via Bluetooth.",
    category: "Leitores Sem Fio",
    image: HONEYWELL_1962G,
  },
  {
    name: "ZEBRA 2278",
    description: "Leitor sem fio via Bluetooth.",
    category: "Leitores Sem Fio",
    image: ZEBRA_2278,
  },
  {
    name: "UROVO 5203",
    description: "Leitor sem fio via Bluetooth.",
    category: "Leitores Sem Fio",
    image: UROVO_5203,
  },


  // CATEGORIA: IMPRESSORAS
  {
    name: "ZD400",
    description: "Impressora confiável para uso profissional.",
    category: "Impressoras",
    image: ZD400,
  },
  {
    name: "ZD510-HC",
    description: "Impressora de alta performance para ambientes exigentes.",
    category: "Impressoras",
    image: ZD510_HC,
  },


  {
    name: "ZD600",
    description: "Impressora eficiente com conectividade avançada.",
    category: "Impressoras",
    image: ZD600,
  },

];

const ProductSelection = () => {
  return (
    <section className="p-5 box-border">
      {/* New fixed heading */}
      <h2 className="fixed-heading">Produtos em destaque</h2>
      <div className="ps-product-selection">
        {/* Lista de produtos em swiper */}
        <SwiperReact
          modules={[Navigation, Autoplay]}
          autoplay = {{
            delay: 5000,
            disableOnInteraction: false //Caso o usuario interaja o deslize continua
          }}
          slidesPerView={4}
          centeredSlides={false}
          loop={true}
          navigation={{
            nextEl: '.ps-swiper-button-next',
            prevEl: '.ps-swiper-button-prev',
          }}
          spaceBetween={10}
          className="w-full py-12"
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={index} className="transition-all duration-300 ease-in-out">
              <div className="bg-white rounded-[10px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)] h-full flex flex-col group" style={{ minWidth: '280px' }}>
                <div className="w-full h-[280px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3 className="p-[15px] text-center text-lg text-[#333]">{product.name}</h3>
                <p className="p-[10px] text-center text-base text-[#555]">{product.description}</p>
                <div className="text-center mt-auto">
                  <button className="saiba-mais-ps">Saiba Mais</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="ps-swiper-button-next !text-[#333]"></div>
          <div className="ps-swiper-button-prev !text-[#333]"></div>
        </SwiperReact>
      </div>
    </section>
  );
};
export default ProductSelection;
