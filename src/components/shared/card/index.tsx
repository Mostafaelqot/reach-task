import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import styles from "./style.module.css";

export default function YoutubeCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.cardImage_wrapper}>
        <CardImage />
      </div>
      <div className={styles.cardBody_wrapper}>
        <CardBody />
      </div>
    </div>
  );
}
