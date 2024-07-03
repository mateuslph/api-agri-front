import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

function SocialMediaLink({ icon, href }) {
  return (
    <a href={href} className="footer-link text-center">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialMediaLink;
