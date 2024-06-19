import React from 'react';
import styles from './home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import bgImage from './title_background.webp';

const Home = () => {


    const text = 'Chez vous, partout et ailleurs';
    return (
        <div>
            <Header />
            <main className={styles.home}>
            <Title backgroundImageUrl={bgImage} text={text} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;