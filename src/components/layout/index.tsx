import { useContext } from "react";
import { searchContext, SearchContextProvider } from "../../context/SearchContext";
import YoutubeSearch from "../../modules/youtubeSearch";
import Loader from "../shared/desktopLoader";
import Header from "../shared/header";

export default function Layout() {
  const { searchLoading } = useContext(searchContext);
  return (
    <div className="container">
      <SearchContextProvider>
        <Header />
        {searchLoading ? <Loader /> : <YoutubeSearch />}
      </SearchContextProvider>
    </div>
  );
}
