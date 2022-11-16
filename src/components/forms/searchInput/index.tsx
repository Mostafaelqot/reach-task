import React from "react";
import styles from "./styles.module.css";
import searchIcon from "../../../assets/SearchIcon.png";

export default function SearchInput() {
  return (
    <div className={styles.searchinput_container}>
      <input className={styles.search_input} type="text" />
      <div className={styles.searchInput_imgHolder}>
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
