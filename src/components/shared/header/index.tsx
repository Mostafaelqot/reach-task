import React, { useContext } from "react";
import {
  SearchContextProvider,
  searchDispatchContext,
} from "../../../context/SearchContext";
import { youtubeList } from "../../../network/api/youtube";
import SearchInput from "../../forms/searchInput";
import Logo from "../logo";
import styles from "./style.module.css";

export default function Header() {
  const dispatch = useContext(searchDispatchContext);

  const doSearch = async (searchKey: string) => {
    const response = await youtubeList(searchKey);
    if (response?.status === 200) {
      dispatch({
        type: "setSearchList",
        payload: response.data.items,
      });
      dispatch({
        type: "setSearchInfo",
        payload: response.data.pageInfo,
      });
      dispatch({
        type: "setSearchLoading",
        payload: false,
      });
    }
  };

  return (
    <div className={styles.Header_container}>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.searchInput_wrapper}>
        <SearchInput handelSearch={doSearch} />
      </div>
    </div>
  );
}
