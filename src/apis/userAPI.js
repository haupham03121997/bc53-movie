import fetcher from "./fetcher";

export const signupAPI = async (payload) => {
  try {
    // payload: { taiKhoan: "", matKhau:""...}
    const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi 🤧";
  }
};
