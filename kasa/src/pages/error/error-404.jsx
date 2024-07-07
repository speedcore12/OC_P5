import React from 'react';
import styles from './error.module.scss';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Error404 = () => {
    return (
        <div>
            <Header />
            <main className={styles.error}>
                <p className={styles.errorCode}>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>
                    Retourner sur la page d’accueil
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default Error404;