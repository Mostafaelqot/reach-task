import React from "react";
import styles from "./styles.module.css";
import filterIcon from "../../../assets/Filter.svg"

type subHeaderProps = {
  data: {
    totalResults : string;
  };
};

export default function SubHeader(props: subHeaderProps) {
  const { data } = props
  return (
    <div className={styles.subHeader_container}>
      <p className={styles.subHeader_title}>
        About {data.totalResults} Results
      </p>

      <p className={styles.subHeader_title}>
        <img src={filterIcon} alt="" />
        Filters
      </p>
    </div>
  );
}
