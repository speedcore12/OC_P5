import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import style from "./slider.module.scss";

const Slider = ({ pictures }) => {
    // Utilisation de useState pour gérer l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour afficher l'image suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    // Fonction pour afficher l'image précédente
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className={style.slider}>
            <div className={style.sliderContainer}>
                {/* Div avec l'image en arrière-plan */}
                <div 
                    className={style.sliderImage} 
                    style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
                >
                    
                    <div className={style.sliderButtons}>
                        {/* Paragraphe pour l'image précédente */}
                        <p onClick={handlePrev} className={style.prevButton}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </p>
                        
                        {/* Paragraphe pour l'image suivante */}
                        <p onClick={handleNext} className={style.nextButton}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </p>
                    </div>
                    
                        {/* Affichage de la légende avec l'index de l'image actuelle et le nombre total d'images */}
                    <p className={style.sliderCaption}>
                        {currentIndex + 1}/{pictures.length}
                    </p>
                </div>
            </div>
            

        </div>
    );
};

export default Slider;
