import React from 'react';

const Footer: React.FC = () => {
 return (
    <footer>
      <p>© {new Date().getFullYear()} My Next Blog</p>
    </footer>
 );
}

export default Footer;