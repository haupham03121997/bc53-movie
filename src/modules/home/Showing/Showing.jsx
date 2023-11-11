import React from "react";
import { getListMovieAPI } from "../../../apis/movieApi";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Showing = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["list-movie"],
    queryFn: getListMovieAPI,
  });
  return (
    <div>
      <Grid container spacing={4}>
        {/* row */}
        {data.map((item) => (
          <Grid item xs={3} key={item.maPhim}>
            {/* col */}
            <Card>
              <CardMedia
                sx={{ height: 180 }}
                image={item.hinhAnh}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.tenPhim}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.moTa}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" variant="contained" fullWidth>
                  Xem chi tiết
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Showing;
