import React from 'react';
import Header from './components/Header/Header';
import ProductSelection from './components/Product_collection/ProductSelection';

function App() {
  return (
    <div>
      <Header /> {/* Exibe o cabeçalho no topo */}
      <ProductSelection /> {/* Exibe a aba de seleção de produtos */}
    </div>
  );
}

export default App;