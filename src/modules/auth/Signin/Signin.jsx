import { Button, Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { signinAPI } from "../../../apis/userAPI";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../routes/path";

const Signin = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const { mutate: handleSignin, isPending } = useMutation({
    mutationFn: (values) => signinAPI(values), //{ taiKhoan : "" , matKhau:""}
    onSuccess: (values) => {
      console.log("values", values);
      navigate(PATH.HOME);
    },
    onError: (error) => {
      console.log("error", error);
      // alert("Lỗi rồi");
    },
  });

  const onSubmit = (formValues) => {
    handleSignin(formValues); // { taiKhoan : "" , matKhau:""}
  };

  return (
    <div>
      Signin
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Tài khoản" fullWidth {...register("taiKhoan")} />
            <TextField
              label="Mật khẩu"
              type="password"
              fullWidth
              {...register("matKhau")}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isPending}
            >
              Đăng nhập
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signin;
