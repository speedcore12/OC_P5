import React from 'react';
import style from './housing.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import { useLocation } from 'react-router-dom';
import Slider from '../components/slider';
import PropertyDetails from '../components/propertyDetails';

const Housing = () => {
    const location = useLocation();
    const logement = location.state && location.state.logement;

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
