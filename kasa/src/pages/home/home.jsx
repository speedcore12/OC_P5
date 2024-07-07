import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import bgImage from './title_background.webp';
import Card from '../components/card';


const Home = () => {
    const [logements, setLogements] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les données du fichier JSON
        const fetchData = async () => {
            try {
                const response = await fetch('/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLogements(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    const text = 'Chez vous, partout et ailleurs';
    return (
        <div>
            <Header />
            <main className={styles.home}>
                <Title backgroundImageUrl={bgImage} text={text} />
                <div className={styles.gallery}>
                    {error && <p>Erreur : {error.message}</p>}
                    {logements.map((logement, index) => (
                        <Card key={index} logement={logement} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
