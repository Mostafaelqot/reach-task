import React from "react";
import SearchInput from "../../forms/searchInput";
import Logo from "../logo";
import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={styles.Header_container}>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.searchInput_wrapper}>
        <SearchInput />
      </div>
    </div>
  );
}
