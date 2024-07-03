import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterList from './FooterList';
import SocialMediaLink from './SocialMediaLink';


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

          <section id="footer-contacts">
            <h1>Logo</h1>
            <p>It's all about your dreams. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div id="footer-social-media">
              <SocialMediaLink icon={faInstagram} href="https://www.instagram.com/" />
              <SocialMediaLink icon={faFacebook} href="https://www.facebook.com/" />
              <SocialMediaLink icon={faWhatsapp} href="https://web.whatsapp.com/" />
            </div>
          </section>
  
          <section aria-label="Footer Navigation">
            <FooterList title="Blog" links={blogLinks} />
            <FooterList title="Products" links={productLinks} />
          </section>
  
          <section id="footer-subscribe">
            <h3>Subscribe</h3>
            <p>Enter your e-mail to get notified about our news solutions</p>
            <div id="input-group">
              <input type="email" id="email" />
              <button>
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>
          </section>

          <section id="footer-copyright">
            &#169; 2023 all rights reserved
          </section>
          
        </section>
      </footer>
    );
  }
  
export default Footer;
  