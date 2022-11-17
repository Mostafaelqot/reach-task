import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import styles from "./style.module.css";

type youtubeCardProps = {
  key: string;
  data: {
    snippet: {
      title: string;
      publishTime: string;
      publishedAt: string;
      description: string;
      thumbnails: { medium: { url: string } };
    };
  };
};

export default function YoutubeCard(props: youtubeCardProps) {
  const { data } = props;
  return (
    <div className={styles.card_container}>
      <div className={styles.cardImage_wrapper}>
        <CardImage src={data.snippet.thumbnails.medium} />
      </div>
      <div className={styles.cardBody_wrapper}>
        <CardBody data={data.snippet} />
      </div>
    </div>
  );
}
