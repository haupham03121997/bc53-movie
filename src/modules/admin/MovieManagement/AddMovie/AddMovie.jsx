import { Grid, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import { GROUP_CODE } from "../../../../constants";
import dayjs from "dayjs";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddMovie = () => {
  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: GROUP_CODE,
      ngayKhoiChieu: "",
      sapChieu: true,
      dangChieu: false,
      hot: true,
      danhGia: "",
      hinhAnh: undefined,
    },
  });

  const onSubmit = (formValues) => {
    console.log("formValues", formValues);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Typography component={"h2"}>AddMovie</Typography>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ marginTop: 20 }}
        >
          <Grid item md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={"column"} spacing={3}>
                <TextField
                  label="Tên phim"
                  fullWidth
                  {...register("tenPhim")}
                />
                <TextField label="Trailer" fullWidth {...register("trailer")} />
                <TextField label="Mô tả" fullWidth {...register("moTa")} />
                <Controller
                  control={control}
                  name="ngayKhoiChieu"
                  render={(field) => {
                    return (
                      <DatePicker
                        label="Ngày chiếu"
                        format="DD/MM/YYYY"
                        onChange={(date) => {
                          const value = dayjs(date).format("DD/MM/YYYY");
                          setValue("ngayKhoiChieu", value);
                        }}
                        {...field}
                      />
                    );
                  }}
                />

                <TextField label="Đánh giá" {...register("danhGia")} />
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" {...register("hinhAnh")} />
                </Button>
                <Button variant="contained" size="large" type="submit">
                  Thêm phim
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default AddMovie;
