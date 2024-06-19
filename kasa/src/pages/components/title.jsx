import React from 'react';
import styles from './title.module.scss';

const Title = ({ backgroundImageUrl, text }) => {
    return (
        <div className={styles.title} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <span>{text}</span>
        </div>
    );
};

export default Title;
