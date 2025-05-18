import '../styles/ProductSelection.css';
import * as React from 'react';

import HONEYWELL_EDA52 from "../assets/images/coletores/HONEYWELL_EDA52.jpeg";
import UROVO_RT40 from "../assets/images/coletores/UROVO_RT40.jpeg";
import ZEBRA_MC33 from "../assets/images/coletores/ZEBRA_MC33_MC94.jpeg";

import HONEYWELL_1960G from "../assets/images/leitores-c-fio/HONEYWELL_1960G.webp";
import ZEBRA_DS2208 from "../assets/images/leitores-c-fio/ZEBRA_DS2208.jpeg";

import HONEYWELL_1962G from "../assets/images/leitores-s-fio/HONEYWELL_1962G.jpeg";
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
    name: "UROVO 5203 BT",
    description: "Leitor sem fio via Bluetooth.",
    category: "Leitores Sem Fio",
    image: HONEYWELL_1962G,
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

const categories = [...new Set(productsData.map((product) => product.category))];

const ProductSelection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  // Filtra os produtos da categoria selecionada
  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  // Define o produto principal como o primeiro da lista filtrada
  const mainProduct = filteredProducts[0];
  // Os demais produtos
  const otherProducts = filteredProducts.slice(1);

  return (
    <section className="product-section-container">
      <h2>Produtos em destaque</h2>
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

        {/* Lista de produtos em grid */}
        <div className="product-list-grid">
          {/* Produto principal */}
          {mainProduct && (
            <>
              <div className="main-product-container">
                <div className="main-product-image-card">
                  <img src={mainProduct.image} alt={mainProduct.name} />
                </div>
                <div className="main-product-info-card">
                  <div className="main-product-name">{mainProduct.name}</div>
                  <div className="main-product-description">{mainProduct.description}</div>
                  <button className="saiba-mais">Saiba Mais</button>
                </div>
              </div>
            </>
          )}

          {/* Outros produtos */}
          <div className="other-products-grid">
            {otherProducts.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <button className="saiba-mais">Saiba Mais</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSelection;
