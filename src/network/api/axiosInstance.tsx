import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3";
const key = "AIzaSyBvHv6aJANnZ6TSSTVM_frlnybU9rtkcGg";

const instance = axios.create({
  baseURL,
  params: {
    part: "snippet",
    key: key,
    q : ""
  },
});

export default instance;
