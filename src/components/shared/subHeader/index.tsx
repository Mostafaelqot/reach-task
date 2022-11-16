import React from "react";
import styles from "./styles.module.css";
import filterIcon from "../../../assets/Filter.svg"
export default function SubHeader() {
  return (
    <div className={styles.subHeader_container}>
      <p className={styles.subHeader_title}>About 12000000 Results</p>

      <p className={styles.subHeader_title}>
        <img src={filterIcon} alt="" />
        Filters
      </p>
    </div>
  );
}
