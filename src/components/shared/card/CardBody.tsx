import React from "react";
import styles from "./style.module.css";

export default function CardBody() {
  return (
    <div className={styles.cardBody_wrapper}>
      <h2 className={styles.cardTitle}>Espongpop in real life espodies 2</h2>

      <ul className={styles.cardHints}>
        <li className={styles.cardHints_item}>item</li>
        <li className={styles.cardHints_item}>item</li>
        <li className={styles.cardHints_item}>item</li>
        <li className={styles.cardHints_item}>item</li>
      </ul>
      <p className={styles.cardBody_phgraf}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        neque 
      </p>
    </div>
  );
}
