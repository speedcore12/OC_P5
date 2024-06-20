import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './card.module.scss';

const Card = ({ logement }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/housing', { state: { logement } });
    };

    return (
        <div 
            className={style.cardLink}
            onClick={handleClick} // Utilisation de la fonction de redirection
        >
            <div className={style.card} style={{ backgroundImage: `url(${logement.cover})` }}>
                <p>{logement.title}</p>
            </div>
        </div>
    );
};

export default Card;
