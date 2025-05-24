import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomSwiper from './Productswiper';
import '../styles/site.css';
import ProductSelection from './ProductSelection';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="containerr">
        <h1>Coleções</h1>
        <CustomSwiper />
        <div className="container">
          {children}
        </div>
        <ProductSelection />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;