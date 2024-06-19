import React from 'react';
import './header.module.scss';

import Logo from './logo';
import MenuNav from './menuNav';

const navItems = [                
    {link: '/', texte: 'ACCUEIL'},
    {link: '/about', texte: 'A PROPOS'}
];

const Header = () => {
    return (
        <header>
            <Logo />
            <MenuNav navItems={navItems} />
        </header>
    );
};

export default Header;