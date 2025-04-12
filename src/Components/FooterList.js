import './Footer.css'; // Importando arquivo CSS

// Componentes reutilizáveis (crie arquivos separados para cada um)
function FooterList({ title, links, headingId }) {
  return (
    <ul className="footer-list">
      <li>
        <h3 id={headingId}>{title}</h3>
       </li>
      {links.map((link) => (
        <li key={link.text}>
          <a href="#" className="footer-link">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterList;
