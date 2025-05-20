import React from 'react';
import Layout from '../components/site';
import FeaturedProducts from '../components/Productswiper';

const Home = () => {
  // Dados de exemplo para produtos destacados
  const featuredProducts = [
    {
      id: 1,
      name: 'Scanner de Código de Barras Bluetooth',
      price: 299.99,
      image: '../assets/images/teste.png', 
    },
    {
      id: 2,
      name: 'Impressora de Etiquetas Térmica',
      price: 499.99,
      image: '/images/printer1.jpg',
    },
    {
      id: 3,
      name: 'Leitor QR Code Sem Fio',
      price: 249.99,
      image: '/images/reader1.jpg',
    },
    {
      id: 4,
      name: 'Terminal Portátil de Coleta de Dados',
      price: 899.99,
      image: '/images/terminal1.jpg',
    },
    {
      id: 5,
      name: 'Etiquetas RFID Adesivas',
      price: 39.99,
      image: '/images/rfid1.jpg',
    },
  ];

  return (
    <Layout>
      <section className="hero">
        {/* Conteúdo do hero */}
      </section>
      
      <FeaturedProducts products={featuredProducts} />
      
      {/* Outras seções da página */}
    </Layout>
  );
};

export default Home;