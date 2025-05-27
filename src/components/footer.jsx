
import '../styles/footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importe os ícones que precisar

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição Curta */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Se você tiver um logo, pode inseri-lo aqui */}
            {/* <img src="/caminho/do/seu/logo.png" alt="Logo da Empresa" className="h-12 mb-4" /> */}
            <h3 className="text-xl font-bold text-black mb-2">Barcode Tech</h3>
            <p className="text-sm">
              Soluções inovadoras e tecnológicas para o seu negócio.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/sobre" className="hover:text-black transition-colors duration-200">Produtos</a></li>
              <li><a href="/servicos" className="hover:text-black transition-colors duration-200">Serviços</a></li>
              <li><a href="/produtos" className="hover:text-black transition-colors duration-200">Notícias</a></li>
              <li><a href="/contato" className="hover:text-black transition-colors duration-200">Contato</a></li>
              <li><a href="/blog" className="hover:text-black transition-colors duration-200">Sobre</a></li> {/* Opcional */}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Fale Conosco</h3>
            <ul className="space-y-2 text-sm">
              <li>Endereço: Rua Sergio Garcez, numero 10</li>
              <li>Telefone: <a href="tel:+550012345678" className="hover:text-white transition-colors duration-200">(00) 1234-5678</a></li>
              <li>Email: <a href="mailto:contato@suaempresa.com" className="hover:text-white transition-colors duration-200">barcodetech@gmail.com</a></li>
              {/* Opcional: Horário de funcionamento */}
              <li>Horário: Seg - Sex: 8h - 18h</li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais e Newsletter (Opcional) */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a href="https://facebook.com/suaempresa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-2xl">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/suaempresa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/suaempresa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-2xl">
                <FaLinkedin />
              </a>
              {/* Adicione um link direto para WhatsApp com uma mensagem pré-definida */}
              <a href="https://wa.me/550012345678?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-2xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior do Rodapé */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Barcode Tech. Todos os direitos reservados. | <a href="/politica-de-privacidade" className="hover:text-white transition-colors duration-200">Política de Privacidade</a> | <a href="/termos-de-uso" className="hover:text-white transition-colors duration-200">Termos de Uso</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;