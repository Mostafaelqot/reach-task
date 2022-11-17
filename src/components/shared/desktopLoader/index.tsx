import React from 'react'
import styles from "./style.module.css";

export default function Loader() {
    return (
      <div className={styles.loaderCenter}>
        <div className={styles.lds_default}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
}
