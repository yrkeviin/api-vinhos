import React from 'react';
import styles from './WineCard.module.css';

import Image from 'next/image'; 

const WineCard = ({ image, name, producer }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width={100} height={350} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.producer}>{producer}</p>
      </div>
    </div>
  );
};

export default WineCard;