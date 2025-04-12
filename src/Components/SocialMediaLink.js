import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialMediaLink.css';
  
function SocialMediaLink({ icon, href }) {
  let ariaLabel = "Visit our social media page";
  if (icon.iconName === "instagram") {
    ariaLabel = "Follow us on Instagram";
  } else if (icon.iconName === "facebook") {
    ariaLabel = "Like us on Facebook";
  } else if (icon.iconName === "whatsapp") {
    ariaLabel = "Contact us on WhatsApp";
  }
  return (
    <a href={href} className="footer-link text-center" aria-label={ariaLabel}>
      <FontAwesomeIcon icon={icon} size="lg" color="white" />
    </a>
  );
}

export default SocialMediaLink;
