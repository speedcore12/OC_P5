import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './dropdown.module.scss';

// Composant Dropdown qui reçoit une prop `data` contenant un tableau d'objets avec `title` et `content`
const Dropdown = ({ data }) => {
    // État local pour suivre les index des dropdowns ouverts
    const [openIndexes, setOpenIndexes] = useState([]);

    // Fonction pour basculer l'état d'un dropdown
    const toggleDropdown = (index) => {
        if (openIndexes.includes(index)) {
            // Si l'index est déjà ouvert, on le ferme en le retirant de openIndexes
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            // Sinon, on l'ajoute à openIndexes pour l'ouvrir
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div className={styles.dropdowns}>
            {data.map((item, index) => (
                // Chaque élément du tableau `data` est rendu comme un dropdown individuel
                <div className={styles.dropdown} key={index}>
                    {/* Titre du dropdown, cliquable pour ouvrir/fermer le contenu */}
                    <div className={styles.title} onClick={() => toggleDropdown(index)}>
                        <p>{item.title}</p>
                        <p>
                            {/* FontAwesomeIcon avec une classe dynamique pour la rotation */}
                            <FontAwesomeIcon
                                icon={faChevronUp}
                                className={`${styles.icon} ${openIndexes.includes(index) ? styles.rotate : ''}`}
                            />
                        </p>
                    </div>

                    {/* Affiche le contenu du dropdown seulement si l'index est ouvert */}
                    <div className={`${styles.content} ${openIndexes.includes(index) ? styles.open : ''}`}>
                        <ul>
                            {item.content.map((contentItem, contentIndex) => (
                                // Chaque élément de contenu est rendu dans un élément de liste <li>
                                <li key={contentIndex}>{contentItem}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
