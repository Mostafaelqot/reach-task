import axiosInstance from "./axiosInstance";

export const youtubeList = async (data: string) => {
  return await axiosInstance
    .get("/search", {
      params: {
        q: data,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
