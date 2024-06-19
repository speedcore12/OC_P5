import React from 'react';
import logo from './logo_kasa_footer.jpg';

import './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;