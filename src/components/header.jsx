
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Testando site</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



