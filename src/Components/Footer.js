import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterList from './FooterList';
import SocialMediaLink from './SocialMediaLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const blogLinks = [
    { text: 'Tech' },
    { text: 'Adventures' },
    { text: 'Music' },
  ];

  const productLinks = [
    { text: 'App' },
    { text: 'Desktop' },
    { text: 'Cloud' },
  ];

  return (
 <footer className="footer">
      <section id="footer-content" className="footer-content">

        <section id="footer-contacts" className="column-footer" aria-labelledby="contacts-heading">
          <h2 id="contacts-heading" className="visually-hidden">Contact Information</h2>
          <img className='logo-empresa' src="/logo-empresa.png" alt="Descrição da imagem" />
          <p>Software desenvolvido em tempo hábil para ultrapassar concorrência.</p>
          <div id="footer-social-media">
            <SocialMediaLink icon={faInstagram} href="https://www.instagram.com/" />
            <SocialMediaLink icon={faFacebook} href="https://www.facebook.com/" />
            <SocialMediaLink icon={faWhatsapp} href="https://web.whatsapp.com/" />
          </div>
        </section>

        <section aria-label="Footer Navigation" className="column-footer" aria-labelledby="blog-heading products-heading">
          <FooterList title="Blog" links={blogLinks} headingId="blog-heading" />
          <FooterList title="Produtos" links={productLinks} headingId="products-heading" />
        </section>

        <section id="footer-subscribe" className="column-footer" aria-labelledby="subscribe-heading">
          <h3 id="subscribe-heading">Inscreva-se</h3>
          <p>Adicione seu e-mail aqui:</p>
          <form id="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail..."
              required
            />
            <button type="submit" aria-label="Enviar e-mail" >
              <span className="visually-hidden">Subscribe</span>
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
            </button>
          </form>
        </section>

        <section id="footer-copyright" className="column-footer">
          &#169; 2023 Todos os direitos reservados.
        </section>

      </section>
    </footer>
  );
}

export default Footer
