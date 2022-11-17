import React from "react";
import styles from "./style.module.css";

type CardBodyProps = {
  data: {
    title: string;
    publishTime: string;
    publishedAt: string;
    description: string;
  };
};

export default function CardBody(props: CardBodyProps) {
  const { data } = props;

  return (
    <div className={styles.cardBody_wrapper}>
      <h2 className={styles.cardTitle}>{data.title}</h2>

      <ul className={styles.cardHints}>
        <li className={styles.cardHints_item}>{data.publishTime}</li>
        <li className={styles.cardHints_item}>{data.publishedAt}</li>
 
      </ul>
      <p className={styles.cardBody_phgraf}>
        {data.description}
      </p>
    </div>
  );
}
