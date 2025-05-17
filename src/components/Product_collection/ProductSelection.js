import React, { useState } from 'react';
import './ProductSelection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import EC50 from '../../assets/images/pcs_moveis/ec50.png';
import Produto01 from '../../assets/images/pcs_moveis/MC33xx.png';
import TC5X from '../../assets/images/pcs_moveis/tc5x.png';

const productsData = [

  // CATEGORIA: COLETORES DE DADOS

  {
    name: "HONEYWELL EDA52",
    description: "Coletor robusto para ambientes industriais.",
    category: "Coletores de Dados",
    image: require("../../assets/images/coletores/HONEYWELL_EDA52.jpeg") , 
  },
  
  {
    name: "UROVO RT40",
    description: "Coletor ágil e eficiente.",
    category: "Coletores de Dados",
    image: require("../../assets/images/coletores/UROVO_RT40.jpeg"),
  },
  
  {
    name: "ZEBRA MC33",
    description: "Ideal para logística e armazenagem.",
    category: "Coletores de Dados",
    image: require("../../assets/images/coletores/ZEBRA_MC33_MC94.jpeg"),
  },

  // CATEGORIA: LEITORES COM FIO

  {
    name: "HONEYWELL 1960G",
    description: "Leitor com fio de alto desempenho.",
    category: "Leitores Com Fio",
    image: require("../../assets/images/leitores-c-fio/HONEYWELL_1960G.webp"),
  },
  {
    name: "ZEBRA DS2208",
    description: "Leitor com fio de alto desempenho.",
    category: "Leitores Com Fio",
    image: require("../../assets/images/leitores-c-fio/ZEBRA_DS2208.jpeg"),
  },

// CATEGORIA: LEITORES SEM FIO
  {
    name: "UROVO 5203 BT",
    description: "Leitor sem fio via Bluetooth.",
    category: "Leitores Sem Fio",
    image: require("../../assets/images/leitores-s-fio/HONEYWELL_1962G.jpeg"),
  },


  // CATEGORIA: IMPRESSORAS
  {
    name: "ZD400",
    description: "Impressora confiável para uso profissional.",
    category: "Impressoras",
    image: require("../../assets/images/impressoras/ZD400.png"),
  },
  {
    name: "ZD510-HC",
    description: "Impressora de alta performance para ambientes exigentes.",
    category: "Impressoras",
    image: require("../../assets/images/impressoras/ZD510‑HC.png"),
  },


  {
    name: "ZD600",
    description: "Impressora eficiente com conectividade avançada.",
    category: "Impressoras",
    image: require("../../assets/images/impressoras/ZD600.png"),
  },

];

const categories = [...new Set(productsData.map((product) => product.category))];

const ProductSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="product-selection">
      {/* Seletor de categorias */}
      <div className="category-selector">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de produtos */}
      <div className="product-list">
        {productsData
          .filter((product) => product.category === selectedCategory)
          .map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="saiba-mais">Saiba Mais</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSelection;
