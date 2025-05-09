import React, { useState } from 'react';
import './ProductSelection.css';
import computadoresImg from '../../assets/images/computador.jpg';
import impressorasImg from '../../assets/images/impressora.jpg';
import scannersImg from '../../assets/images/scanner.jpg';

const ProductSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('computadores');

  const categories = {
    computadores: { img: computadoresImg, name: 'Computadores Móveis' },
    impressoras: { img: impressorasImg, name: 'Impressoras' },
    scanners: { img: scannersImg, name: 'Scanners' },
  };

  return (
    <section className="product-section">
      <h1 className="section-title">NOSSOS PRODUTOS</h1>
      <div className="product-container">
        <div className="product-content">
          <div className="product-image-wrapper">
            <img src={categories[selectedCategory].img} alt={categories[selectedCategory].name} className="product-image" />
          </div>
          <div className="product-info">
            <h2 className="product-title">Conheça nossos produtos</h2>
            <button className="view-products">Ver Produtos</button>
          </div>
        </div>
        <div className="category-tabs" role="tablist" aria-orientation="horizontal">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              role="tab"
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              aria-selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {categories[category].name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSelection;

