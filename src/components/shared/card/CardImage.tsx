import React from "react";
import styles from "./style.module.css";

type cardImageProps = {
  src: { url: string };
};

export default function cardImageProps(props: cardImageProps) {
  const { src } = props;
  return <img src={src.url} alt="" className={styles.cardImage} />;
}
