import React from 'react';
import styles from './home.module.scss';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Title from '../components/home/title';

const Home = () => {
    return (
        <div>
            <Header />
            <main className={styles.home}>
                <Title />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

