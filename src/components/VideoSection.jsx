import React from 'react';

const HeroSectionVideo = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center text-white">
      {/* Container do Vídeo de Fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src= "src/assets/videos/Vídeo_Leitor_e_Produto_Industrial.mp4"
        autoPlay ={true}
        loop = {true}
        muted = {true}
        playsInline = {true} // Importante para autoPlay em dispositivos móveis, mais focado em IOS
      >
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Camada de Escurecimento (Overlay) - Opcional, para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Conteúdo (Texto e Botão) */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="block">Aumente a produtividade do seu empreendimento</span>
          <span className="block mt-6">Potencialize seu negócio</span>
        </h1>
        <p className="text-lg text-green-600 sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Saiba Mais!
        </button>
      </div>
    </section>
  );
};

export default HeroSectionVideo;