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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMovieAPI } from "../../../../apis/movieApi";
import { LoadingButton } from "@mui/lab";

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
  const queryClient = useQueryClient();
  const { handleSubmit, register, control, setValue, watch } = useForm({
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

  const file = watch("hinhAnh"); // [0]

  // useQuery({ queryKey: ["list-movie-admin"]})
  const { mutate: handleAddMovie, isPending } = useMutation({
    mutationFn: (payload) => addMovieAPI(payload),
    onSuccess: () => {
      // call api get list
      queryClient.invalidateQueries({ queryKey: ["list-movie"] });
    },
  });

  const onSubmit = (formValues) => {
    console.log("formValues", formValues.hinhAnh[0]);
    const formData = new FormData();
    formData.append("tenPhim", formValues.tenPhim);
    formData.append("trailer", formValues.trailer);
    formData.append("moTa", formValues.moTa);
    formData.append("maNhom", formValues.maNhom);
    formData.append("sapChieu", formValues.sapChieu);
    formData.append("dangChieu", formValues.dangChieu);
    formData.append("hot", formValues.hot);
    formData.append("danhGia", formValues.danhGia);
    formData.append("hinhAnh", formValues.hinhAnh[0]);
    handleAddMovie(formData);
  };

  const previewImage = (file) => {
    return URL.createObjectURL(file);
  };

  useEffect(() => {
    if (file?.length > 0) {
      console.log("previewImage", previewImage(file?.[0])); // url
    }
  }, [file]);

  console.log(file);
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
                {!file && (
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      type="file"
                      {...register("hinhAnh")}
                      accept=".png,.gif,.jpg"
                    />
                  </Button>
                )}
                {file?.length > 0 && (
                  <>
                    <img src={previewImage(file[0])} width={240} />
                    <Button onClick={() => setValue("hinhAnh", undefined)}>
                      Xoá hình
                    </Button>
                  </>
                )}
                <LoadingButton
                  loading={isPending}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  Thêm phim
                </LoadingButton>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default AddMovie;
