import React from 'react';
import styles from './about.module.scss'; // Assurez-vous d'importer les styles correctement
import Header from '../components/header';   
import Footer from '../components/footer';
import bgImage from './title_background.webp';
import Title from '../components/title';
import Dropdown from '../components/dropdown';

const Apropos = () => {

    const data = [
        {
            title: "Fiabilité",
            content: [
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            ]
        },
        {
            title: "Respect",
            content: [
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            ]
        },
        {
            title: "Service",
            content: [
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            ]
        },
        {
            title: "Sécurité",
            content: [
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            ]
        }
    ];    

    return (
        <div className={styles.about}>
            <Header />
            
            <main className={styles.main}>
                <Title backgroundImageUrl={bgImage} text='' />
                <div className={styles.contener}>
                    <Dropdown data={data} />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Apropos;
