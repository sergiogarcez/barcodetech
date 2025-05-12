import { useState } from 'react'
import Layout from './components/site'
import './App.css'

function App() {

  return (
    <Layout>
      <div className="home-page">
        <h1>Teste</h1>
        <p>template básico</p>
        
        <section className="content-section">
          <h2>Teste title</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Testando</h3>
              </div>
          </div>
        </section>
        
        <section className="content-section">
          <h2>Teste</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default App;
