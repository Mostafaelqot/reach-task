import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import searchIcon from "../../../assets/SearchIcon.png";
import {
  searchContext,
  searchDispatchContext,
} from "../../../context/SearchContext";

type SearchInputProps = {
  handelSearch: (key: string) => void;
};

export default function SearchInput(props: SearchInputProps) {
  const { handelSearch } = props;
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className={styles.searchinput_container}>
      <input
        className={styles.search_input}
        type="text"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <div
        className={styles.searchInput_imgHolder}
        onClick={() => {
          handelSearch(searchWord);
        }}
      >
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
