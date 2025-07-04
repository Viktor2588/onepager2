import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <p>&copy; 2024 IMR Industrieverwertung. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;