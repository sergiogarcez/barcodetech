
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>Descrição</p>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Email: teste@exemplo.com</p>
            <p>Telefone: (00) 1234-5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;