    import React from 'react';
    import { NavLink } from 'react-router-dom';
    import styles from './nav.module.scss';

    const MenuNav = ({ navItems = [] }) => {
    return (
        <nav>
            <ul>
                {navItems.map((item, index) => (
                <li key={index}>
                    <NavLink 
                        to={item.link} 
                        className={({ isActive }) => isActive ? styles.active : undefined}
                        >
                        {item.texte}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>
    );
    };

    export default MenuNav;