import React from 'react'
import test from "../../../assets/download.png";
import styles from "./style.module.css";

export default function CardImage() {
  return (
    
      <img src={test} alt="" className={styles.cardImage} />
      
  );
}
