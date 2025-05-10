import React, { useState } from 'react';
import './ProductSelection.css';
import computadoresImg from '../../assets/images/computador.jpg';
import impressorasImg from '../../assets/images/impressora.jpg';
import scannersImg from '../../assets/images/scanner.jpg';


const ProductSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('computadores');

  const categories = {
    computadores: { img: computadoresImg, name: 'Computadores Móveis', description: 'Alta performance para mobilidade e produtividade.' },
    impressoras: { img: impressorasImg, name: 'Impressoras', description: 'Impressões rápidas e de alta qualidade.' },
    scanners: { img: scannersImg, name: 'Scanners', description: 'Captação precisa para digitalizações detalhadas.' },
  };

  return (
    <section className="product-section">
      <h1 className="section-title">Nossos Produtos</h1>
      <div className="product-container">
        
        {/* Conteúdo do Produto com Imagem Centralizada */}
        <div className="product-content">
          <div className="product-image-wrapper">
            <img 
              src={categories[selectedCategory].img} 
              alt={categories[selectedCategory].name} 
              className="product-image" 
            />
          </div>
          <div className="product-info">
            <h2 className="product-title">{categories[selectedCategory].name}</h2>
            <p className="product-description">{categories[selectedCategory].description}</p>
            <button className="view-products">Ver Produtos</button>
          </div>
        </div>

        {/* Abas de Categorias Centralizadas e Estilizadas */}
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