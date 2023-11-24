import { GROUP_CODE } from "../constants";
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
        maNhom: GROUP_CODE,
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

export const addMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      payload
    );
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};
