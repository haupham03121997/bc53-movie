import fetcher from "./fetcher";

export const getMovieShowTimesAPI = async (movieId) => {
  try {
    const response = await fetcher("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
    // gọi api bằng fetcher
  } catch (error) {
    throw "Lỗi";
  }
};
