import React from 'react';
import style from './housing.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import { useLocation } from 'react-router-dom';
import Slider from '../components/slider';
import PropertyDetails from '../components/propertyDetails';

const Housing = () => {
    const location = useLocation();
    console.log('Location object:', location); // Log pour déboguer

    const logement = location.state && location.state.logement;
    console.log('logement received in Housing:', logement); // Log pour déboguer

    if (!logement) {
        // Si logement n'est pas défini, afficher un message d'erreur
        return <p>Erreur: logement non trouvé</p>;
    }

    return (
        <div>
            <Header />
            <main className={style.housing}>
                <Slider pictures={logement.pictures} />
                <PropertyDetails details={logement} />




            </main>
            <Footer />
        </div>
    );
};

export default Housing;
