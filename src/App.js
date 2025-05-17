import React from 'react';
import Header from './components/Header/Header';
import ProductSelection from './components/Product_collection/ProductSelection';

function App() {
  return (
    <div>
      <Header /> {/* Exibe o cabeçalho no topo */}
      <ProductSelection />
    </div>
  );
}

export default App;