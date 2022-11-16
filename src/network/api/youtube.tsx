import axiosInstance from "./axiosInstance";

export const youtubeList = async () => {
  await axiosInstance
    .get("/search")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err;
    });
};
