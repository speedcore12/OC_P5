import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './propertyDetails.module.scss';
import Dropdown from '../components/dropdown';

const PropertyDetails = ({ details }) => {
    // Fonction pour générer les étoiles basées sur la note
    const renderStars = (rating) => {
        const stars = [];
        const totalStars = 5;
        for (let i = 0; i < totalStars; i++) {
            stars.push(
                <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    style={{ color: i < rating ? '#FF6060' : '#E3E3E3' }} 
                />
            );
        }
        return stars;
    };



    return (
        <div className={styles.propertyDetails}>
                <div className={styles.titre}>
                    <h1>{details.title}</h1>
                    <p>{details.location}</p>
                </div>

                <ul className={styles.tags}>
                    {details.tags.map((tag, index) => (
                        <li key={index} className={styles.tag}>
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className={styles.host}>
                    <p>{details.host.name}</p>
                    <img src={details.host.picture} alt={details.host.name} />
                </div>

                <div className={styles.rating}>
                    {renderStars(details.rating)}
                </div>
            
            <div className={styles.dropdowns}>
                <Dropdown data={[{ title: "Description", content: [details.description] }]} />
                <Dropdown data={[{ title: "Équipements", content: details.equipments }]} />
            </div>
        </div>
    );
};

export default PropertyDetails;
