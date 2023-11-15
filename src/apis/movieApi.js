import fetcher from "./fetcher";

export const getBannersAPI = async () => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content; // [];
  } catch (error) {}
};

export const getListMovieAPI = async () => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP03",
      },
      //"/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&page=1&pageSize=10"
    });
    return response.data.content;
  } catch (error) {}
};

export const getMovieDetailsAPI = async (movieId) => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    throw Error("error");
  }
};
