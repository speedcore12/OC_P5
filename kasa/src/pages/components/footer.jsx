import React from 'react';
import logo from './logo_kasa_footer.jpg';

import './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <div>
                <p>© 2020 Kasa.</p>
                <p> All rights reserved</p>
            </div>

        </footer>
    );
};

export default Footer;