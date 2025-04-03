import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer/Footer.css';

function SocialMediaLink({ icon, href }) {
  return (
    <a href={href} className="footer-link text-center">
      <FontAwesomeIcon icon={icon} size="lg" color="white" />
    </a>
  );
}

export default SocialMediaLink;
