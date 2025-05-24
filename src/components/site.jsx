import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomSwiper from './Productswiper';
import '../styles/site.css';
import ProductSelection from './ProductSelection';



const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">
        {/* Seção 1: Custom Collection */}
        <section className="w-full py-10">
          <div className="max-w-[1200px] mx-auto">
            <ProductSelection />
          </div>
        </section>
        
        {/* Seção 2: Swiper abaixo */}
        <section className="w-full">
          <CustomSwiper />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;