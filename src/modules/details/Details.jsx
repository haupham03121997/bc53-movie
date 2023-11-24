import React from "react";
import { Box } from "@mui/material";
import MovieProfile from "./MovieProfile";
import ShowTimes from "./ShowTimes";
import { useParams } from "react-router-dom";
import { getListMovieAPI } from "../../apis/movieApi";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { movieId } = useParams();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["list-movie"],
    queryFn: getListMovieAPI,
    staleTime: 50000,
  });
  console.log("data details", data);
  return (
    <Box>
      <MovieProfile movieId={movieId} />
      <ShowTimes movieId={movieId} />
    </Box>
  );
};

export default Details;
