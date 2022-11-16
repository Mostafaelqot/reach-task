import YoutubeSearch from "../../modules/youtubeSearch";
import Header from "../shared/header";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <YoutubeSearch />
    </div>
  );
}
