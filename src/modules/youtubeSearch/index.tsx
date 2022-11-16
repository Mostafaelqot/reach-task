import { useEffect } from "react";
import YoutubeCard from "../../components/shared/card";
import SubHeader from "../../components/shared/subHeader";
import { youtubeList } from "../../network/api/youtube";
import styles from "./styles.module.css";

export default function YoutubeSearch() {

useEffect( () => {
  // const fetchYoutubeList = async () => {
  //   const response = await youtubeList()
  //   console.log(response);
  // }
  // fetchYoutubeList()
  console.log("dfsdf");
  
}, [])


  return (
    <div className={styles.youtube_container}>
      <SubHeader />
      <YoutubeCard />
    </div>
  );
}
