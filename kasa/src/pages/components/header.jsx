import React, { useState, useEffect } from 'react';
import './header.module.scss';
import Logo from './logo';
import MenuNav from './menuNav';

const Header = () => {
    // Utilisation du hook useState pour définir et gérer l'état des éléments de navigation
    const [navItems, setNavItems] = useState([
        {link: '/', texte: 'Accueil'},
        {link: '/about', texte: 'A propos'}
    ]);

    // Utilisation du hook useEffect pour ajouter un écouteur d'événements sur le redimensionnement de la fenêtre
    useEffect(() => {
        const handleResize = () => {
            // Vérifie si la largeur de l'écran est inférieure à 768 pixels
            const isSmallScreen = window.innerWidth < 768;
            // Met à jour l'état des éléments de navigation en conséquence
            setNavItems([
                {link: '/', texte: isSmallScreen ? 'ACCUEIL' : 'Accueil'},
                {link: '/about', texte: isSmallScreen ? 'A PROPOS' : 'A propos'}
            ]);
        };

        // Vérification initiale lors du montage du composant
        handleResize();

        // Ajout de l'écouteur d'événements pour le redimensionnement de la fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <Logo />
            <MenuNav navItems={navItems} />
        </header>
    );
};

export default Header;
