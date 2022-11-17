import { useContext, useEffect, useMemo, useState } from "react";
import YoutubeCard from "../../components/shared/card";
import SubHeader from "../../components/shared/subHeader";
import {
  searchContext,
  searchDispatchContext,
} from "../../context/SearchContext";
import { youtubeList } from "../../network/api/youtube";
import styles from "./styles.module.css";

type ListItem = {
  snippet: {
    title: string;
    publishTime: string;
    publishedAt: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };
  id: { videoId: string };
};

export default function YoutubeSearch() {
  const { searchInfo, searchList } = useContext(searchContext);
  const dispatch = useContext(searchDispatchContext);

  useEffect(() => {
    const fetchYoutubeList = async () => {
      const response = await youtubeList("");
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
      } else {
        console.log("Error");
        
      }
    };
    fetchYoutubeList();
  }, []);

  const allListItems = useMemo(() => {
    return searchList.length > 0
      ? searchList.map((item: ListItem) => {
          return <YoutubeCard key={item.id.videoId} data={item} />;
        })
      : [];
  }, [searchList]);

  return (
    <div className={styles.youtube_container}>
      <SubHeader data={searchInfo} />
      {allListItems}
    </div>
  );
}
